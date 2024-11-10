<template>
  <div class="dropdown relative">
    <div class="dropdown-trigger flex-between gap-2" @click="open">
      <slot></slot>
    </div>

    <v-sheet v-if="isOpen" class="dropdown-list" elevation="12" rounded="md" width="100%" max-width="600">
      <v-list>
        <div v-if="pending" class="flex-center">
          <v-progress-circular class="mt-3" indeterminate></v-progress-circular>
        </div>
        <template v-else-if="list?.length">
          <v-list-item v-for="(item, index) in list" :key="index" @click="selectOption(item)">
            <NuxtLink :to="item.link">
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </NuxtLink>
          </v-list-item>
        </template>
        <v-list-item v-else-if="emptyText">
          <v-list-item-title>{{ emptyText }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-sheet>

    <div v-if="isOpen" class="close-overlays" @click="close"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, defineEmits } from 'vue';

// Props for the items of the dropdown
const props = defineProps({
  items: {
    type: Array as () => string[],
    required: true,
  },
  emptyText: {
    type: String as () => '',
  },
  pending: {
    type: Boolean as () => false,
  },
  autoOpen: {
    type: Boolean as () => false,
  },
});

const isOpen = ref(false);
watch(
  () => props.pending,
  () => {
    if (props.autoOpen) {
      isOpen.value = true;
    }
  }
);

const list = computed(() => {
  let list = ref<any>([]);
  if (props.items?.length > 0) {
    list.value = props.items;
    if (props.autoOpen) {
      isOpen.value = true;
    }
  }
  return list.value;
});

const open = () => {
  isOpen.value = true;
};

const close = () => {
  isOpen.value = false;
};


// Set the selected option and close the dropdown
interface EmitEvents {
  (e: 'update:selected', payload: string): void;
}
const emit = defineEmits<EmitEvents>();
const selectOption = (option: any) => {
  emit('update:selected', option);
  isOpen.value = false;
};
</script>

<style scoped>
.dropdown {
  min-height: 26px;
}

.dropdown-trigger {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.dropdown-list {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 100%;
  z-index: 2;
}

.close-overlays {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.281); */
  z-index: 1;
}
</style>
