<script setup lang="ts">
    import { reactive, onMounted, ref } from 'vue';
    import axios from 'axios';
    import CreateComponent from '../components/Modal/User/Create.Component.vue'
    import UpdateComponent from '../components/Modal/User/Update.Component.vue'

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
    const isLoading = ref(true);

    const url = 'https://67e656b06530dbd3110f8cd8.mockapi.io/pao/users';   
    const fetchData = async () => {
        try {
            const response = await axios.get(url); 
            state.users = response.data;
            isLoading.value = false;
        } catch (error) {
            isLoading.value = true;
            console.error('Error fetching data:', error);
        }
    }

    onMounted(async () => {
        await fetchData();
    });

    const btnSubmit = ref(true)
       const setDataEdit = reactive({
        id: '',
        name: '',
        email: '',
        phone_number: ''
    })

    const openModalUpdate = ref<boolean>(false);

    const setValueEdit = (id: string) => {
        const user = state.users.find(user => user.id === id); 
        if (user) {
            setDataEdit.id = user.id;
            setDataEdit.name = user.name;
            setDataEdit.email = user.email;
            setDataEdit.phone_number = user.phone_number;
            openModalUpdate.value = true;
        }
    }


    const handleSubmit = async () => {
        if (btnSubmit.value) {
            await createData();
        } else {
            await updateData();
        }
    }

    const onDelete = async (id: string) => {
        try {
            await axios.delete(`${url}/${id}`);
            state.users = state.users.filter(user => user.id !== id);
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone_number',
            key: 'phone_number',
        },
        {
            title: 'Operation',
            dataIndex: '',
            key: 'operation',
        },
    ]

    const openModalCreate = ref<boolean>(false);

    const handleAdd = () => {
        openModalCreate.value = true;
    }

    const createSuccess = async (e: Event) => {
        await fetchData();
        openModalCreate.value = e;
    }

    const updateSuccess = async (e: Event) => {
         await fetchData();
        openModalUpdate.value = e;
    }
</script>

<template>
    <div style="text-align: left;">
        <div class="title">
            <h2>List Users</h2>
            <a-button class="editable-add-btn" style="margin-bottom: 15px" @click="handleAdd">Create User</a-button>
        </div>

        <a-table :dataSource="state.users" :columns="columns" :loading="isLoading" style="margin-top: 20px;">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'operation'">
                    <span>
                        <a @click="setValueEdit(record.id)">Edit</a>
                    </span> |
                    <a-popconfirm
                        v-if="state.users.length"
                        title="Sure to delete?"
                        @confirm="onDelete(record.id)"
                    >
                    <a>Delete</a>
                    </a-popconfirm>
                </template>
              </template>
        </a-table>
        
        <CreateComponent :isOpen="openModalCreate" @isClose="createSuccess"/>
        <UpdateComponent :isOpen="openModalUpdate" @isClose="updateSuccess" :data="setDataEdit"/>
    </div>
</template>

<style lang="scss" scoped>
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        justify-items: center;
    }
</style>