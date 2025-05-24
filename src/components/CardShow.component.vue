<script setup lang="ts">
import { ref } from "vue";

    const props = defineProps({
        msg: {
            type: Number,
            default: 0,
            required: false,
        }
    });

    const emit = defineEmits<{
        (e: 'update', value: string): void
    }>();
    const msgToParent = ref('');
    const updateMsg = () => {
        emit('update', msgToParent.value);
    }
</script>

<template>
    <div>
        <h1>Data From Parent: {{ props.msg }}</h1>
        <hr>
        <input type="text" v-model="msgToParent" placeholder="Msg..." />
        <br>
        <button @click="updateMsg">Send to Parent</button>
    </div>
</template>

<style lang="scss" scoped>

</style>