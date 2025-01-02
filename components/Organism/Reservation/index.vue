<template>
  <div class="reservation">
    <v-container class="flex-column gap-10">
      <AtomTitle
        title="Оставьте заявку"
        subtitle="Мы ответим на любые ваши вопросы, просто заполните форму или посетите наш магазин"
      >
      </AtomTitle>
      <div class="reservation__wrap">
        <div class="reservation__list">
          <AtomCard v-for="(item, i) in items" :key="i" :link="item.link">
            <template #top>
              <AtomIcon :icon="item.img" variant="primary"></AtomIcon>
            </template>

            <AtomTitle
              :title="item.title"
              :subtitle="item.subtitle"
              class="reservation__item-title"
              size="sm"
            />
            <AtomText variant="link">
              {{ item.link }}
            </AtomText>
          </AtomCard>
        </div>

        <MoleculeFormGroup class="reservation__form">
          <BaseInput
            v-model="form.name"
            label="Имя"
            class="col-span-2 md:col-span-1"
            placeholder="Как вас зовут?"
            size="lg"
          />
          <BaseInput
            v-model="form.city"
            label="Город"
            class="col-span-2 md:col-span-1"
            placeholder="Откуда вы?"
            size="lg"
          />
          <BaseMask
            maska="+7 (###) ### ## ##"
            v-model="form.phone"
            label="Номер телефона"
            class="col-span-2"
            placeholder="+7 (###) ### ## ##"
            size="lg"
          />
          <BaseTextarea
            v-model="form.description"
            label="Чем мы можем вам помочь?"
            class="col-span-2"
            placeholder=""
          />
          <!-- <template #bottom> -->
          <BaseButton class="mt-2 col-span-2" size="lg" @click="submit()">
            Получить консультацию
          </BaseButton>
          <!-- </template> -->
        </MoleculeFormGroup>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useUseOrder } from "~/stores/order";
const order = useUseOrder();

const items = [
  {
    title: "Почта",
    subtitle: "",
    link: "turan-furniture@gmail.com",
    img: "mail",
  },
  {
    title: "Whats’app",
    subtitle: "",
    link: "Перейти",
    img: "message",
  },
  {
    title: "Магазин",
    subtitle: "Круглосуточно 10:00 – 20:00",
    link: "г. Шымкент, ул. Куатбек Айтмуханбетов, дом 8",
    img: "map",
  },
  {
    title: "Номер для связи",
    subtitle: "Наши менеджера на связи 24/7",
    link: "+7 (777) 700-80 08",
    img: "phone",
  },
];

const form = ref<any>({
  name: "",
  city: "",
  phone: "",
  description: "",
});

const submit = function () {
  order.add(form);
};
</script>

<style lang="scss" scoped>
.reservation {
  background-color: #fff;
  padding: 96px 0 14px 0;
  @media (max-width: 768px) {
    padding: 96px 16px;
  }

  &__wrap {
    display: flex;
    grid-gap: 64px;
    align-items: flex-start;

    @media (max-width: 768px) {
      flex-direction: column;
      grid-gap: 64px;
    }
  }

  &__list {
    width: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 48px 32px;

    @media (max-width: 768px) {
      width: 100%;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 40px;
    }
  }
  &__item-title {
    height: 62px;
    @media (max-width: 768px) {
      height: auto;
    }
  }
  &__form {
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>
