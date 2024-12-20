<template>
  <div class="bg-[#FAFAFA]">
    <v-container>
      <div class="footer flex-column flex-center gap-8 py-[64px]">
        <NuxtLink to="/">
          <img class="max-w-md" src="/images/Logo.svg" alt="logo" />
        </NuxtLink>
        <div class="footer__links w-full flex-between">
          <NuxtLink class="footer__link" v-for="(item, index) in items" :key="index">
            {{ item }}
          </NuxtLink>
        </div>
      </div>
      <AtomDivider />
      <div class="footer__bottom flex-between gap-4 mt-8 mb-[48px]">
        <AtomCopyright />
        <div class="flex-between gap-2">
          <p>Документ</p>
          <p>Документ</p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      'Home',
      'About Us',
      'Team',
      'Services',
    ],
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-instagram',
    ],
  }),
}
</script>

<style lang="scss" scoped>
.footer {
  &__links {
    height: 24px;
    flex-wrap: wrap;
    grid-gap: 24px;
  }

  &__link {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: #535862;
  }
}

@media (max-width: 768px) {

  .footer {
    padding: 48px 0;
    align-items: flex-start;

    &__links {
      height: auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 32px 12px;
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