<template>
  <div class="relative">
    <div @click="toggleDropdown">
      <slot name="trigger">
        <v-btn>
          Select an option
        </v-btn>
      </slot>
    </div>
    <!-- Dropdown list -->
    <div v-if="list.length > 0"
      class="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
      <ul>
        <li v-for="(option, index) in list" :key="index" class="px-4 py-2 cursor-pointer hover:bg-gray-100"
          @click="selectOption(option)">
          {{ option ?? option.title }}
        </li>
      </ul>
    </div>
    <div v-else>
      ничего нет
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// Props for the options of the dropdown
const props = defineProps({
  options: {
    type: Array as () => string[],
    required: true,
  },
});

const isOpen = ref(true);

const list = computed(() => {
  let list = ref<any>([]);
  if (props.options.length > 0) {
    list.value = props.options;
  }
  return list.value;
});

// Toggle dropdown visibility
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Set the selected option and close the dropdown
const selectOption = (option: string) => {
  const emit = defineEmits();
  emit('update:selected', option);
  isOpen.value = false;
};
</script>

<style scoped>
/* Scoped styles can be omitted as we're using Tailwind CSS for styling */
</style>
