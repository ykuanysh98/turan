<template>
  <div class="bg-white">
    <v-container class="flex-column gap-10">
      <AtomTitle title="Оставьте заявку"
        subtitle="Мы ответим на любые ваши вопросы, просто заполните форму или посетите наш магазин">
      </AtomTitle>
      <div class="reservation__wrap md:flex-start gap-[64px]">
        <div class="reservation__list">

          <AtomCard v-for="(item, i) in items" :key="i" :link="item.link" variant="social">
            <template #top>
              <v-icon :icon="item.img"></v-icon>
            </template>

            <AtomTitle :title="item.title" :subtitle="item.subtitle" size="sm" />
            <AtomText class="mt-4" variant="link">
              {{ item.link }}
            </AtomText>
          </AtomCard>

        </div>
        <MoleculeFormGroup class="min-w-[40vw]">
          <BaseInput v-model="form.name" label="Имя" class="col-span-2 md:col-span-1" placeholder="Как вас зовут?" />
          <BaseInput v-model="form.city" label="Город" class="col-span-2 md:col-span-1" placeholder="Откуда вы?" />
          <BaseMask maska="+7 (###) ### ## ##" v-model="form.phone" label="Номер телефона" class="col-span-2"
            placeholder="+7 (###) ### ## ##" />
          <BaseTextarea v-model="form.description" label="Чем мы можем вам помочь?" class="col-span-2" placeholder="" />

          <BaseButton class="h-[48px] col-span-2" size="lg">
            Получить консультацию
          </BaseButton>
        </MoleculeFormGroup>
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

const form = ref<any>({
  name: '',
  city: '',
  phone: '',
  description: '',
});

</script>

<style lang="scss" scoped>
.reservation {
  &__wrap {
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
      grid-gap: 64px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 48px 32px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 40px;
    }
  }
}
</style>