<script setup>
const props = defineProps({
  cardDetails: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="border-black border-2">
    <div class="w-1/4 ml-auto mr-auto">
      <img :src="cardDetails.photo" alt="item img" />
    </div>
    <p>{{ cardDetails.name }}</p>
    <div class="flex gap-1">
      <p>price</p>
      <p>{{ cardDetails.price }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
