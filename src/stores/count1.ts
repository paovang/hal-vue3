// src/stores/counter.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("Pinia");

  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  async function setName(newName: string) {
    name.value = newName;
  }

  return {
    count,
    name,
    doubleCount,
    increment,
    setName,
  };
});
