<template>
  <div :class="computedClass">
    <div v-if="$slots.top" class="card__top">
      <slot name="top"></slot>
    </div>

    <slot></slot>

    <div v-if="$slots.bottom" class="card__bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "md",
  },
});

// Динамикалық класс есептеу
const computedClass = computed(() => {
  let list = ["card"];
  if (props.variant) {
    list.push(`card__variant--${props.variant}`);
  }
  if (props.size) {
    list.push(`card__size--${props.size}`);
  }
  return list;
});
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__size {
    &--md {
      grid-gap: 16px;
    }
    &--lg {
      grid-gap: 20px;
    }
  }
}
</style>
