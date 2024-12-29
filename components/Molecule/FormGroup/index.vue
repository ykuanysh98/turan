<template>
  <form :class="computedClass" @submit.prevent="handleSubmit">
    <div class="molecule-form__wrap">
      <slot />
    </div>

    <AtomDivider v-if="bottomLine" class="col-span-2" />

    <div class="molecule-form__bottom">
      <slot name="bottom" />
    </div>
  </form>
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
  bottomLine: {
    type: Boolean,
    default: false,
  },
  interactive: {
    type: Boolean,
    default: false,
  },
});

const computedClass = computed(() => {
  let classList = ["molecule-form"];
  if (props.variant) {
    classList.push(`molecule-form__variant`);
    classList.push(`molecule-form__variant--${props.variant}`);
  }
  if (props.size) {
    classList.push(`molecule-form__size`);
    classList.push(`molecule-form__size--${props.size}`);
  }
  if (props.interactive) {
    classList.push(`molecule-form__interactive`);
  }
  return classList;
});

const handleSubmit = () => {
  return;
  // console.log('Form submitted:');
};
</script>

<style lang="scss" scoped>
.molecule-form {
  width: 100%;
  &__wrap {
    display: grid;
  }

  &__bottom {
    margin-top: 24px;
  }

  &__variant {
    &--primary {
      background-color: #fafafa;
      border-radius: 16px;

      .molecule-form__wrap {
      }

      .molecule-form__bottom {
      }
    }

    &--secondary {
      background-color: #fff;
      border-radius: 16px;

      .molecule-form__wrap {
      }

      .molecule-form__bottom {
      }
    }
  }

  &__size {
    &--lg {
      .molecule-form__wrap {
        padding: 0;
        grid-gap: 20px;
      }
    }

    &--md {
      .molecule-form__wrap {
        padding: 40px 32px 40px 32px;
        grid-gap: 16px;
      }
    }

    &--xs {
      .molecule-form__wrap {
        padding: 24px;
        grid-gap: 24px;

        @media (min-width: 768px) {
          padding: 24px 16px;
        }
      }

      .molecule-form__bottom {
        margin: 0;
        padding: 16px;
      }
    }
  }

  &__interactive {
    .molecule-form__wrap {
      padding: 0;
    }
  }
}
</style>
