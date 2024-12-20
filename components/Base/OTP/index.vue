<template>
  <div :class="wrapClass">
    <label :for="id" class="base-input__label">{{ label }} </label>

    <v-otp-input v-model="code" class="base-input__otp" :length="4" :placeholder="placeholder"></v-otp-input>

    <span v-if="text" class="base-input__label">{{ text }}</span>
    <span v-if="error" class="base-input__error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  label: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
  },
  placeholder: {
    type: String,
    default: '',
  },
  prependIcon: {
    type: String,
    default: '',
  },
  maska: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
});

const code = ref<string>('')

const emit = defineEmits(['update:modelValue']);

const wrapClass = computed(() => {
  let classList = ['base-input']
  if (props.variant) {
    classList.push(`base-input__variant--${props.variant}`)
  }
  if (props.size) {
    classList.push(`base-input__size--${props.size}`)
  }

  return classList
});

watch(code, (newValue, oldValue) => {
  emit('update:modelValue', newValue);
});

</script>

<style scoped lang="scss">
.base-input {
  display: flex;
  flex-direction: column;
  grid-gap: 6px;

  &__otp {
    padding: 0;
    justify-content: flex-start;

    &:deep(input) {
      font-size: 48px;
      font-weight: 500;
      line-height: 60px;
      color: #7F56D9;

      &::placeholder {
        color: #D5D7DA;
      }

      &:focus {
        box-shadow: 0px 1px 2px 0px #0A0D120D;
        border: none;
      }
    }

    &:deep(.v-otp-input__content) {
      padding: 0;
      height: 80px;
    }

    &:deep(.v-field__outline) {
      border-radius: 8px;
      border: 1px solid #D6BBFB;
    }
  }

  &__label,
  &__error {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #414651;
  }

  &__inner {
    display: flex;
    grid-gap: 8px;
  }

  &__error {
    color: red;
  }

  &__variant {
    &--primary {
      .base-input__inner {
        border-radius: 8px;
        border: 1px solid #D5D7DA;
      }
    }
  }

  &__size {
    &--md {
      .base-input__inner {
        // height: 48px;
        // padding: 12px 16px;
      }
    }

    &--xs {
      .base-input__inner {
        // height: 44px;
        // padding: 10px 16px;
      }
    }
  }
}
</style>
