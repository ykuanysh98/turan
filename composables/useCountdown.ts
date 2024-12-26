import { ref, computed, onMounted, onUnmounted } from "vue";

export function useCountdown(initialTime: number) {
  const currentTime = ref(initialTime);
  let timer: NodeJS.Timer | null = null;

  const remainingTime = computed(() => currentTime.value < 10 ? `0${currentTime.value}` : currentTime.value);

  const startTimer = () => {
    if (timer) return; // Таймер екі рет басталмау үшін
    currentTime.value = 59;
    timer = setInterval(() => {
      if (currentTime.value > 0) {
        currentTime.value -= 1;
      } else {
        clearInterval(timer!);
        timer = null;
      }
    }, 1000);
  };

  const stopTimer = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };

  onUnmounted(() => {
    stopTimer();
  });

  return {
    remainingTime,
    startTimer,
    stopTimer,
  };
}
