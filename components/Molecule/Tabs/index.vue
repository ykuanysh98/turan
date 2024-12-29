<template>
  <div class="tabs">
    <AtomTab @click="selected = 1" :active="selected === 1">Инфо</AtomTab>
    <AtomTab @click="selected = 2" :active="selected === 2" :count="2"
      >Мои заказы</AtomTab
    >
    <AtomDivider class="tabs__divider" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, defineEmits } from "vue";
const selected = ref<number>(1);

const emit = defineEmits(["update:modelValue"]);

watch(selected, (newValue, oldValue) => {
  emit("update:modelValue", newValue);
});
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  align-items: center;
  grid-gap: 16px;
  position: relative;
  &__divider {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
