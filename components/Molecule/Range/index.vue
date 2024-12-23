<template>
  <div class="range">
    <BaseInput v-model="range[0]" label="От" />
    <BaseInput v-model="range[1]" label="До" />
    <AtomDivider />
    <v-range-slider v-model="range" step="1" thumb-label="always">
    </v-range-slider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const range = ref([20, 40])
</script>

<style lang="scss" scoped>
.range {
  background: #FFFFFF;
  border: 1px solid #F5F5F5;
  border-radius: 8px;
  box-shadow: 0px 4px 6px -2px #0A0D1208;
  box-shadow: 0px 12px 16px -4px #0A0D1214;
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
    color: #181D27;

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
    background-color: #E9EAEB;
  }

  &:deep(.v-slider-track__fill) {
    background-color: #7F56D9;
  }

  &:deep(.v-slider-thumb__surface) {
    background: #FFFFFF;
    border: 1px solid #7F56D9;
    box-shadow: 0px 2px 4px -2px #0A0D120F;
    box-shadow: 0px 4px 8px -2px #0A0D121A;
  }
}
</style>