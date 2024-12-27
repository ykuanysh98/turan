<template>
  <AtomCard :class="computedClass" :text="text" :link="link" discount="35000" size="xs" :variant="variant">
    <template #top>
      <v-img src="https://placehold.co/200x600" alt="Өнім атауы" height="200px" class="product-image" cover></v-img>
    </template>

    <AtomTitle v-if="item?.title" :title="item?.title" size="sm" block />

    <AtomText v-if="item?.price" class="mt-1" label="300 000 ₸" variant="link" size="lg">
      {{ item.price }}
    </AtomText>

    <AtomText v-if="item?.text" class="mt-4">
      {{ item.text }}
    </AtomText>

    <div v-if="$slots.default" class="product__action">
      <slot />
    </div>

  </AtomCard>
</template>

<script lang="ts" setup>
interface Item {
  id: number,
  title: string,
  price: string,
  text: string,
}

import { defineProps, computed } from 'vue'
import type { PropType } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  item: {
    type: [Array, Object] as PropType<Item>,
    default: () => { },
  },
  link: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: '',
  },
})

const computedClass = computed(() => {
  let classList = ['product']
  if (props.variant) {
    classList.push(`product__variant--${props.variant}`)
  }
  return classList
});
</script>

<style lang="scss" scoped>
.product {
  width: 100%;
  text-align: left;

  &__action {
    margin-top: 24px;
    display: flex;
    align-items: center;
    grid-gap: 16px;
  }

  &__variant {
    &--col {
      height: 240px;
    }
  }
}
</style>
