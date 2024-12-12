<template>
  <div class="search-input__wrapper flex gap-2">
    <v-icon color="#717680">{{ 'mdi-magnify' }}</v-icon>
    <input :id="id" :type="type" :placeholder="placeholder" :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="['search-input__field', { 'input-error': error }]" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "Enter value",
  },
  type: {
    type: String as () => "text" | "email" | "password" | "number",
    default: "text",
  },
  error: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.search-input {
  &__wrapper {
    height: 44px;
    margin: 0 46px;
    padding: 10px 14px;
    border-radius: 8px;
    border: 1px solid #D5D7DA;
    background: #FFFFFF;
  }

  &__field {
    height: 100%;
    outline: none;

    &::placeholder {
      color: #717680;
    }
  }
}
</style>
