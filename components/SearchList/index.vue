<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ on, props }">
        <div class="search-results-activator" v-bind="props" v-on="on">
          sdf
        </div>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in results" :key="index">
          <v-list-item-content>
            <v-list-item-title>
              <NuxtLink :to="`/search/${item.name.toLowerCase()}`">{{ item.name }}</NuxtLink>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- <v-alert v-else type="info" dismissible>
      Нәтижелер табылмады.
    </v-alert> -->

  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  results: {
    type: Array,
    default: () => []
  }
})

const isMenuOpen = ref(false)

// `results` өзгергенде автоматты түрде меню ашу/жабу
watch(() => props.results, (newResults) => {

  console.log(newResults, 'watch');
  isMenuOpen.value = newResults.length > 0
})
</script>

<style scoped>
/* Стилдер */
.search-results-activator {
  cursor: pointer;
}
</style>
