<template>
  <div class="profile-edit">

    <AtomTitle title="Инфо" subtitle="Заполните данные, и мы сохраним их для следующего заказа" size="sm" />

    <MoleculeFormGroup variant="secondary" size="xs">
      <BaseInput v-model="form.name" label="Имя" class="col-span-2 md:col-span-1" placeholder="Как вас зовут?" />
      <BaseInput v-model="form.surname" label="Фамилия" class="col-span-2 md:col-span-1"
        placeholder="Как вас фамилия?" />
      <BaseMask maska="+7 (###) ### ## ##" v-model="form.phone" label="Номер телефона" class="col-span-2" />
      <BaseInput v-model="form.city" label="Город" class="col-span-2 md:col-span-1" placeholder="Откуда вы?" />
      <BaseInput v-model="form.city" label="Адрес" class="col-span-2 md:col-span-1" placeholder="Ваш адрес" />

      <template #bottom>
        <MoleculeButtonGroup class="col-span-2 justify-end">
          <BaseButton size="xs" variant="secondary">
            Отмена
          </BaseButton>
          <BaseButton size="xs">
            Сохранить
          </BaseButton>
        </MoleculeButtonGroup>
      </template>
    </MoleculeFormGroup>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const form = ref<any>({
  name: '',
  surname: '',
  city: '',
  phone: '',
  description: '',
});
</script>

<style lang="scss" scoped>
.profile-edit {
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
}
</style>