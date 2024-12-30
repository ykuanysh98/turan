<template>
  <div :class="wrapClass">
    <label :for="id" class="base-input__label">{{ label }}</label>
    <textarea
      :type="type"
      :value="modelValue"
      v-bind="inputProps"
      :id="id"
      :placeholder="placeholder"
      @input="updateValue($event.target.value)"
    ></textarea>
    <span v-if="text" class="base-input__text">{{ text }}</span>
    <span v-if="error" class="base-input__span">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";
import { nanoid } from "nanoid";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  error: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const id = computed(() => props.id || nanoid());

const wrapClass = computed(() => {
  let classList = ["base-input"];
  classList.push(`base-input--${props.variant}`);
  return classList;
});

const inputProps = computed(() => ({
  class: "base-input__input",
  "aria-describedby": props.error ? "error-text" : undefined,
}));

const updateValue = (value: string) => {
  emit("update:modelValue", value);
};
</script>

<style scoped lang="scss">
.base-input {
  display: flex;
  flex-direction: column;
  grid-gap: 6px;

  &__label,
  &__span {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #414651;
  }

  &__text {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #535862;
  }

  &__input {
    outline: none;
    resize: none;

    height: 128px;
    padding: 12px 16px;
    border-radius: 8px;

    border: 1px solid #d5d7da;
    background-color: #fff;
  }

  &__span {
    color: red;
  }
}
</style>
