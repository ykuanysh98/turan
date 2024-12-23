<template>
  <div :class="computedClass">
    <slot name="trigger" />

    <v-menu activator="parent" :open-on-focus="false" :close-on-content-click="false">
      <div class="dropdown__list">
        <slot />
      </div>
    </v-menu>

  </div>
</template>

<script lang="ts" setup>

import { computed, defineProps } from 'vue';

const props = defineProps({
  block: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: 'primary',
  },
});


const computedClass = computed(() => {
  let classList = ['dropdown']
  if (props.variant) {
    classList.push(`dropdown__variant--${props.variant}`)
  }
  if (props.block) {
    classList.push(`dropdown__block`)
  }
  return classList
});
</script>

<style lang="scss" scoped>
.dropdown {
  &__list {
    // width: 100%;
    margin-top: 8px;
    box-shadow: 0px 4px 6px -2px #0A0D1208;
    box-shadow: 0px 12px 16px -4px #0A0D1214;
  }

  &__variant {
    &--secondary {}
  }

  &__block {
    width: 100%;
  }
}
</style>