<template>
  <div class="checkbox">
    <input
      :id="`id-${id}`"
      :checked="isChecked"
      class="checkbox__input"
      :value="value"
      type="checkbox"
      @change="toggleSelection"
    />
    <label class="checkbox__label" :for="`id-${id}`"> </label>
    <label v-if="label" :for="`id-${id}`" class="checkbox__text">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: {
    type: Array as () => string[], // Таңдалған жауаптар массиві
    required: true,
  },
  value: {
    type: String,
    default: "",
  },
  id: {
    type: Number,
    default: -1,
  },
  label: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const isChecked = computed(() => props.modelValue.includes(props.value));

const toggleSelection = () => {
  const updatedValue = isChecked.value
    ? props.modelValue.filter((item) => item !== props.value)
    : [...props.modelValue, props.value];

  emit("update:modelValue", updatedValue);
};
</script>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;

  &__input {
    display: none;

    &:checked + .checkbox__label {
      // background: #098609;
    }

    &:checked + .checkbox__label::before {
      opacity: 1;
    }
  }

  &__label {
    width: 21px;
    height: 21px;
    border-radius: 5px;
    display: block;
    background: #f9f5ff;
    border: 2px solid #7f56d9;
    position: relative;
    cursor: pointer;

    &::before {
      content: "";
      width: 9px;
      height: 6px;
      position: absolute;
      top: 5px;
      left: 4px;
      display: block;
      transform: rotate(310deg);
      border: 2px solid #7f56d9;
      border-top: none;
      border-right: none;
      opacity: 0;
    }
  }

  &__text {
    margin-left: 12px;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    cursor: pointer;
  }
}
</style>
