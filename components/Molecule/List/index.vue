<template>
  <div class="atom-list">
    <div v-if="items.length" class="atom-list__item" v-for="item in items" :key="item.id">

      <div v-if="checkbox">
        <AtomCheckbox v-model="selected" :id="item.id" :value="item.id" :label="item.name" />
      </div>

      <div v-else-if="radio">
        <AtomRadiobox v-model="selected" :id="item.id" :value="item.id" :label="item.name" />
      </div>

      <div v-else class="flex-items gap-3">
        <slot name="prepend"></slot>

        <AtomText v-if="!checkbox && !radio" variant="different" size="xs" block>
          {{ item }}
        </AtomText>
      </div>

      <AtomText variant="different" size="sm">
        12
      </AtomText>
    </div>

    <div v-else class="atom-list__item">
      Нет результат
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, watch } from 'vue';

type TreeNode = {
  id: number;
  title: string;
  link: string;
  name: string;
};

// Props типі
const props = defineProps<{
  items: TreeNode[];
  checkbox: {
    type: Boolean,
    default: false
  },
  radio: {
    type: Boolean,
    default: false
  },
}>();

const emit = defineEmits(['update:modelValue']);

const selected = ref<string[]>([]);

watch(selected, (newValue) => {
  emit('update:modelValue', newValue);
})
</script>

<style lang="scss" scoped>
.atom-list {
  width: 100%;
  background-color: #fff;
  border-radius: 12px;

  &__item {
    height: 40px;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-gap: 12px;
  }
}
</style>