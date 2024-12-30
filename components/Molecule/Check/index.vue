<template>
  <div class="check flex-column gap-6">
    <div class="flex-column gap-2">
      <AtomText variant="secondary" size="xl"> Ваш заказ </AtomText>
      <AtomText>
        Оставьте заявку на оформление заказа, и наши менеджеры с вами свяжутся.
        Оплата после консультации
      </AtomText>
    </div>

    <div class="flex-between" v-for="item in items" :key="item.id">
      <AtomText size="xs">
        {{ item.name }}
      </AtomText>
      <AtomText class="font-semibold" variant="secondary" size="xs">
        {{ item.text }}
      </AtomText>
    </div>

    <div class="flex-between">
      <AtomText> Общая стоимость </AtomText>
      <AtomText class="font-semibold" variant="secondary"> 362 000 ₸ </AtomText>
    </div>

    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const items = reactive<any>([
  {
    id: 1,
    name: "Товары",
    text: "3 шт",
  },
  {
    id: 2,
    name: "Стоимость",
    text: "362 000 ₸",
  },
]);
</script>

<style lang="scss" scoped>
.check {
  padding: 16px;
  border-radius: 12px;
  background-color: #fff;
}
</style>
