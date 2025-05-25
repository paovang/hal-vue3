<script setup lang="tsx">
// import { renderFancyBox } from '../utils/render-box.utils';
import { RenderFancyBox } from '../utils/render-component';
import { renderMsg } from '../utils/render.utils';
</script>

<template>
    <div>
        <h1>Test1</h1>
        <!-- <component :is="() => renderFancyBox('success')" /> -->
        <RenderFancyBox type="success" />
        <component :is="() => renderMsg()"/>
    </div>
</template>

<style lang="scss" scoped>

</style>