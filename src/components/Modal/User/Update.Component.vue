<template>
  <div>
    <a-modal v-model:open="props.isOpen" title="Update User" @ok="handleOk" @cancel="handleCancel">
        <div class="box-main">
            <div class="box">
                <label>UserName:</label>
                <a-input v-model:value="props.data.name" placeholder="Please Enter Name..." />
            </div>
            <div class="box">
                <label>Email:</label>
                <a-input v-model:value="props.data.email" placeholder="Please Enter Email..." />
            </div>
             <div class="box">
                <label>Phone Number:</label>
                <a-input v-model:value="props.data.phone_number" placeholder="Please Enter Phone Number..." />
            </div>
        </div>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
    import { ref, reactive } from 'vue';
    import axios from 'axios';

    const url = 'https://67e656b06530dbd3110f8cd8.mockapi.io/pao/users'; 

    const UpdateData = async () => {
        try {
            const response = await axios.put(`${url}/${props.data.id}`, {
                name: props.data.name,
                email: props.data.email,
                phone_number: props.data.phone_number
            });

            props.data.name = '';
            props.data.email = '';
            props.data.phone_number = '';
        } catch (error) {
            console.error('Error updating data:', error);
        }
    }

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: false,
    },
    data: {
        type: Object,
        required: true
    }
});
const emit = defineEmits(['isClose'])

const handleCancel = () => {
    emit('isClose', false)
}

const handleOk = async (e: MouseEvent) => {
  await UpdateData();

  emit('isClose', false)
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

