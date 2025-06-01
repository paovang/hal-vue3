<template>
  <div>
    <a-modal v-model:open="store.isOpen" title="Update User" @ok="handleOk" @cancel="handleCancel">
        <div class="box-main">
            <div class="box">
                <label>UserName:</label>
                <a-input v-model:value="store.setDataEdit.name" placeholder="Please Enter Name..." />
            </div>
            <div class="box">
                <label>Email:</label>
                <a-input v-model:value="store.setDataEdit.email" placeholder="Please Enter Email..." />
            </div>
             <div class="box">
                <label>Phone Number:</label>
                <a-input v-model:value="store.setDataEdit.phone_number" placeholder="Please Enter Phone Number..." />
            </div>
        </div>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>    
    import axios from 'axios';
    import { useUserStore } from '../../../stores/user.store';

    const store = useUserStore();

    const url = 'https://67e656b06530dbd3110f8cd8.mockapi.io/pao/users'; 

    const UpdateData = async () => {
        try {
            await axios.put(`${url}/${store.setDataEdit.id}`, {
                name: store.setDataEdit.name,
                email: store.setDataEdit.email,
                phone_number: store.setDataEdit.phone_number
            });
        } catch (error) {
            console.error('Error updating data:', error);
        }
    }
const emit = defineEmits(['isClose'])

const handleCancel = () => {
    
}

const handleOk = async (e: MouseEvent) => {
  await UpdateData();
};
</script>

<style lang="scss" scoped>
    .box-main {
        margin-top: 20px;
        .box {
            margin-bottom: 20px;
        }
    }
</style>

