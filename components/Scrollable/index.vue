<template>
  <div class="scrollable" @mousedown="onMouseDown" @mouseleave="onMouseLeave" @mouseup="onMouseUp"
    @mousemove="onMouseMove">
    <!-- Контент мұнда келеді -->
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isMouseDown = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);

const onMouseDown = (e: MouseEvent) => {
  isMouseDown.value = true;
  startX.value = e.pageX - (e.target as HTMLElement).offsetLeft;
  scrollLeft.value = (e.target as HTMLElement).scrollLeft;
  (e.target as HTMLElement).style.cursor = 'grabbing';
};

const onMouseLeave = (e: MouseEvent) => {
  isMouseDown.value = false;
  (e.target as HTMLElement).style.cursor = 'grab';
};

const onMouseUp = (e: MouseEvent) => {
  isMouseDown.value = false;
  (e.target as HTMLElement).style.cursor = 'grab';
};

const onMouseMove = (e: MouseEvent) => {
  if (!isMouseDown.value) return;
  e.preventDefault();
  const x = e.pageX - (e.target as HTMLElement).offsetLeft;
  const walk = (x - startX.value) * 10; // 3 - жылжу жылдамдығы
  (e.target as HTMLElement).scrollLeft = scrollLeft.value - walk;
};
</script>

<style scoped>
.scrollable {
  overflow: hidden;
  cursor: grab;
}

.scrollable:active {
  cursor: grabbing;
}
</style>
