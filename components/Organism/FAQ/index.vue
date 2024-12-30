<template>
  <div class="FAQ">
    <v-container class="flex-column gap-[64px]">
      <AtomTitle title="Вопросы и ответы"> </AtomTitle>

      <div class="FAQ__wrap">
        <AtomCard size="lg" v-for="(item, i) in items" :key="i">
          <template #top>
            <AtomCircle>
              <AtomIcon :icon="item.img" variant="primary"></AtomIcon>
            </AtomCircle>
          </template>

          <AtomTitle :title="item.title" :subtitle="item.subtitle" size="sm">
          </AtomTitle>
        </AtomCard>
      </div>

      <div class="FAQ__bottom flex-between mobile-not">
        <AtomTitle
          title="Остались вопросы?"
          subtitle="Свяжитесь с нашим менеджером, если вы не нашли свой вопрос"
          size="sm"
        >
        </AtomTitle>

        <BaseButton>Связаться</BaseButton>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    title: "Сколько времени займет изготовление мебели?",
    subtitle:
      "Сроки зависят от сложности заказа и выбранных материалов. Обычно изготовление занимает от 7 до 14 рабочих дней",
    img: "clock",
  },
  {
    title: "Доставляете ли вы мебель?",
    subtitle:
      "Да, мы осуществляем доставку по вашему адресу. Также доступны услуги сборки, если они необходимы",
    img: "truck",
  },
  {
    title: "Как я могу оплатить заказ?",
    subtitle:
      "Оплатить можете после звонка с консультантом, через Kaspi. Также принимаем наличный расчет",
    img: "coins",
  },
  {
    title: "Что делать, если я не уверен в своём дизайне?",
    subtitle:
      "Вы можете обратиться к нашим консультантам. Они помогут с выбором модели, материалов и ответят на любые вопросы",
    img: "help",
  },
  {
    title: "Есть ли гарантия на мебель?",
    subtitle:
      "Да, мы предоставляем гарантию на нашу мебель сроком до 2 лет (в зависимости от изделия)",
    img: "pocket",
  },
  {
    title: "Какие предметы мебели можно собрать?",
    subtitle:
      "Вы можете создать шкафы, столы, кровати, полки, комоды, кухонные гарнитуры и многое другое. Весь процесс зависит от ваших предпочтений и доступных моделей",
    img: "package",
  },
];
</script>

<style lang="scss" scoped>
.FAQ {
  padding: 96px 0;
  background-color: #fff;
  @media (max-width: 575px) {
    padding: 96px 16px;
  }
  &__wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 64px 32px;
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 40px 24px;
    }
    @media (max-width: 575px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 40px;
    }
  }
  &__bottom {
    width: 100%;
    padding: 32px;
    background-color: #fafafa;
    grid-gap: 24px;

    // flex-between items-start
  }
}
</style>
