<template>
  <div class="range">
    <!-- От -->
    <BaseInput v-model="localRange[0]" label="От" @input="updateRange" />

    <!-- До -->
    <BaseInput v-model="localRange[1]" label="До" @input="updateRange" />

    <AtomDivider />
    {{ range }}
    <!-- Слайдер -->
    <v-range-slider v-model="range" :max="1000" step="1" thumb-label="always" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed, defineProps, defineEmits } from "vue";

// Props және emit анықтау
const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

// Жергілікті state (қолданушының енгізуін сақтау үшін)
const range = ref<any>([...props.modelValue]);
const localRange = ref([...props.modelValue]);

// Ата-аналық компонентке өзгерісті жіберу
const updateRange = () => {
  range.value = [...localRange.value];
  emit("update:modelValue", localRange.value);
};

watch(
  () => range.value,
  (newRange) => {
    localRange.value = [...newRange];
    console.log(newRange, "new");

    emit("update:modelValue", newRange);
  }
);

// watch(
//   () => props.modelValue,
//   (newValue) => {
//     localRange.value = [...newValue];
//   }
// );
</script>

<style lang="scss" scoped>
.range {
  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 8px;
  // box-shadow: 0px 4px 6px -2px #0A0D1208;
  // box-shadow: 0px 12px 16px -4px #0A0D1214;
  padding: 16px;

  display: flex;
  flex-direction: column;
  grid-gap: 16px;

  &:deep(.v-slider-thumb__label) {
    bottom: inherit;
    top: 25px;
    background-color: transparent;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #181d27;

    &::before {
      display: none;
    }
  }

  &:deep(.v-slider-track__background) {
    display: none;
  }

  &:deep(.v-slider-track) {
    height: 8px;
    border-radius: 4px;
    background-color: #e9eaeb;
  }

  &:deep(.v-slider-track__fill) {
    background-color: #7f56d9;
  }

  &:deep(.v-slider-thumb__surface) {
    background: #ffffff;
    border: 1px solid #7f56d9;
    box-shadow: 0px 2px 4px -2px #0a0d120f;
    box-shadow: 0px 4px 8px -2px #0a0d121a;
  }
}
</style>
