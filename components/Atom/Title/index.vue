<template>
  <div :class="wrapClass">
    <h1 v-if="main">
      {{ title }}
    </h1>

    <h2 v-else>
      {{ title }}
    </h2>

    <h3 v-if="subtitle">
      {{ subtitle }}
    </h3>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  discount: {
    type: String,
    default: '',
  },
  main: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'md',
  },
})

const wrapClass = computed(() => {
  let list = ['atom-title']
  if (props.variant) {
    list.push(`atom-title__variant--${props.variant}`)
  }
  if (props.size) {
    list.push(`atom-title__size--${props.size}`)
  }
  return list;
})
</script>


<style lang="scss" scoped>
.atom-title {
  border: 1px solid green;
  display: flex;
  flex-direction: column;

  &__size {

    &--lg {
      grid-gap: 16px;

      h1,
      h2 {
        font-size: 48px;
        font-weight: 600;
        line-height: 60px;
        letter-spacing: -0.02em;
        color: #181D27;

      }

      h3 {
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        color: #535862;
      }
    }

    &--md {
      grid-gap: 20px;

      h1,
      h2 {
        font-size: 36px;
        font-weight: 600;
        line-height: 44px;
        letter-spacing: -0.02em;
        color: #181D27;
      }

      h3 {
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        color: #535862;
      }
    }

    &--xs {
      grid-gap: 8px;

      h1,
      h2 {
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        color: #181D27;

      }

      h3 {
        color: #535862;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;

      }
    }
  }
}
</style>
