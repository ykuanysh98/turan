<template>
  <div>
    <h1>Корзина</h1>
    <client-only>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          {{ item.name }} - {{ item.price }}₸
          <br />
          <button @click="removeFromCart(item.id)">Жою</button>
        </li>
      </ul>
    </client-only>
    <br />
    <button @click="clearCart">Корзинаны тазалау</button>
    <br />
    <button @click="addSampleItem">Өнім қосу</button>
  </div>
</template>

<script setup lang="ts">
import { useLocalStorage } from '~/composables/useLocalStorage';

// Өнім типі
interface Product {
  id: number;
  name: string;
  price: number;
}

// Корзина деректерін LocalStorage-ден алу
const { data: cartItems, clear } = useLocalStorage<Product[]>('cart', []);

// Жаңа өнім қосу
const addSampleItem = () => {
  cartItems.value.push({ id: Date.now(), name: 'Жаңа өнім', price: 1000 });
};

// Өнімді корзинадан жою
const removeFromCart = (id: number) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== id);
};

// Корзинаны тазалау
const clearCart = () => {
  clear();
};
</script>
