<template>
  <div class="carousel">
    <Carousel v-bind="carouselConfig">
      <Slide v-for="slide in items" :key="slide">
        <MoleculeProduct :item="slide" :variant="variant" />
      </Slide>

      <template #addons>
        <CarouselNavigation>
          <template #prev>
            <span>
              <v-icon icon="mdi-chevron-left" size="25"></v-icon>
            </span>
          </template>
          <template #next>
            <span>
              <v-icon icon="mdi-chevron-right" size="25"></v-icon>
            </span>
          </template>
        </CarouselNavigation>
      </template>
    </Carousel>
    <div class="carousel__curtain"></div>
  </div>
</template>

<script lang="ts" setup>
import "vue3-carousel/carousel.css";
import {
  Carousel,
  Slide,
  Navigation as CarouselNavigation,
} from "vue3-carousel";

import { computed, defineProps } from "vue";

// const carouselConfig = {
//   itemsToShow: 1.5,
//   wrapAround: true,
//   snapAlign: "start",
//   gap: 32,
//   breakpoints: {
//     768: { itemsToShow: 2 },
//     1024: { itemsToShow: 2.5 },
//   },
// };

const carouselConfig = computed(() => {
  let obj = {
    itemsToShow: 1.5,
    wrapAround: true,
    snapAlign: "start",
    gap: 32,
    breakpoints: {
      768: { itemsToShow: props.count + 0.5 },
      1024: { itemsToShow: props.count + 1 },
    },
  };
  return obj;
});

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  variant: {
    type: String,
    default: "primary",
  },
  count: {
    type: Number,
    default: 1.5,
  },
});
</script>

<style scoped>
.carousel {
  border: 1px solid red;

  &__curtain {
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 100%;
    background-color: aqua;
    background: linear-gradient(90deg, rgba(250, 250, 250, 0) 0%, #fafafa 100%);
  }

  &:deep(.carousel__prev) {
    left: -25px;
    z-index: 1;
  }

  &:deep(.carousel__next) {
    right: -25px;
    z-index: 1;
  }

  span {
    width: 36px;
    height: 36px;
    padding: 8px;
    border-radius: 50%;
    background-color: #fff;
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.carousel-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
