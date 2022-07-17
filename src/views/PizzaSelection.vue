<script setup>
import { computed } from "vue";
import { mainStore } from "../stores/store.js";
import PizzaCard from "../components/PizzaCard.vue";
const store = mainStore();
console.log(store);
const cardDetails = computed(() => {
  return store.getCardsDetails;
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <PizzaCard
      v-for="card in cardDetails"
      :key="card.id"
      :card-details="card"
    ></PizzaCard>
  </div>
</template>

<style lang="scss" scoped></style>
