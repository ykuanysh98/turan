<template>
  <AtomCard :class="computedClass" :text="text" :link="link" discount="35000" size="xs" :variant="variant">
    <template #top>
      <v-img src="https://placehold.co/200x600" alt="Өнім атауы" height="200px" class="product-image" cover></v-img>
    </template>

    <AtomTitle title="Өнім атауы" size="sm" />

    <AtomText class="mt-1" label="300 000 ₸" variant="link" size="lg">
      265 000 ₸
    </AtomText>

    <AtomText class="mt-4">
      Небольшое описание про товар или категория
    </AtomText>

    <div v-if="$slots.default" class="product__action">
      <slot />
    </div>

  </AtomCard>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: '',
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
