<template>
  <MoleculeButtonGroup>
    <AtomDropdown>
      <template #trigger>
        <BaseButton variant="secondary" size="xs">
          Категория - {{ catalogId }}

        </BaseButton>
      </template>

      <MoleculeList v-model="catalogId" :items="itemsCatalog" :checkbox="true" />
    </AtomDropdown>


    <AtomDropdown>
      <template #trigger>
        <BaseButton variant="secondary" size="xs">
          Цена
        </BaseButton>
      </template>
      <MoleculeRange />
    </AtomDropdown>


    <AtomDropdown>
      <template #trigger>
        <BaseButton variant="secondary" size="xs">
          Сортировать--{{ sortId }}
          <v-icon icon="mdi-sort" end> </v-icon>
        </BaseButton>
      </template>

      <MoleculeList v-model="sortId" :items="itemsCatalog" :radio="true" />
    </AtomDropdown>
  </MoleculeButtonGroup>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const catalogId = ref(null);
const sortId = ref(null);

const itemsCatalog = [
  {
    id: 1,
    name: 'qwer1'
  },
  {
    id: 2,
    name: 'qwer2'
  },
  {
    id: 3,
    name: 'qwer3'
  },
  {
    id: 4,
    name: 'qwer4'
  },
]
</script>