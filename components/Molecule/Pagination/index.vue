<template>
  <div class="pt-[40px]">
    <AtomDivider />

    <div class="flex-between h-[64px]">
      <p class="pagination__text">Страница {{ page }} из {{ pageCount }}</p>

      <MoleculeButtonGroup class="gap-3">
        <BaseButton size="sm" variant="secondary" @click="$emit('prevPage')" :disabled="page === 1">
          <v-icon icon="mdi-arrow-left" start></v-icon> Назад
        </BaseButton>

        <BaseButton size="sm" variant="secondary" @click="$emit('nextPage')" :disabled="page >= pageCount">
          Вперед <v-icon icon="mdi-arrow-right" end></v-icon>
        </BaseButton>
      </MoleculeButtonGroup>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed } from 'vue'

// const pageCount = ref(15);
// const page = ref(1);

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  page: {
    type: Number,
    default: 0
  },
  pageCount: {
    type: Number,
    default: 0
  }
})

</script>


<style lang="scss">
.pagination {
  &__text {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }

}
</style>
