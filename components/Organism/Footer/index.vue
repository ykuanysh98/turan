<template>
  <div class="footer">
    <v-container>
      <div class="footer__wrap">
        <AtomLogo />
        <div class="footer__links">
          <NuxtLink :to="item.link" v-for="(item, index) in items" :key="index">
            <AtomText>
              {{ item.title }}
            </AtomText>
          </NuxtLink>
        </div>
      </div>
      <AtomDivider />
      <div class="footer__bottom flex-between gap-4">
        <AtomCopyright />
        <div class="flex-between gap-2">
          <p>Документ</p>
          <p>Документ</p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    title: "Каталог",
    link: "/catalog",
  },
  {
    title: "Конструктор мебели",
    link: "/",
  },
  {
    title: "Оставить заявку",
    link: "/",
  },
  {
    title: "Как работает конструктор",
    link: "/",
  },
  {
    title: "Контакты",
    link: "/",
  },
  {
    title: "Вопросы и ответы",
    link: "/",
  },
];
</script>

<style lang="scss" scoped>
.footer {
  padding: 0 0 48px 0;
  background-color: #fafafa;
  &__wrap {
    padding: 64px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 32px;
  }
  &__links {
    height: 24px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    grid-gap: 32px;
  }
  &__bottom {
    padding-top: 32px;
  }
}

@media (max-width: 768px) {
  .footer {
    &__wrap {
      padding: 48px 0;
      align-items: flex-start;
    }

    &__links {
      height: auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 12px 32px;
      // flex-direction: column;
      // align-items: center;
    }

    &__bottom {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }
}
</style>
