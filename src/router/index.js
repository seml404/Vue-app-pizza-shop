import { createRouter, createWebHistory } from "vue-router";
import PizzaSelection from "../views/PizzaSelection.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "pizzaOrder",
      component: PizzaSelection,
    },
  ],
});

export default router;
