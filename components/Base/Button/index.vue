<template>
  <button :class="computedClass">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
  },
  block: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const computedClass = computed(() => {
  let classList = ['btn']
  if (props.variant) {
    classList.push(`btn__variant--${props.variant}`)
  }
  if (props.size) {
    classList.push(`btn__size--${props.size}`)
  }
  if (props.block) {
    classList.push(`btn__block`)
  }
  if (props.disabled) {
    classList.push(`btn__disabled`)
  }
  return classList
});

</script>

<style lang="scss" scoped>
.btn {
  border-radius: 8px;

  &__block {
    width: 100%;
  }

  &__variant {
    &--primary {
      background-color: #7F56D9;
      color: white;
    }

    &--secondary {
      background-color: #fff;
      color: #414651;
      border: 1px solid #D5D7DA;
    }
  }

  &__size {
    &--xl {
      height: 60px;
      padding: 16px 28px;

      font-size: 18px;
      font-weight: 600;
      line-height: 28px;
    }

    &--lg {
      height: 48px;
      padding: 12px 24px;

      font-size: 16px;
      font-weight: 600;
      line-height: 24px;

    }

    &--md {
      height: 44px;
      padding: 10px 18px;

      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
    }

    &--xs {
      height: 40px;
      padding: 10px 16px;

      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
    }

    &--sm {
      height: 36px;
      padding: 8px 14px;

      //styleName: Text sm/Semibold;
      font-family: Inter;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;

    }
  }

  &__disabled {
    // background-color: transparent;
    opacity: .3;
    // background-color: #E9D7FE;
  }
}
</style>
