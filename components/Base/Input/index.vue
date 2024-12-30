<template>
  <div :class="wrapClass">
    <label v-if="label" :for="id" class="base-input__label">{{ label }}</label>

    <div class="base-input__inner flex-start">
      <AtomIcon v-if="prependIcon" :icon="prependIcon" />
      <input
        :type="type"
        :value="modelValue"
        :id="id"
        :placeholder="placeholder"
        @input="updateValue($event.target.value)"
      />

      <AtomIcon
        v-if="modelValue.length > 0"
        icon="close"
        @click="updateValue('')"
      ></AtomIcon>
    </div>

    <span v-if="error" class="base-input__error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, defineProps, defineEmits } from "vue";
import { nanoid } from "nanoid";
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
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
  placeholder: {
    type: String,
    default: "",
  },
  prependIcon: {
    type: String,
    default: "",
  },
  maska: {
    type: String,
    default: "",
  },
  error: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const id = computed(() => props.id || nanoid());

const wrapClass = computed(() => {
  let classList = ["base-input"];
  if (props.variant) {
    classList.push(`base-input__variant--${props.variant}`);
  }
  if (props.size) {
    classList.push(`base-input__size--${props.size}`);
  }

  return classList;
});

const updateValue = (value: string) => {
  emit("update:modelValue", value);
};

onMounted(() => {
  const input: any = document.querySelector("input");
  const base: any = document.querySelector(".base-input__inner");
  console.log("focused");

  input.addEventListener("focus", () => {
    base.classList.add("focused");
    console.log(1);
  });
  input.addEventListener("blur", () => {
    base.classList.remove("focused");
    console.log(2);
  });
});
</script>

<style scoped lang="scss">
.base-input {
  display: flex;
  flex-direction: column;
  grid-gap: 6px;

  input {
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

  &__inner {
    grid-gap: 8px;
  }

  &__error {
    color: red;
  }

  &__variant {
    &--primary {
      .base-input__inner {
        border-radius: 8px;
        border: 1px solid #d5d7da;
        background-color: #fff;
        box-shadow: 0px 1px 2px 0px #0a0d120d;
      }
    }

    &--secondary {
      .base-input__inner {
      }
    }

    &--shadow {
      .base-input__inner {
        border-radius: 8px;
        border: 1px solid #d5d7da;
        &.focused {
          border: 1px solid #d6bbfb;
          box-shadow: 0px 0px 0px 4px #f4ebff;
        }
      }
    }
    &--shadow-auto {
      .base-input__inner {
        border-radius: 8px;
        border: 1px solid #d6bbfb;
        box-shadow: 0px 0px 0px 4px #f4ebff;
      }
    }
  }

  &__size {
    &--md {
      .base-input__inner {
        height: 48px;
        padding: 12px 16px;
      }
    }

    &--xs {
      .base-input__inner {
        height: 44px;
        padding: 10px 14px;
      }
    }
  }
}
</style>
