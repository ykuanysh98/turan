<template>
  <div class="auth-login">

    <AtomTitle title="Введите пин код"
      subtitle="Мы отправили вам СМС с кодом из 4 цифр, на номер +7 702 473 29 49 Введите его ниже:" size="xs" />

    <MoleculeFormGroup class="gap-5" size="lg">
      <BaseOTP v-model="code" label="Пин код"
        :text="remainingTime != '00' ? `Можно отправить повторно через 00:${remainingTime}` : 'Еще раз'" placeholder="0"
        :error="errorText">
        <label class="auth-login__time" v-if="remainingTime === '00'" @click="otpAgain">отправить</label>
      </BaseOTP>

      <BaseButton :disabled="code.length < 4" :loading="auth.pending" @click="submit">
        Готово
      </BaseButton>
    </MoleculeFormGroup>

  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, defineEmits } from 'vue'
import { useAuthStore } from '~/stores/auth';
import { useUserStore } from '~/stores/user';
import { useCountdown } from "~/composables/useCountdown";
const { remainingTime, startTimer } = useCountdown(59);

const auth = useAuthStore();
const user = useUserStore();
const code = ref<string>('')
const errorText = ref<string>('')
const emit = defineEmits<{
  (event: 'click'): void;
}>()

onMounted(() => {
  startTimer();
});

const otpAgain = function () {
  auth.otp({ phone: `${auth.phone}` });
  startTimer();
  errorText.value = '';
}

const submit = async function () {
  if (code.value.length < 4) {
    return;
  }

  await auth.login({ code: code.value });
  console.log(auth.loginData);

  if (auth.loginData?.success) {
    if (auth.name) {
      user.update({ first_name: auth.name })
    }

    emit('click');
  } else if (auth.loginData.message) {
    errorText.value = auth.loginData.message
  }

}
</script>

<style lang="scss">
.auth-login {
  display: flex;
  flex-direction: column;
  grid-gap: 32px;

  &__time {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>