<script setup lang="tsx">
// import { renderFancyBox } from '../utils/render-box.utils';
import { RenderFancyBox } from '../utils/render-component';
import { renderMsg } from '../utils/render.utils';
import { useCounterStore } from '../stores/test.store'
import TestComponent12 from '../components/Test.component.vue';
import { ref } from 'vue';

const store = useCounterStore();

const msgFromChil = ref('');

const showMessageFromChild = (e: string) => {
    msgFromChil.value = e;
}

</script>

<template>
    <div>
        <h1>Number: {{ store.count }}</h1>
        <h1>Name: {{ store.name }}</h1>
        <div>
            <button @click="store.increment">Add +</button>
        </div>
        <div>
            <button @click="store.setName">Set-Name</button>
        </div>
        <!-- <component :is="() => renderFancyBox('success')" /> -->
        <RenderFancyBox type="success" />
        <component :is="() => renderMsg()"/>

            <div>
                Parents:{{ msgFromChil }}
                <div>
                    <TestComponent12 :isshow="'Hello Paovang'" @isParent="showMessageFromChild" />
                </div>
            </div>
    </div>
</template>

<style lang="scss" scoped>

</style>