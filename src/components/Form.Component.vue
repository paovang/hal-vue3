<script setup lang="ts">
    const props = defineProps({
        msg: {
            type: String,
            default: '',
            required: true,
        },
         football: {
            type: String,
            required: true,
        }
    });
    const emit = defineEmits(['callbackMsg']);

    const CallBackMsg = () => {
        emit('callbackMsg', 'Hello from Child');
    }
</script>

<template>
    <div>
        <h1>Children: {{ props.msg }}</h1>
        <button @click="CallBackMsg">Send Msg: {{ football }}</button>
    </div>
</template>

<style lang="scss" scoped>

</style>