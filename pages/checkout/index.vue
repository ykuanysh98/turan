<template>
  <div class="checkout">
    <v-container class="flex-center">
      <div v-if="!emptyShow" class="checkout__wrap">
        <OrganismCheckout class="checkout__left" @click="emptyShow = true" />
        <MoleculeCheck />
      </div>

      <MoleculeEmpty
        v-else
        title="Ваш заказ принят"
        text="Ожидайте звонка от менеджера в ближайшее время."
        label="Рекомендуем войти в личный кабинет, чтобы не потерять понравившиеся вам товары"
      >
        <BaseButton variant="outline" @click="emptyShow = false" block>
          Вход
        </BaseButton>
        <BaseButton block>На главную</BaseButton>
      </MoleculeEmpty>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const emptyShow = ref(false);
</script>

<style lang="scss" scoped>
.checkout {
  padding: 40px 0;

  &__wrap {
    display: flex;
    align-items: flex-start;
    grid-gap: 24px;

    @media (max-width: 768px) {
      flex-direction: column;
      grid-gap: 40px;
    }
  }

  &__left {
    min-width: 596px;
    @media (max-width: 768px) {
      width: 100%;
      min-width: 100%;
    }
  }
}
</style>
