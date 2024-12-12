<template>
  <form class="grid grid-cols-2 gap-4">
    <BaseInput v-model="form.name" label="Имя" class="col-span-1" placeholder="Как вас зовут?" />
    <BaseInput v-model="form.city" label="Город" class="col-span-1" placeholder="Откуда вы?" />
    <BaseInput maska="+7 (###) ### ## ##" v-model="form.phone" label="Номер телефона" class="col-span-2"
      placeholder="+7 (###) ### ## ##" />
    <BaseTextarea v-model="form.description" label="Чем мы можем вам помочь?" class="col-span-2" placeholder="" />

    <BaseButton class="h-[48px] col-span-2" size="lg">Получить консультацию</BaseButton>
  </form>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

const props = defineProps({
  name: {
    type: Number,
    default: ''
  },
})

const form = ref<any>({
  name: '',
  city: '',
  phone: '',
  description: '',
});


</script>


<style lang="scss" scoped>
form {
  border-radius: 16px;
  padding: 40px 32px 40px 32px;
  background: #FAFAFA;

}
</style>