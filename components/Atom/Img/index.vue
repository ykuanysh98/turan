<template>
  <div class="img flex-center">
    <img :src="img" class="product__image" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  img: {
    type: String,
    default: "https://placehold.co/300x200",
  },
});
</script>

<style lang="scss" scoped>
.img {
  overflow: hidden;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
