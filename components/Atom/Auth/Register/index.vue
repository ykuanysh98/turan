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

interface Form {
  name: string;
  phone: string;
}

import { reactive, defineEmits, computed } from 'vue'
import { useAuthStore } from '~/stores/auth';
import { phone } from '~/composables/useVerify'

const { error, touch } = phone();
const auth = useAuthStore();

const form = reactive<Form>({
  name: '',
  phone: '',
});

const emit = defineEmits<{
  (event: 'click'): void;
}>()

const errorText = computed(() => {
  return error(form.phone);
})

const submit = async function () {
  touch();

  if (!form.phone || errorText.value) {
    return;
  }

  const phone = form.phone.split(' ').join('');
  await auth.otp({ phone: `7${phone}` });

  if (auth.data.success) {
    emit('click');
    alert(auth.data.data);
  }
}

</script>

<style lang="scss">
.auth-register {
  display: flex;
  flex-direction: column;
  grid-gap: 32px;
}
</style>