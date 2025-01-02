<template>
  <div class="checkbox">
    <input
      :id="`id-${id}`"
      :checked="isChecked"
      class="checkbox__input"
      type="radio"
      :value="value"
      @change="selectOption"
    />
    <label class="checkbox__label" :for="`id-${id}`"> </label>
    <label v-if="label" :for="`id-${id}`" class="checkbox__text">
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  id: {
    type: Number,
    default: -1,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const isChecked = computed(() => props.modelValue === props.value);

const selectOption = () => {
  emit("update:modelValue", props.value);
};
</script>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;

  &__input {
    display: none;

    &:checked + .checkbox__label {
      // background: var(--color-primary);
    }

    &:checked + .checkbox__label::before {
      opacity: 1;
    }
  }

  &__label {
    width: 21px;
    height: 21px;
    border-radius: 50%;
    display: block;
    background: #ffffff;
    border: 2px solid #7f56d9;
    position: relative;
    cursor: pointer;

    &::before {
      content: "";
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #7f56d9;
      position: absolute;
      top: 5px;
      left: 5px;
      display: block;
      opacity: 0;
    }
  }

  &__text {
    margin-left: 12px;
    // font-size: 14px;
    // font-weight: 500;
    // line-height: 18px;
    // letter-spacing: 0em;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #535862;
  }
}
</style>
