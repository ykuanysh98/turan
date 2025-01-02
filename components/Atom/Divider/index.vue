<template>
  <div
    class="divider"
    :style="`background-color:${color}; height: ${height}`"
  ></div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "#E9EAEB",
  },
  height: {
    type: String,
    default: "1px",
  },
});
</script>

<style lang="scss" scoped>
.divider {
  width: 100%;
  border-radius: 5px;
}
</style>
