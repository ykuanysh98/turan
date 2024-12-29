<template>
  <div class="error">
    <MoleculeEmpty
      v-if="route.path === '/error/no-connection'"
      img="wifi"
      title="Отсутствие интернет-соединения"
      text="Проверьте подключение к интернету."
      class="justify-center"
    >
      <BaseButton @click="$router.go(-1)" block> Повторить </BaseButton>
    </MoleculeEmpty>

    <MoleculeEmpty
      v-else-if="route.path === '/error/forbidden'"
      img="warning"
      title="Сессия истекла"
      text="Войдите в аккаунт заново"
      class="justify-center"
    >
      <BaseButton @click="$router.push('/')" variant="outline" block>
        На главную
      </BaseButton>
      <BaseButton @click="$router.push('/auth/login')" block>
        Войти
      </BaseButton>
    </MoleculeEmpty>

    <MoleculeEmpty
      v-else-if="error.statusCode === 404"
      img="search"
      title="Страница не найдена"
      text="Проверьте адрес или вернитесь на главную страницу"
      class="justify-center"
    >
      <BaseButton @click="$router.push('/')" block> На главную </BaseButton>
    </MoleculeEmpty>

    <MoleculeEmpty
      v-else
      img="warning"
      title="Технические сбои"
      text="Временные проблемы на сайте. Пожалуйста попробуйте позже"
      :label="error.message"
      class="justify-center"
    >
      <BaseButton @click="refreshPage" block> Повторить </BaseButton>
    </MoleculeEmpty>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

defineProps({
  error: Object,
});

const refreshPage = function () {
  window.location.reload();
};
</script>

<style scoped>
.error {
}
</style>
