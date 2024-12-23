<template>
  <div class="checkout ">

    <v-container v-if="emptyShow" class="flex-start gap-6">
      <OrganismCheckout class="checkout__left" @click="emptyShow = true" />
      <MoleculeCheck />
    </v-container>

    <MoleculeEmpty v-if="!emptyShow" title="Ваш заказ принят" text="Ожидайте звонка от менеджера в ближайшее время.
    " label="Рекомендуем войти в личный кабинет, чтобы не потерять понравившиеся вам товары">

      <BaseButton variant="outline" @click="emptyShow = false" block>
        Вход
      </BaseButton>
      <BaseButton block>На главную</BaseButton>

    </MoleculeEmpty>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const emptyShow = ref(false);
</script>

<style lang="scss" scoped>
.checkout {
  padding-top: 40px;

  &__left {
    min-width: 596px;
    height: 776px;
  }
}
</style>