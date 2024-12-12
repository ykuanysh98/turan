<template>
  <v-sheet class="slider mx-auto bg-transparent" max-width="600">
    <v-slide-group show-arrows>
      <v-slide-group-item v-for="item in items" :key="item">
        <MoleculeProduct class="ma-2" title="Өнім атауы">
          <AtomTitle title="Өнім атауы" size="xs" />
        </MoleculeProduct>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
.slider {
  @media (max-width: 768px) {
    width: 100%;
  }

}
</style>