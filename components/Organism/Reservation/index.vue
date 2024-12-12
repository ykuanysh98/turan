<template>
  <div class="bg-white">
    <v-container class="flex-column gap-10">
      <AtomTitle title="Оставьте заявку"
        subtitle="Мы ответим на любые ваши вопросы, просто заполните форму или посетите наш магазин">
      </AtomTitle>
      <div class="flex-start gap-[64px]">
        <div class="grid grid-cols-2 gap-y-[48px]  gap-x-[32px]">

          <AtomCard v-for="(item, i) in items" :key="i" :link="item.link" variant="social">
            <template #top>
              <v-icon :icon="item.img"></v-icon>
            </template>

            <AtomTitle :title="item.title" :subtitle="item.subtitle" size="xs" />
          </AtomCard>

        </div>
        <MoleculeFormGroup class="min-w-[40vw]" />
      </div>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const items = [
  {
    title: 'Почта',
    subtitle: '',
    link: 'turan-furniture@gmail.com',
    img: 'mdi-email',
  },
  {
    title: 'Whats’app',
    subtitle: '',
    link: 'Перейти',
    img: 'mdi-chat',
  },
  {
    title: 'Магазин',
    subtitle: 'Круглосуточно 10:00 – 20:00',
    link: 'г. Шымкент, ул. Куатбек Айтмуханбетов, дом 8',
    img: 'mdi-map',
  },
  {
    title: 'Номер для связи',
    subtitle: 'Наши менеджера на связи 24/7',
    link: '+7 (777) 700-80 08',
    img: 'mdi-phone',
  },
]
</script>