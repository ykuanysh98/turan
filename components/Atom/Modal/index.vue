<template>
  <div :class="classWrap">
    <div class="modal__trigger" @click="open">
      <slot name="trigger" />
    </div>
    <div class="modal__body" v-if="isOpen">
      <slot />
      <v-btn class="modal__close" icon="mdi-close" variant="text" @click="close"></v-btn>
    </div>
    <div class="modal__bg" v-if="isOpen" @click=close></div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { useModal } from '~/composables/useModal'
const { isOpen, open, close } = useModal();

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})

const classWrap = computed(() => {
  let list = ['modal'];
  if (props.variant) {
    list.push(`modal__variant--${props.variant}`)
  }
  return list;
})
</script>

<style scoped>
.modal {
  &__bg {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    background-color: #00000025;
  }

  &__close {
    position: absolute;
    right: 5px;
    top: 18px;
  }

  &__body {
    width: 100%;
    max-width: 600px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background-color: #fff;
    border-radius: 12px;
  }

  &__variant {
    &--top {
      .modal__body {
        border: 1px solid red;
        top: 0;
        left: 0;
        transform: translate(0, 0);
        border-radius: 0;

        &:deep(.atom-list) {
          border-radius: 0;
        }
      }
    }
  }
}
</style>