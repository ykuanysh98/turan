<template>
  <div class="organism-auth">
    <div class="organism-auth__form" :class="{ 'organism-auth__form--all': step === 3 }">
      <AtomLogo class="w-full" />

      <MoleculeAuth @change="step = $event" />

      <AtomCopyright />
    </div>
    <MoleculeOnboarding v-if="step !== 3" class="organism-auth__onboarding" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const step = ref<any>(1);

</script>

<style lang="scss" scoped>
.organism-auth {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__form {
    width: 50%;
    height: 100vh;
    padding: 36px 32px 32px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &--all {
      width: 100%;
    }
  }

  &__onboarding {
    height: 100vh;
    width: 50%;
  }
}
</style>