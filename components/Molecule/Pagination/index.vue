<template>
  <div class="pt-[80px]">
    <AtomDivider />

    <div class="flex-between h-[64px]">
      <p class="pagination__text">Страница {{ page }} из {{ pageCount }}</p>

      <MoleculeButtonGroup class="gap-3">
        <BaseButton
          size="sm"
          variant="secondary"
          @click="prevPage"
          :disabled="page === 1"
        >
          <AtomIcon icon="arrow-left"></AtomIcon>
          {{ isMobile ? "" : "Назад" }}
        </BaseButton>

        <BaseButton
          size="sm"
          variant="secondary"
          @click="nextPage"
          :disabled="page >= pageCount"
        >
          {{ isMobile ? "" : "Вперед" }}
          <AtomIcon icon="arrow-right"></AtomIcon>
        </BaseButton>
      </MoleculeButtonGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useMobile } from "~/composables/useMobile";
const { isMobile } = useMobile();

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  page: {
    type: Number,
    default: 0,
  },
  pageCount: {
    type: Number,
    default: 0,
  },
  modelValue: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue", "nextPage", "prevPage"]);

const nextPage = () => {
  emit("nextPage");
  if (props.modelValue < props.pageCount) {
    emit("update:modelValue", props.modelValue + 1);
  }
};

const prevPage = () => {
  emit("prevPage");
  if (props.modelValue > 1) {
    emit("update:modelValue", props.modelValue - 1);
  }
};
</script>

<style lang="scss">
.pagination {
  &__text {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #414651;
  }
}
</style>
