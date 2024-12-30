<template>
  <div class="profile-edit">
    <AtomTitle
      title="Инфо"
      subtitle="Заполните данные, и мы сохраним их для следующего заказа"
      size="sm"
    />
    <AtomText size="lg">Инфо</AtomText>
    <AtomText size="xs"
      >Заполните данные, и мы сохраним их для следующего заказа</AtomText
    >

    <MoleculeFormGroup variant="secondary" size="xs" bottom-line>
      <BaseInput
        v-model="form.name"
        label="Имя"
        class="col-span-2 md:col-span-1"
        placeholder="Как вас зовут?"
      />
      <BaseInput
        v-model="form.surname"
        label="Фамилия"
        class="col-span-2 md:col-span-1"
        placeholder="Как вас фамилия?"
      />
      <BaseMask
        maska="+7 (###) ### ## ##"
        v-model="form.phone"
        label="Номер телефона"
        class="col-span-2"
      />
      <BaseSelect
        v-model="form.city"
        :items="cities"
        label="Город"
        class="col-span-2 md:col-span-1"
        placeholder="Откуда вы?"
      />
      <BaseInput
        v-model="form.address"
        label="Адрес"
        class="col-span-2 md:col-span-1"
        placeholder="Ваш адрес"
      />

      <template #bottom>
        <div class="flex gap-4 col-span-2 justify-end">
          <BaseButton
            size="xs"
            variant="secondary"
            @click="$router.go(-1)"
            :block="isMobile"
          >
            Отмена
          </BaseButton>
          <BaseButton
            size="xs"
            :loading="user.pending"
            @click="update"
            :block="isMobile"
          >
            Сохранить
          </BaseButton>
        </div>
      </template>
    </MoleculeFormGroup>
  </div>
</template>

<script setup lang="ts">
import { useMobile } from "~/composables/useMobile";
const { isMobile } = useMobile();

interface User {
  name: string;
  surname: string;
  city: string;
  phone: string;
  address: string;
}

import { reactive, computed, onMounted } from "vue";
import { useUserStore } from "~/stores/user";
import { useCityStore } from "~/stores/city";
const user = useUserStore();
const city = useCityStore();

const form = reactive<User>({
  name: "",
  surname: "",
  city: "",
  phone: "",
  address: "",
});

const cities = computed(() => {
  let list: any = [];
  if (city.cityList) {
    list = city.cityList.data.map((e: any) => ({
      id: e.id,
      title: e.name,
    }));
  }
  return list;
});

onMounted(async () => {
  await user.show();
  await city.fetch();

  form.name = user.userData.data.FirstName;
  form.surname = user.userData.data.LastName;
  form.city = user.userData.data.CityId.Int64;
  form.phone = user.userData.data.Phone;
  form.address = user.userData.data.Address.String;
});

const update = function () {
  user.update({
    first_name: form.name,
    last_name: form.surname,
    city_id: form.city,
    address: form.address,
    phone: formatPhoneNumber(form.phone),
  });
};

const formatPhoneNumber = function (tel: string) {
  return tel.replace(/[^\d]/g, "");
};
</script>

<style lang="scss" scoped>
.profile-edit {
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
}
</style>
