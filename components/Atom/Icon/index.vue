<template>
  <img :class="computedClass" :src="path" :alt="icon" />
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  icon: {
    type: String,
    default: "search",
  },
  variant: {
    type: String,
    default: "secondary",
  },
  size: {
    type: String,
    default: "md",
  },
});

const path = computed(() => {
  if (props.variant !== "secondary") {
    return new URL(
      `./assets/${props.icon}-${props.variant}.svg`,
      import.meta.url
    ).href;
  }
  return new URL(`./assets/${props.icon}.svg`, import.meta.url).href;
});

const computedClass = computed(() => {
  let list = ["atom-icon"];
  if (props.variant) {
    list.push(`atom-icon__variant--${props.variant}`);
  }
  if (props.size) {
    list.push(`atom-icon__size--${props.size}`);
  }
  return list;
});
</script>

<style lang="scss" scoped>
.atom-icon {
  cursor: pointer;
  &__variant {
    &--primary {
    }
    &--secondary {
    }
  }
  &__size {
    &--md {
    }
    &--xs {
      width: 16px;
    }
  }
}
</style>
