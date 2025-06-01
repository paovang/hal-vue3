<script setup lang="ts">
    const props = defineProps(['isshow'])
    const emit = defineEmits(['isParent'])
</script>

<template>
    <div>
        Title: {{ props.isshow }}
        <button @click="$emit('isParent', 'Thanks For You...')">Send To Parent</button>
    </div>
</template>

<style lang="scss" scoped>

</style>