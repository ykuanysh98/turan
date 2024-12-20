<template>
  <div class="auth-login">
    <AtomTitle title="Вход" subtitle="Удобный доступ к информации о прошлых покупках и статусу текущих заказов"
      size="xs" />

    <MoleculeFormGroup class="pa-0 gap-5">
      <BaseMask maska="### ### ## ##" v-model="form.phone" label="Номер телефона" placeholder="+7 (###) ### ## ##"
        size="xs" :error="errorText" />

      <BaseButton :disabled="!form.phone" @click="submit">
        Создать аккаунт
      </BaseButton>
    </MoleculeFormGroup>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, defineEmits } from 'vue'

interface Form {
  phone: string;
}

const form = reactive<Form>({
  phone: '',
});

const emit = defineEmits<{
  (event: 'click'): void;
}>()

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

const submit = function () {
  if (!form.phone) {
    return;
  }

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