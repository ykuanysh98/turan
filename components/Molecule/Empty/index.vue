<template>
  <div class="empty">
    <img :src="`./images/${'success'}.svg`" alt="">
    <AtomText variant="secondary" size="xl">
      {{ title }}
    </AtomText>
    <AtomText>
      {{ text }}
      <br />
      <br />
      <label>{{ label }}</label>
    </AtomText>
    <div class="empty__bottom">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  title: {
    type: String,
    default: 'md',
  },
  text: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.empty {
  height: calc(100vh - 80px);
  max-width: 400px;
  margin: 0 auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 24px;
  text-align: center;

  img {
    width: 104px;
    height: 104px;
  }

  &__bottom {
    width: 100%;
    display: flex;
    grid-gap: 8px;
  }

}
</style>