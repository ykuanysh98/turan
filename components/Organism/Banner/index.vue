<template>
  <div :class="computedClass">
    <div class="flex-column gap-[40px] max-w-[480px]">
      <AtomTitle :title="title" :subtitle="subtitle" size="lg" main />

      <MoleculeButtonGroup class="gap-3">
        <BaseButton size="xl" variant="secondary" @click="$router.push('/catalog')">Смотреть каталог</BaseButton>
        <BaseButton size="xl">Собрать мебель</BaseButton>
      </MoleculeButtonGroup>
    </div>

    <v-carousel v-if="variant === 'primary'" cycle interval="4000" hide-delimiter-background :show-arrows="true">
      <v-carousel-item v-for="(item, index) in items" :key="index" :src="item.img" cover>
      </v-carousel-item>
    </v-carousel>

    <AtomSlider v-if="variant === 'secondary'" class="w-full md:w-[640px]" :items="bannerList">
    </AtomSlider>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import type { PropType } from 'vue';

interface Item {
  id: string;
  img: string;
}

const props = defineProps({
  items: {
    type: Array as PropType<Item[]>,
    default: () => []
  },
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'primary',
  },
});

const computedClass = computed(() => {
  let classList = ['banner']
  classList.push(`banner--variant--${props.variant}`)
  return classList
});

const bannerList = computed(() => {
  let list = [];
  list.push(
    {
      id: 1,
      title: 'Өнім атауы'
    },
    {
      id: 2,
      title: 'Өнім атауы'
    },
    {
      id: 3,
      title: 'Өнім атауы'
    },
    {
      id: 4,
      title: 'Өнім атауы'
    }
  )
  return list
});
</script>

<style lang="scss" scoped>
.banner {
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
