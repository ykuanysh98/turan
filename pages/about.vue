<template>
  <div>
    <h1>Біз туралы</h1>
    <p>Бұл бет біздің жоба туралы ақпарат береді.</p>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth', // auth middleware-ін локально қосу
  title: 'Біз туралы - Менің жобам',
  meta: [
    { name: 'description', content: 'Біз туралы бетінде жоба туралы мәліметтер бар.' },
  ],
});
</script>
