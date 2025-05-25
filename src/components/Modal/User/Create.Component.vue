<template>
  <div>
    <a-modal v-model:open="props.isOpen" title="Create User" @ok="handleOk" @cancel="handleCancel">
        <div class="box-main">
            <div class="box">
                <label>UserName:</label>
                <a-input v-model:value="form.name" placeholder="Please Enter Name..." />
            </div>
            <div class="box">
                <label>Email:</label>
                <a-input v-model:value="form.email" placeholder="Please Enter Email..." />
            </div>
             <div class="box">
                <label>Phone Number:</label>
                <a-input v-model:value="form.phone_number" placeholder="Please Enter Phone Number..." />
            </div>
        </div>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
    import { ref, reactive } from 'vue';
    import axios from 'axios';

    const form = reactive({
        id: '',
        name: '',
        email: '',
        phone_number: ''
    });
    const url = 'https://67e656b06530dbd3110f8cd8.mockapi.io/pao/users'; 

    const createData = async () => {
        try {
            const response = await axios.post(url, {
                name: form.name,
                email: form.email,
                phone_number: form.phone_number
            });

            form.name = '';
            form.email = '';
            form.phone_number = '';
        } catch (error) {
            console.error('Error creating data:', error);
        }
    }

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: false,
    }
});
const emit = defineEmits(['isClose'])

const handleCancel = () => {
    emit('isClose', false)
}

const handleOk = async (e: MouseEvent) => {
  await createData();

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

