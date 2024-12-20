<template>
  <div class="auth-login">

    <AtomTitle title="Введите пин код"
      subtitle="Мы отправили вам СМС с кодом из 4 цифр, на номер +7 702 473 29 49 Введите его ниже:" size="xs" />

    <MoleculeFormGroup class="pa-0 gap-5">
      <BaseOTP v-model="code" label="Пин код" text="Можно отправить повторно через 0:58" placeholder="0" />

      <BaseButton :disabled="code.length < 4" @click="submit">
        Готово
      </BaseButton>
    </MoleculeFormGroup>

  </div>
</template>

<script lang="ts" setup>
import { useAuth } from '~/composables/useAuth'
import { ref, defineEmits } from 'vue'
const { login } = useAuth()

const code = ref<string>('')

const emit = defineEmits<{
  (event: 'click'): void;
}>()

const submit = function () {
  if (code.value.length < 4) {
    return;
  }

  login('sample-token', { name: 'qwer', email: 'sdsd' })

  emit('click');

}
</script>

<style lang="scss">
.auth-login {
  display: flex;
  flex-direction: column;
  grid-gap: 32px;
}
</style>