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
        v-model="form.name"
        placeholder="Имя"
        size="lg"
      />
      <BaseInput
        class="col-span-2 md:col-span-1"
        label="Фамилия"
        v-model="form.surname"
        placeholder="Фамилия"
        size="lg"
      />
      <BaseMask
        class="col-span-2"
        label="Номер телефона"
        v-model="form.phone"
        maska="+7 (###) ### ## ##"
        size="lg"
      />
      <BaseInput
        class="col-span-2"
        label="Город"
        v-model="form.city"
        placeholder="Город"
        size="lg"
      />

      <BaseInput
        class="col-span-2"
        label="Адрес"
        v-model="form.address"
        placeholder="Адрес"
        size="lg"
      />

      <BaseTextarea
        class="col-span-2"
        label="Ваши пожелания или вопросы"
        v-model="form.description"
        text="Не обязательное поле"
      />
    </MoleculeFormGroup>

    <BaseButton size="lg" @click="$emit('click')">Оставить заявку</BaseButton>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useUseOrder } from "~/stores/order";
const order = useUseOrder();

const form = ref<any>({
  name: "",
  surname: "",
  phone: "",
  city: "",
  address: "",
  description: "",
});

onMounted(() => {
  order.add(form);
});
</script>
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
