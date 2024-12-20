<template>
  <div :class="wrapClass">
    <h1 v-if="main">
      {{ title }}
    </h1>

    <h2 v-else-if="title">
      {{ title }}

      <span class="atom-title__discount" v-if="discount">{{ discount }}</span>
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
  block: {
    type: Boolean,
    default: false,
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
  if (props.block) {
    list.push(`atom-title__block`)
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

      h1 {
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
        color: #181D27;
      }

      h2 {
        font-size: 30px;
        font-weight: 600;
        line-height: 38px;
        color: #181D27;
      }

      h3 {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: #535862;
      }
    }

    &--sm {
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

  &__variant {
    &--secondary {

      h1,
      h2,
      h3 {
        color: #FFF;
        box-shadow: 0px 1px 2px 0px #0A0D120D;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 6;
      }
    }

    &--different {
      grid-gap: 4px;

      h2 {
        display: flex;
        align-items: flex-end;
        grid-gap: 8px;
      }

      h3 {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }

      .atom-title__discount {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #535862;

        text-decoration: line-through;
      }
    }
  }

  &__block {
    width: 100%;
  }
}
</style>
