<template>
  <div class="bg-gray-100">
    <v-container>
      <v-toolbar>
        <v-row class="flex-center gap-3">
          <img class="max-w-md" src="https://placehold.co/110x50/png" alt="logo" />
          <v-toolbar-title>Title</v-toolbar-title>
          <v-row class="flex-center gap-3 mobile-not">
            <NuxtLink to="/" class="nav-link">Басты бет</NuxtLink>
            <NuxtLink to="/blog" class="nav-link">
              Товарлар

              <v-menu open-on-hover activator="parent" :open-on-focus="false">
                <v-list>
                  <v-list-item v-for="i in 2" :key="i" link>
                    <v-list-item-title>Item {{ i }}</v-list-item-title>
                    <template v-slot:append>
                      <v-icon icon="mdi-menu-right" size="x-small"></v-icon>
                    </template>

                    <v-menu :open-on-focus="false" activator="parent" open-on-hover submenu>
                      <v-list>
                        <v-list-item v-for="j in 3" :key="j" link>
                          <v-list-item-title>Item {{ i }} - {{ j }}</v-list-item-title>
                          <template v-slot:append>
                            <v-icon icon="mdi-menu-right" size="x-small"></v-icon>
                          </template>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-list-item>
                </v-list>
              </v-menu>
            </NuxtLink>
            <NuxtLink to="/about" class="nav-link">Біз туралы</NuxtLink>
          </v-row>
        </v-row>
        <v-spacer></v-spacer>
        <Search v-model="query" placeholder="Іздеңіз..." class="mobile-not" />
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Sugn Up</v-btn>
          <v-btn flat>Sign In</v-btn>
        </v-toolbar-items>
        <BurgerMenu class="mobile-only" />
        <Avatar class="mobile-not" />
      </v-toolbar>

    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const query = ref('')
</script>

<style>
.v-toolbar {
  background-color: transparent;
}

.v-toolbar__content {
  overflow: inherit;
}
</style>