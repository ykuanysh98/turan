<template>
  <div>
    <h1>Көп деңгейлі маршрут:</h1>
    <p>Category: {{ category }}</p>
    <p>Subcategory: {{ subcategory }}</p>
    <p>Type: {{ type }}</p>
    <p>Group: {{ group }}</p>
    <p>Division: {{ division }}</p>
    <p>Class: {{ classLevel }}</p>
    <p>Section: {{ section }}</p>
    <p>CategoryType: {{ categoryType }}</p>
    <p>Item: {{ item }}</p>
    <p>Variant: {{ variant }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const { category, subcategory, type, group, division, classLevel, section, categoryType, item, variant } = route.params;
</script>
