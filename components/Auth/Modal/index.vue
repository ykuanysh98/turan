<template>
  <v-dialog v-model="isDialogOpen" max-width="400">
    <template v-slot:activator="{ on, props }">
      <div v-bind="props" v-on="on" rounded>
        <slot />
      </div>
    </template>

    <v-card>
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="isValid" lazy-validation>
          <v-text-field label="Email" v-model="email" :rules="emailRules" required></v-text-field>
          <v-text-field label="Password" v-model="password" :rules="passwordRules" type="password"
            required></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="closeDialog">Cancel</v-btn>
        <v-btn color="primary" @click="submitForm" :disabled="!isValid">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { useAuth } from '~/composables/useAuth'
import { defineComponent, ref } from "vue";

const { login, logout, user, isAuthenticated } = useAuth()
export default defineComponent({
  name: "AuthModal",
  setup() {
    const isDialogOpen = ref(false);
    const email = ref("");
    const password = ref("");
    const isValid = ref(false);
    const form = ref();

    const emailRules = [
      (v: string) => !!v || "Email is required",
      (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ];
    const passwordRules = [
      (v: string) => !!v || "Password is required",
      (v: string) => v.length >= 6 || "Password must be at least 6 characters",
    ];

    const closeDialog = () => {
      isDialogOpen.value = false;
    };

    const submitForm = () => {
      if (form.value && form.value.validate()) {
        login('sample-token', { name: password.value, email: email.value })
        closeDialog();
      }
    };

    const handleLogout = () => {
      logout()
    }

    return {
      isDialogOpen,
      email,
      password,
      isValid,
      form,
      emailRules,
      passwordRules,
      closeDialog,
      submitForm,
      handleLogout,
      user,
      isAuthenticated,
    };
  },
});
</script>

<style scoped>
/* Қажет болса стильдерді қосыңыз */
</style>
