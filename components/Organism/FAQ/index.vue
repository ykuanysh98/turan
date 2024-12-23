<template>
  <div class="py-[96px] bg-white">
    <v-container class="pt-0">
      <AtomTitle title="Вопросы и ответы">
      </AtomTitle>
      <div class="pt-[64px] md:py-[64px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-[64px]  gap-x-[32px]">
        <AtomCard variant="secondary" v-for="(item, i) in 6" :key="i">
          <template #top>
            <AtomCircle>
              <v-icon icon="mdi-email-outline" size="20"></v-icon>
            </AtomCircle>
          </template>

          <AtomTitle title="Сколько времени займет изготовление мебели?"
            subtitle="Сроки зависят от сложности заказа и выбранных материалов. Обычно изготовление занимает от 7 до 14 рабочих дней"
            size="sm">
          </AtomTitle>
        </AtomCard>
      </div>

      <div class="w-full pa-8 bg-[#FAFAFA] flex-between items-start gap-6 mobile-not">
        <AtomTitle title="Остались вопросы?" subtitle="Свяжитесь с нашим менеджером, если вы не нашли свой вопрос"
          size="sm">
        </AtomTitle>

        <BaseButton>Связаться</BaseButton>

      </div>
    </v-container>
  </div>
</template>