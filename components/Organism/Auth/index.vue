<template>
  <div class="auth flex-between">
    <div class="auth__left">
      <AtomLogo class="w-full" />
      <div class="max-w-[360px]">
        <slot />
      </div>
      <AtomCopyright />
    </div>
    <MoleculeOnboarding v-if="onboarding" />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";

const step = ref<any>(1);

const props = defineProps({
  steper: {
    type: String,
    default: 1,
  },
  onboarding: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.auth {
  height: 100vh;

  &__left {
    width: 100%;
    height: 100%;
    padding: 36px 32px 32px 32px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
      padding: 24px 16px 32px 16px;
    }
  }
}
</style>
