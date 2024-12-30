<template>
  <div class="auth-register">
    <AtomTitle
      title="Регистрация"
      subtitle="Зарегистрированные пользователи первыми узнают о распродажах, акциях и специальных предложениях"
      size="xs"
    />

    <MoleculeFormGroup size="lg">
      <BaseInput
        v-model="form.name"
        label="Имя"
        placeholder="Введите ваше имя"
      />
      <BaseMask
        maska="### ### ## ##"
        v-model="form.phone"
        label="Номер телефона"
        placeholder="+7 (###) ### ## ##"
        :error="errorText"
      />

      <template #bottom>
        <BaseButton
          :disabled="!form.name || !form.phone"
          :loading="auth.pending"
          @click="submit"
          block
        >
          Создать аккаунт
        </BaseButton>
      </template>
    </MoleculeFormGroup>

    <div class="auth-register__control">
      <p class="auth-register__text">У вас уже есть аккаунт?</p>
      <p class="auth-register__link" @click="$router.push('/auth/login')">
        Войти в аккаунт
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Form {
  name: string;
  phone: string;
}

import { reactive, defineEmits, computed } from "vue";
import { useAuthStore } from "~/stores/auth";
import { phone } from "~/composables/useVerify";
import { useRouter } from "vue-router";
const router = useRouter();

const { error, touch } = phone();
const auth = useAuthStore();

const form = reactive<Form>({
  name: "",
  phone: "",
});

const errorText = computed(() => {
  return error(form.phone);
});

const submit = async function () {
  touch();

  if (!form.phone || errorText.value) {
    return;
  }

  const phone = form.phone.split(" ").join("");
  await auth.otp({ phone: `7${phone}`, name: form.name });

  if (auth.otpData.success) {
    router.push("/auth/otp");
    alert(auth.otpData.data);
  }
};
</script>

<style lang="scss">
.auth-register {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 32px;

  &__control {
    display: flex;
    align-items: center;
    grid-gap: 4px;
  }

  &__text {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #535862;
  }

  &__link {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: #6941c6;
  }
}
</style>
