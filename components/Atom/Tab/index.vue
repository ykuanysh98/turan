<template>
  <div class="tab" :class="{ 'tab--active': active }">
    <slot />
    <AtomCircle v-if="count" variant="secondary">{{ count }}</AtomCircle>

    <AtomDivider
      v-if="active"
      class="tab__divider"
      height="2px"
      color="#6941c6"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  count: {
    type: [Number, String],
    default: 0,
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.tab {
  position: relative;
  padding: 0 4px 16px 4px;
  display: flex;
  align-items: center;
  grid-gap: 8px;

  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  &--active {
    color: #6941c6;
  }
  &__divider {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
