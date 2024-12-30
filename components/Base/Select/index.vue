<template>
  <div :class="computedClass">
    <label v-if="label" class="select__label">{{ label }}</label>
    <AtomDropdown v-model="isOpen" :close-click="true" variant="select">
      <template #trigger>
        <div class="select__wrap">
          <p>{{ selected || placeholder }}</p>
          <AtomIcon
            class="select__down"
            :class="{ 'select__down--active': isOpen }"
            icon="down-bottom"
          />
        </div>
      </template>
      <MoleculeList v-model="selected" :items="items" value-key="title" />
    </AtomDropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineProps } from "vue";

const isOpen = ref<boolean>(false);
const selected = ref("");

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "md",
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const computedClass = computed(() => {
  let classList = ["select"];
  if (props.variant) {
    classList.push(`select__variant--${props.variant}`);
  }
  if (props.size) {
    classList.push(`select__size--${props.size}`);
  }
  return classList;
});
</script>

<style lang="scss" scoped>
.select {
  display: flex;
  flex-direction: column;
  grid-gap: 6px;

  &__wrap {
    display: flex;
    justify-content: space-between;
    grid-gap: 8px;
    cursor: pointer;

    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #181d27;

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

  &__variant {
    &--primary {
      .select__wrap {
        border-radius: 8px;
        border: 1px solid #d5d7da;
        background-color: #fff;
      }
    }
    &--secondary {
      .select__wrap {
      }
    }
  }

  &__size {
    &--lg {
      .select__wrap {
        height: 48px;
        padding: 12px 16px;
      }
    }
    &--md {
      .select__wrap {
        height: 44px;
        padding: 10px 16px;
      }
    }
  }

  &__down {
    display: inline-block;
    transition: transform 0.3s ease;
    &--active {
      transform: rotate(180deg);
    }
  }
}
</style>
