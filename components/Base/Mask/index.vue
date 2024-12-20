<template>
  <div :class="wrapClass">
    <label :for="id" class="base-input__label">{{ label }}</label>

    <div v-if="maska" class="flex-start">
      <span class="base-input__mask">+7</span>

      <div class="base-input__mask--input flex-start">
        <input v-mask="maska" :type="type" :value="modelValue" :id="id" @input="updateValue($event.target.value)" />

        <v-icon v-if="error" color="red">
          {{ 'mdi-alert-circle-outline' }}
        </v-icon>
      </div>
    </div>

    <span v-if="error" class="base-input__error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue';

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
  error: {
    type: String,
    default: '',
  },
});

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

const updateValue = (value: string) => {
  emit('update:modelValue', value);
};
</script>

<style scoped lang="scss">
.base-input {
  display: flex;
  flex-direction: column;
  grid-gap: 6px;

  input {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #181D27;

    &::placeholder {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: #717680;
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
    grid-gap: 8px;
  }

  &__mask {
    padding: 10px 12px 10px 14px;
    border-radius: 8px 0 0 8px;
    border: 1px solid #D5D7DA;
    border-right: none;

    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #717680;

    &--input {
      width: 100%;
      height: 100%;
      padding: 10px 14px;
      border-radius: 0 8px 8px 0;
      border: 1px solid #D5D7DA;
    }
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
        height: 48px;
        padding: 12px 16px;
      }
    }

    &--xs {
      .base-input__inner {
        height: 44px;
        padding: 10px 16px;
      }
    }
  }
}
</style>
