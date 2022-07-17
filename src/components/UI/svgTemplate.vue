<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({ name: { type: String, required: true } });

const hrefName = computed(() => `#${props.name}`);
const className = `svg-icon__${props.name}`;
</script>

<template>
  <svg class="svg-icon" :class="className">
    <use :xlink:href="hrefName" width="100%" height="100%" />
  </svg>
</template>

<style>
.svg-icon {
  fill: currentColor;
  stroke: currentColor;
}
</style>

<script>
export default {
  name: "svgTemplate",
};
</script>
