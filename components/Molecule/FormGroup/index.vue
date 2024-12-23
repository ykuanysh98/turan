<template>
  <form :class="computedClass" @submit.prevent="handleSubmit">
    <div class="molecule-form__wrap">
      <slot />
    </div>

    <AtomDivider v-if="$slots.bottom" class="col-span-2" />

    <div v-if="$slots.bottom" class="molecule-form__bottom">
      <slot name="bottom" />
    </div>
  </form>
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
});

const computedClass = computed(() => {
  let classList = ['molecule-form']
  if (props.variant) {
    classList.push(`molecule-form__variant`)
    classList.push(`molecule-form__variant--${props.variant}`)
  }
  if (props.size) {
    classList.push(`molecule-form__size`)
    classList.push(`molecule-form__size--${props.size}`)
  }
  return classList
});


const handleSubmit = () => {
  return
  // console.log('Form submitted:');
};

</script>


<style lang="scss" scoped>
.molecule-form {
  &__wrap {
    display: grid;
    grid-gap: 16px;
  }

  &__variant {
    &--primary {
      background-color: #FAFAFA;
      border-radius: 16px;

      .molecule-form__wrap {}

      .molecule-form__bottom {
        display: none;
      }
    }

    &--secondary {
      background-color: #FFF;
      border-radius: 16px;

      .molecule-form__wrap {}

      .molecule-form__bottom {
        display: block;
      }
    }
  }

  &__size {
    &--lg {
      .molecule-form__wrap {
        padding: 0;
      }
    }

    &--md {
      .molecule-form__wrap {
        padding: 40px 32px 40px 32px;
      }
    }

    &--xs {
      .molecule-form__wrap {
        padding: 24px;
      }

      .molecule-form__bottom {
        padding: 16px;
      }
    }
  }
}
</style>