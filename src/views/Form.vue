<script setup lang="ts">
    import { reactive, onMounted, ref } from 'vue';
    import axios from 'axios';
    

    interface User {
        id: string;
        name: string;
        email: string;
        phone_number: string;
    }

    const state = reactive<{ users: User[] }>(
        {
            users: []
        }
    );

    const form = reactive({
        id: '',
        name: '',
        email: '',
        phone_number: ''
    });
    const url = 'https://67e656b06530dbd3110f8cd8.mockapi.io/pao/users';   
    const fetchData = async () => {
        try {
            const response = await axios.get(url); 
            state.users = response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    onMounted(async () => {
        await fetchData();
    });


    const createData = async () => {
        try {
            const response = await axios.post(url, {
                name: form.name,
                email: form.email,
                phone_number: form.phone_number
            });
            state.users.push(response.data);
            // await fetchData();

            form.name = '';
            form.email = '';
            form.phone_number = '';
        } catch (error) {
            console.error('Error creating data:', error);
        }
    }

    const btnSubmit = ref(true)

    const setValueEdit = (id: string) => {
        const user = state.users.find(user => user.id === id); 
        if (user) {
            form.id = user.id;
            form.name = user.name;
            form.email = user.email;
            form.phone_number = user.phone_number;
            btnSubmit.value = false; // Change button to Update
        }
    }

    const updateData = async () => {
        try {
            const response = await axios.put(`${url}/${form.id}`, {
                name: form.name,
                email: form.email,
                phone_number: form.phone_number
            });
           
            await fetchData();

            form.name = '';
            form.email = '';
            form.phone_number = '';
            btnSubmit.value = true; // Reset button to Submit
        } catch (error) {
            console.error('Error updating data:', error);
        }
    }


    const handleSubmit = async () => {
        if (btnSubmit.value) {
            await createData();
        } else {
            await updateData();
        }
    }
</script>

<template>
    <div>
        <h1>Form Create</h1>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="form.name" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="form.email" required>
            </div>
            <div>
                <label for="phone_number">Phone Number:</label>
                <input type="text" id="phone_number" v-model="form.phone_number" required>
            </div>
            <button type="submit" v-if="btnSubmit">Submit</button>
            <button type="submit" v-else>Update</button>
        </form>

        <div>
            <h1>Users:</h1>  
            <ul>
                <li v-for="(user, index) in state.users" :key="index">
                    {{ index+1 }}. {{ user.name }} - {{ user.email }} - {{ user.phone_number }}
                    <span>
                        <button @click="setValueEdit(user.id)">Edit</button>
                    </span>
                </li>
            </ul>
            </div>
    </div>
</template>

<style lang="scss" scoped>

</style>