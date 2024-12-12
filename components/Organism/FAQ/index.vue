<template>
  <div class="py-[96px] bg-white">
    <v-container class="pt-0">
      <AtomTitle title="Вопросы и ответы">
      </AtomTitle>
      <div class="py-[64px] grid grid-cols-3 gap-y-[64px]  gap-x-[32px]">
        <AtomCard variant="secondary" v-for="(item, i) in 6" :key="i">
          <template #top>
            <v-icon icon="mdi-email"></v-icon>
          </template>

          <AtomTitle title="Сколько времени займет изготовление мебели?"
            subtitle="Сроки зависят от сложности заказа и выбранных материалов. Обычно изготовление занимает от 7 до 14 рабочих дней"
            size="xs">
          </AtomTitle>
        </AtomCard>
      </div>

      <AtomCard variant="col" text="Свяжитесь с нашим менеджером, если вы не нашли свой вопрос" bg>
        <template #bottom>
          <BaseButton>Связаться</BaseButton>
        </template>

        <AtomTitle title="Остались вопросы?" size="xs">
        </AtomTitle>
      </AtomCard>
    </v-container>
  </div>
</template>