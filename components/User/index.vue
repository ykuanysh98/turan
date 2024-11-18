<template>
  <div>
    <button @click="loadData" :disabled="apiStore.loading">Load Data</button>
    <br />
    <button @click="addData" :disabled="apiStore.loading">Add Data</button>

    <div v-if="apiStore.loading">Loading...</div>
    <div v-if="apiStore.error" class="error">{{ apiStore.error }}</div>
    <pre v-if="apiStore.data">{{ apiStore.data }}</pre>
  </div>
</template>


<script lang="ts" setup>
import { useApiStore } from '~/stores/apiStore';

const apiStore = useApiStore();

function loadData() {
  apiStore.fetchData('/endpoint', { param1: 'value1' });
}

function addData() {
  const payload = { name: 'New Item', description: 'Item description' };
  apiStore.createData('/endpoint', payload);
}
</script>
