<script setup lang="ts">
    import { onMounted } from 'vue';

    import CreateComponent from '../components/Modal/User/Create.Component.vue'
    import UpdateComponent from '../components/Modal/User/Update.Component.vue'
    import { useUserStore } from '../stores/user.store'
    import { useCounterStore } from '../stores/test.store'

    const store = useUserStore();
    const store1 = useCounterStore();

    

    onMounted(async () => {
        await store1.fetchData();
    });

    const setValueEdit = (id: string) => {
        const user = store1.state.users.find(user => user.id === id); 
        if (user) {
            store.setDataEdit.id = user.id;
            store.setDataEdit.name = user.name;
            store.setDataEdit.email = user.email;
            store.setDataEdit.phone_number = user.phone_number;

            store.isOpen = true;
        }
    }

    const onDelete = async (id: string) => {
        await store1.onDelete(id)
    }

    const handleAdd = () => {
        store.isOpen = true;
    }
</script>

<template>
    <div style="text-align: left;">
        <div class="title">
            <h2>List Users</h2>
            <a-button class="editable-add-btn" style="margin-bottom: 15px" @click="handleAdd">Create User</a-button>
        </div>

        <a-table :dataSource="store1.state.users" :columns="store1.columns" :loading="store1.isLoading" style="margin-top: 20px;">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'operation'">
                    <span>
                        <a @click="setValueEdit(record.id)">Edit</a>
                    </span> |
                    <a-popconfirm
                        v-if="store1.state.users.length"
                        title="Sure to delete?"
                        @confirm="onDelete(record.id)"
                    >
                    <a>Delete</a>
                    </a-popconfirm>
                </template>
              </template>
        </a-table>
        
        <CreateComponent/>
        <UpdateComponent/>
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