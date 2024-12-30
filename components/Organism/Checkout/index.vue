<template>
  <div class="checkout-organism">
    <div class="flex-column gap-2">
      <AtomTitle title="Оставьте заявку" />
      <AtomText>
        Наши менеджеры с вами свяжутся. Оплата после консультации
      </AtomText>
    </div>

    <MoleculeFormGroup size="md" interactive>
      <BaseInput
        class="col-span-2 md:col-span-1"
        label="Имя"
        placeholder="Имя"
        size="lg"
      />
      <BaseInput
        class="col-span-2 md:col-span-1"
        label="Фамилия"
        placeholder="Фамилия"
        size="lg"
      />
      <BaseMask
        class="col-span-2"
        label="Номер телефона"
        maska="+7 (###) ### ## ##"
        size="lg"
      />
      <BaseInput
        class="col-span-2"
        label="Город"
        placeholder="Город"
        size="lg"
      />

      <BaseInput
        class="col-span-2"
        label="Адрес"
        placeholder="Адрес"
        size="lg"
      />

      <BaseTextarea
        class="col-span-2"
        label="Ваши пожелания или вопросы"
        text="Не обязательное поле"
      />
    </MoleculeFormGroup>

    <BaseButton size="lg" @click="$emit('click')">Оставить заявку</BaseButton>
  </div>
</template>

<style lang="scss" scoped>
.checkout-organism {
  padding: 0 58px;
  display: flex;
  flex-direction: column;
  grid-gap: 32px;
  @media (max-width: 768px) {
    padding: 0;
  }
}
</style>
