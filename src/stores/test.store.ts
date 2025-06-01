import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import axios from "axios";

interface User {
  id: string;
  name: string;
  email: string;
  phone_number: string;
}

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  const name = ref("");

  const setName = () => {
    name.value = "alex";
  };

  async function increment() {
    count.value++;
  }

  const state = reactive<{ users: User[] }>({
    users: [],
  });
  const isLoading = ref(true);

  const url = "https://users67e656b06530dbd3110f8cd8.mockapi.io/pao/";
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      state.users = response.data;
      isLoading.value = false;
    } catch (error) {
      isLoading.value = true;
      console.error("Error fetching data:", error);
    }
  };

  const onDelete = async (id: string) => {
    try {
      await axios.delete(`${url}/${id}`);
      state.users = state.users.filter((user) => user.id !== id);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: "Operation",
      dataIndex: "",
      key: "operation",
    },
  ];

  return {
    count,
    name,
    setName,
    increment,
    fetchData,
    state,
    isLoading,
    onDelete,
    columns,
  };
});
