<template>
  <div :class="computedClass">
    <div v-if="$slots.top" class="card__top">
      <slot name="top"></slot>
    </div>

    <div>
      <slot></slot>

      <p v-if="link" class="card__link">
        {{ link }} <del v-if="discount">{{ discount }}</del>
      </p>

      <p v-if="text" class="card__text">
        {{ text }}
      </p>
    </div>

    <v-card-actions v-if="$slots.bottom" class="cart-action">
      <slot name="bottom"></slot>
    </v-card-actions>
  </div>
</template>


<script lang="ts" setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
  discount: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'md',
  },
  bg: {
    type: Boolean,
    default: false,
  },
});

// Динамикалық класс есептеу
const computedClass = computed(() => {
  let list = ['card']
  if (props.variant) {
    list.push(`card__variant--${props.variant}`)
  }
  if (props.size) {
    list.push(`card__size--${props.size}`)
  }
  if (props.bg) {
    list.push(`card__bg`)
  }
  return list
});
</script>


<style lang="scss" scoped>
.card {
  border: 1px solid red;

  &__link {
    color: #6941C6;
    display: flex;
    grid-gap: 16px;

    font-size: 18px;
    font-weight: 600;
    line-height: 28px;

    del {
      font-size: 18px;
      font-weight: 400;
      line-height: 28px;
      text-decoration-skip-ink: none;
      color: #717680;
    }
  }

  &__text {
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    color: #535862;
  }

  &__variant {
    &--primary {
      .card__top {
        margin: 0 0 24px 0;
      }

      .card__link {
        margin: 4px 0 0 0;
      }

      .card__text {
        margin: 16px 0 0 0;
        font-size: 16px;
        line-height: 24px;
      }
    }

    &--secondary {
      .card__top {
        margin: 0 0 20px 0;
      }
    }

    &--social {
      .card__top {
        margin: 0 0 16px 0;
      }

      .card__link {
        margin: 16px 0 0 0;
        font-size: 16px;
        line-height: 24px;
      }
    }

    &--col {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .card__text {
        margin: 8px 0 0 0;
      }
    }

  }

  &__bg {
    background: #FAFAFA;
    padding: 32px;
    border-radius: 16px;

  }

  &__size {}

}
</style>