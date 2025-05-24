<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import ShowCardmponent from "../components/CardShow.component.vue";
    import axios from 'axios';
    // import { useCounterStore } from '../stores/counter';

    // const counter = useCounterStore();

    import { useCounterStore } from '../stores/count1';

    interface User {
        name: string;
        email: string;
        phone_number: string;
    }

    const counter = useCounterStore();

   const datas = ref<User[] | null>(null);
    const error = ref<Error | null>(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://67e656b06530dbd3110f8cd8.mockapi.io/pao/users');
            datas.value = response.data;
        } catch (err: unknown) {
            if (err instanceof Error) {
                error.value = err; 
            } else {
                error.value = new Error('Unknown error occurred');
            }
        }
    };

    const number = ref(0);
    const data = ref(0);

    const submitToChild = async () => {
        data.value = Number(number.value);

        await counter.setName('John Doe');
    }
    const handleUpdate = (value: string) => {
        console.log(value);
    }

    const CountNumber = () => {
        counter.increment();
    }

    onMounted(async () => {
       await fetchData();
    });
</script>

<template>
    <div class="container">
    <div class="parent">
        <p v-if="error">{{ error }}</p>
        <div v-for="(item, indx) in datas" :key="indx">
            <p>
                {{ item.name }} - {{ item.email }} - {{ item.phone_number }}
            </p>
        </div>
        <hr>
        <input type="text" v-model="number" placeholder="Number..." />
        <br><br>
        <button @click="submitToChild">Submit</button>
        <button @click="CountNumber">Count: {{ counter.count }}</button>
        <p>Double: {{ counter.doubleCount }}</p>
        <p>Name: {{ counter.name }}</p>
    </div>
    <br>
    <hr>
    <br>
    <div>
        Children:
        <ShowCardmponent :msg="data" @update="handleUpdate"/>
    </div>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        width: 100%;
        height: 100vh;
        padding: 50px;
        text-align: center;
    }
</style>

/** PAO */