<template>
  <div :class="computedClass">
    <AtomImg class="product__top" />
    <div class="product__body">
      <AtomTitle v-if="item?.title" :title="item?.title" size="sm" block />

      <AtomText
        v-if="item?.price"
        class="mt-1"
        label="300 000 ₸"
        variant="link"
        size="lg"
      >
        {{ item.price }}
      </AtomText>

      <AtomText v-if="item?.text" class="mt-4">
        {{ item.text }}
      </AtomText>

      <div class="product__actions">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Item {
  id: number;
  title: string;
  price: string;
  text: string;
}

import { defineProps, computed } from "vue";
import type { PropType } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  item: {
    type: [Array, Object] as PropType<Item>,
    default: () => {},
  },
  link: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "primary",
  },
});

const computedClass = computed(() => {
  let classList = ["product"];
  if (props.variant) {
    classList.push(`product__variant--${props.variant}`);
  }
  return classList;
});
</script>

<style lang="scss" scoped>
.product {
  width: 100%;
  text-align: left;
  &__actions {
    margin-top: 24px;
    display: flex;
    align-items: center;
    grid-gap: 16px;
  }

  &__variant {
    &--primary {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      grid-gap: 24px;

      .product__top {
        width: 100%;
        height: 296px;
      }
    }
    &--col {
      display: flex;
      flex-direction: row;
      align-items: center;
      grid-gap: 24px;
      .product__top {
        width: 240px;
        height: 240px;
      }
    }
  }
}
</style>
