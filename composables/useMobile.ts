import { computed } from "vue";

export function useMobile() {
  const isMobile = computed(() => {
    let mobile = false;
    if (window.innerWidth <= 768) {
      mobile = true;
    }
    return mobile;
  });

  return {
    isMobile,
  };
}
