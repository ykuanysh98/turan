<template>
  <div class="orders">
    <AtomText size="lg" variant="secondary" block>Мои заказы</AtomText>
    <MoleculeOrder />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useUseOrder } from "~/stores/order";
const order = useUseOrder();

onMounted(async () => {
  await order.fetch();
  console.log(order.orderData);
});
</script>

<style>
.orders {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 24px;
}
</style>
