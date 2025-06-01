import { defineStore } from "pinia";
import { reactive } from "vue";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    count: 0,
    name: "",
    isOpen: false,
    setDataEdit: reactive({
      id: "",
      name: "",
      email: "",
      phone_number: "",
    }),
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
      this.name = "alex";
    },
  },
});
