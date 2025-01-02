<template>
  <div class="auth-login">
    <AtomTitle
      title="Вход"
      subtitle="Удобный доступ к информации о прошлых покупках и статусу текущих заказов"
      size="xs"
    />

    <MoleculeFormGroup size="lg">
      <BaseMask
        maska="### ### ## ##"
        v-model="form.phone"
        label="Номер телефона"
        placeholder="+7 (###) ### ## ##"
        size="xs"
        :error="errorText"
      />
      <template #bottom>
        <BaseButton
          :disabled="!form.phone"
          @click="submit"
          :loading="auth.pending"
          block
        >
          Вход
        </BaseButton>
      </template>
    </MoleculeFormGroup>

    <div class="auth-login__control">
      <p class="auth-login__text">У вас еще нет аккаунта?</p>
      <p class="auth-login__link" @click="$router.push('/auth/register')">
        Создать аккаунт
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Form {
  phone: string;
}

import { computed, reactive } from "vue";
import { phone } from "~/composables/useVerify";
import { useAuthStore } from "~/stores/auth";
import { useRouter } from "vue-router";

const form = reactive<Form>({
  phone: "",
});
const { error, touch } = phone();
const auth = useAuthStore();
const router = useRouter();

const errorText = computed(() => {
  return error(form.phone);
});

const submit = async function () {
  touch();

  if (!form.phone || errorText.value) {
    return;
  }

  const phone = form.phone.split(" ").join("");
  await auth.otp({ phone: `7${phone}` });

  if (auth.otpData.success) {
    router.push("/auth/otp");
    alert(auth.otpData.data);
  }
};
</script>

<style lang="scss">
.auth-login {
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
