<template>
  <div :class="computedClass">
    <label v-if="label" class="select__label">{{ label }}</label>
    <AtomDropdown :close-click="true">
      <template #trigger>
        <div class="select__wrap">
          <p>{{ selected || placeholder }}</p>
          <v-icon icon="mdi-chevron-down"></v-icon>
        </div>
      </template>
      <MoleculeList v-model="selected" :items="items" value-key="title" />
    </AtomDropdown>
  </div>
</template>


<script lang="ts" setup>
import { ref, computed, defineProps } from 'vue';

const selected = ref('');

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'primary',
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const computedClass = computed(() => {
  let classList = ['select']
  classList.push(`select--${props.variant}`)
  return classList
});
</script>

<style lang="scss" scoped>
.select {
  display: flex;
  flex-direction: column;
  grid-gap: 6px;

  &__wrap {
    height: 48px;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #D5D7DA;
    display: flex;
    justify-content: space-between;
    grid-gap: 8px;
    cursor: pointer;

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
}
</style>