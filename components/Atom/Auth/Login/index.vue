<template>
  <div class="auth-login">
    <AtomTitle title="Вход" subtitle="Удобный доступ к информации о прошлых покупках и статусу текущих заказов"
      size="xs" />

    <MoleculeFormGroup class="pa-0 gap-5">
      <BaseMask maska="### ### ## ##" v-model="form.phone" label="Номер телефона" placeholder="+7 (###) ### ## ##"
        size="xs" :error="errorText" />

      <BaseButton :disabled="!form.phone" @click="submit" :loading="auth.pending">
        Вход
      </BaseButton>
    </MoleculeFormGroup>
  </div>
</template>

<script lang="ts" setup>

interface Form {
  phone: string;
}

import { computed, reactive, defineEmits } from 'vue'
import { useAuthStore } from '~/stores/auth';
import { phone } from '~/composables/useVerify'

const { error, touch } = phone();
const auth = useAuthStore();
const form = reactive<Form>({
  phone: '',
});
const emit = defineEmits<{
  (event: 'click'): void;
}>()

const errorText = computed(() => {
  return error(form.phone);
});

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
.auth-login {
  display: flex;
  flex-direction: column;
  grid-gap: 32px;
}
</style>