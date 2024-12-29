<template>
  <div :class="computedClass">
    <div v-if="$slots.top" class="card__top">
      <slot name="top"></slot>
    </div>

    <div class="card__body">
      <slot></slot>
    </div>

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

  &__variant {
    &--primary {
      .card__top {
        margin: 0 0 24px 0;
      }
    }

    &--secondary {
      .card__top {
        margin: 0 0 20px 0;
      }
    }

    &--social {
      .card__top {
        margin: 0 0 16px 0;
      }
    }

    &--col {
      display: flex;
      justify-content: space-between;
      align-items: center;
      grid-gap: 24px;

      .card__top {
      }

      .card__body {
        width: 100%;
      }
    }
  }
}
</style>
