<template>
  <div class="auth-register">
    <AtomTitle title="Регистрация"
      subtitle="Зарегистрированные пользователи первыми узнают о распродажах, акциях и специальных предложениях"
      size="xs" />

    <MoleculeFormGroup class="pa-0 gap-5">
      <BaseInput v-model="form.name" label="Имя" placeholder="Введите ваше имя" size="xs" />
      <BaseMask maska="### ### ## ##" v-model="form.phone" label="Номер телефона" placeholder="+7 (###) ### ## ##"
        size="xs" :error="errorText" />

      <BaseButton :disabled="!form.name || !form.phone" @click="submit">
        Создать аккаунт
      </BaseButton>
    </MoleculeFormGroup>
  </div>
</template>

<script lang="ts" setup>
import { reactive, defineEmits, computed } from 'vue'

interface Form {
  name: string;
  phone: string;
}

const form = reactive<Form>({
  name: '',
  phone: '',
});

const emit = defineEmits<{
  (event: 'click'): void;
}>()

const submit = function () {
  if (!form.name || !form.phone) {
    return;
  }

  emit('click');
}

const errorText = computed(() => {
  let text = '';
  if (form.phone) {
    let start = form.phone.slice(0, 1);
    if (start !== '7') {
      text = 'Номер телефона введен некорректно. Убедитесь, что номер телефона введен в формате: +7 (XXX) XXX-XX-XX.'
    }
  } else {
    text = 'Это поле должно быть заполнено'
  }
  return text;
})

</script>

<style lang="scss">
.auth-register {
  display: flex;
  flex-direction: column;
  grid-gap: 32px;
}
</style>