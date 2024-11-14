<template>
  <Scrollable class="flex gap-2">
    <div v-for="n in 8" :key="n">
      <v-btn :color="isSelected === n ? 'primary' : undefined" class="ma-2" rounded @click="toggle(n)">
        Options {{ n }}
      </v-btn>
    </div>
  </Scrollable>
</template>


<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const isSelected = ref<string>(1);
    const toggle = (option: any) => {
      isSelected.value = option;
    };
    return {
      isSelected,
      toggle,
    }
  }
});
</script>

<style>
.group {
  overflow: auto;
}
</style>