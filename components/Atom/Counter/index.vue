<template>
  <div class="counter">
    <button class="counter__btn" @click="minus">
      <AtomIcon icon="minus" />
    </button>
    <input type="number" v-model="count" class="counter__input" />
    <button class="counter__btn counter__btn--right" @click="plus">
      <AtomIcon icon="plus" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// ref<number> пайдаланылады
const count = ref<number>(0);
const max = ref<number>(10);

const plus = () => {
  if (count.value < max.value) {
    count.value += 1; // .value арқылы өзгерту
  }
};

const minus = () => {
  if (count.value > 0) {
    count.value -= 1; // .value арқылы өзгерту
  }
};
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;

  &__input {
    width: 40px;
    height: 40px;
    border-top: 1px solid #d5d7da;
    border-bottom: 1px solid #d5d7da;

    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: #414651;
    text-align: center;
  }

  &__btn {
    width: 44px;
    height: 40px;
    border: 1px solid #d5d7da;
    border-radius: 8px 0 0 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    // width: 11.67px;
    // height: 11.67px;
    // color: #717680
    &--right {
      border-radius: 0 8px 8px 0;
    }
  }
}

input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
