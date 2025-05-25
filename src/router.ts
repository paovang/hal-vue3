import { createRouter, createWebHistory } from "vue-router";
import UserPage from "./views/user.vue";
import TestPage from "./views/Test.vue";
import FormInput from "./views/Form.vue";
import Test1Page from "./views/Test1.vue";
import WorkPage from "./views/Work.vue";

const routes = [
  {
    path: "/users",
    component: UserPage,
  },
  {
    path: "/companies",
    component: UserPage,
  },

  {
    path: "/test",
    component: TestPage,
  },

  {
    path: "/form",
    component: FormInput,
  },
  {
    path: "/test1",
    component: Test1Page,
  },
  {
    path: "/work",
    component: WorkPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
