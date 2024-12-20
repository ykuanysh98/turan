<template>
  <div class="molecule-auth">
    <AtomAuthRegister v-if="step === 1" @click="step = 3" />
    <AtomAuthLogin v-else-if="step === 2" @click="step = 3" />
    <AtomAuthCode v-else-if="step === 3" @click="$router.push('/')" />

    <div v-if="step === 1" class="molecule-auth__control">
      <p class="molecule-auth__text">У вас уже есть аккаунт?</p>
      <p class="molecule-auth__link" @click="step = 2">Войти в аккаунт</p>
    </div>

    <div v-if="step === 2" class="molecule-auth__control">
      <p class="molecule-auth__text">У вас еще нет аккаунта?</p>
      <p class="molecule-auth__link" @click="step = 1">Создать аккаунт</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, defineEmits } from 'vue'

const step = ref<any>(1);

const emit = defineEmits<{
  (event: 'change', payload: Number): void;
}>()

watch(step, (newValue, oldValue) => {
  emit('change', newValue);
});
</script>

<style lang="scss">
.molecule-auth {
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 32px;

  &__control {
    display: flex;
    align-items: center;
    grid-gap: 4px;
  }

  &__text {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #535862;
  }

  &__link {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: #6941C6;
  }
}
</style>