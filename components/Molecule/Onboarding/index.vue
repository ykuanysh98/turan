<template>
  <div class="molecule-onboarding">
    <AtomTitle
      title="“Мы много трудились, чтобы дать вам уникальный продукт, первый в Казахстане сайт-конструктор мебели. Начните превращать ваши идеи в реальность”"
      variant="secondary" />
    <AtomTitle title="Имя Фамилия основателя" subtitle="Основатель компании ИП “Туран”" variant="secondary" size="xs" />
  </div>
</template>

<style lang="scss" scoped>
.molecule-onboarding {
  padding: 56px;
  border-radius: 80px 0 0 80px;
  display: flex;
  grid-gap: 24px;
  flex-direction: column;
  justify-content: flex-end;

  overflow: hidden;
  background-image: url('../../../public/Images/auth.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>