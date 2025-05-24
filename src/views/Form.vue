<script setup lang="ts">
    import {reactive} from 'vue';
    
    const form = reactive({
        amount: 0,
        price: 0,
        total: 0,
    });

    const submitData = () => {
        form.total = form.amount * form.price;
    }
</script>

<template>
    <div>
        <h1>Form</h1>
        <p>Total Price: {{ form.total }}</p>
        <input type="text" v-model="form.amount" placeholder="Enter Amount..." />
        <br>
        <br>
        <input type="text" v-model="form.price" placeholder="Enter Price..." />
        <br>
        <br>
        <button @click="submitData">Submit</button>
    </div>
</template>

<style lang="scss" scoped>

</style>