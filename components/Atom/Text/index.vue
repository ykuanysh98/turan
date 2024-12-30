<template>
  <p :class="computedClass">
    <slot />
    <label v-if="label">
      {{ label }}
    </label>
  </p>
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
  label: {
    type: String,
    default: "",
  },
  block: {
    type: Boolean,
    default: false,
  },
});

const computedClass = computed(() => {
  let list = ["atom-text"];
  if (props.variant) {
    list.push(`atom-text__variant--${props.variant}`);
  }
  if (props.size) {
    list.push(`atom-text__size--${props.size}`);
  }
  if (props.block) {
    list.push(`atom-text__block`);
  }
  return list;
});
</script>

<style lang="scss" scoped>
.atom-text {
  &__variant {
    &--primary {
      color: #535862;
    }

    &--secondary {
      color: #181d27;
    }

    &--link {
      color: #6941c6;

      label {
        margin-left: 16px;
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        color: #717680;
        text-decoration: line-through;
      }
    }

    &--different {
      color: #414651;

      label {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #535862;
      }
    }
  }

  &__size {
    &--xll {
      font-size: 30px;
      font-weight: 600;
      line-height: 38px;
    }

    &--xl {
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
    }

    &--lg {
      font-size: 18px;
      font-weight: 600;
      line-height: 28px;
    }

    &--md {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }

    &--xs {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }

    &--sm {
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;

      color: #717680;
    }
  }

  &__block {
    width: 100%;
  }
}
</style>
