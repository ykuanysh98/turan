<template>
  <div>
    <Banner :items="itemsSearch" />

    <v-container>
      <ButtonGroup />
      <ProductList />

      <h1>Деректер</h1>
      <button @click="fetchData">Деректерді алу</button>
      <pre>{{ data }}</pre>
      <h1>{{ greeting }}</h1>
    </v-container>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useUser } from '../composables/useUser';
interface Item {
  id: string;
  img: string;
}
type Items = Item[];

export default defineComponent({
  setup() {
    const itemsSearch: Items = [
      {
        id: '1',
        img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
      },
      {
        id: '2',
        img: 'https://cdn.vuetifyjs.com/images/cards/hotel.jpg'
      },
      {
        id: '3',
        img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
      },
    ] as Items;

    const { data, fetchData } = useUser('https://jsonplaceholder.typicode.com/todos/1');

    const greeting = ref('');

    async function fetchGreeting() {
      const response = await $fetch('/api/greet', { params: { name: 'Али' } });
      // greeting.value = response.message;
    }

    return {
      itemsSearch,
      fetchData,
      greeting,
      data,
      fetchGreeting,
    }
  }
});

const definePageMeta = (meta: { layout: string }) => meta

definePageMeta({
  layout: 'default', // 'default' макетін қолдану
})



</script>
