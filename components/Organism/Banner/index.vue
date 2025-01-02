<template>
  <div :class="computedClass">
    <div class="flex-column gap-[40px] max-w-[480px]">
      <AtomTitle :title="title" :subtitle="subtitle" size="lg" main />

      <MoleculeButtonGroup class="gap-3">
        <BaseButton
          size="xl"
          variant="secondary"
          @click="$router.push('/catalog')"
        >
          Смотреть каталог
        </BaseButton>
        <BaseButton size="xl">Собрать мебель</BaseButton>
      </MoleculeButtonGroup>
    </div>

    <AtomSlider
      class="w-full md:w-[640px]"
      :items="bannerList"
      variant="secondary"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { useBannerStore } from "~/stores/banner";
const banner = useBannerStore();

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
});

const computedClass = computed(() => {
  let classList = ["banner"];
  return classList;
});

const bannerList = computed(() => {
  let list = [];

  if (banner.bannerData) {
    list = banner.bannerData;
  }

  for (let i = 1; i < 5; i++) {
    list.push({
      id: i,
      title: "Өнім атауы",
    });
  }

  return list;
});
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-gap: 24px;
  flex-wrap: wrap;
  &--variant {
    &--secondary {
      display: flex;
      align-items: center;
      justify-content: space-between;
      grid-gap: 12px;
    }
  }
}

@media (max-width: 768px) {
  .banner {
    flex-direction: column;
    grid-gap: 40px;
  }
}
</style>
