<template>
  <div :class="[computedClass, 'flex-center']">
    <slot />
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
  let list = ["circle"];
  if (props.variant) {
    list.push(`circle__variant--${props.variant}`);
  }
  if (props.size) {
    list.push(`circle__size--${props.size}`);
  }
  return list;
});
</script>

<style lang="scss" scoped>
.circle {
  &__variant {
    &--primary {
      width: 48px;
      height: 48px;
      padding: 9px 0px 9px 0px;
      border-radius: 28px;

      font-size: 20px;
      font-weight: 600;
      line-height: 30px;
      color: #6941c6;
      background: #f4ebff;
      border: 8px solid #f9f5ff;
    }
    &--secondary {
      width: 22px;
      height: 22px;
      padding: 2px 8px;
      border-radius: 28px;

      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      text-align: center;
      color: #414651;
      background-color: #f5f5f5;
    }
  }
}
</style>
