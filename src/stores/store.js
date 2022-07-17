import { defineStore } from "pinia";
import { gettersComposition } from "./main/getters.js";
import { actionsComposition } from "./main/actions.js";
import { state } from "./main/state.js";
export const mainStore = defineStore({
  id: "mainStore",
  state: state,
  actions: actionsComposition(),
  getters: gettersComposition(),
});
