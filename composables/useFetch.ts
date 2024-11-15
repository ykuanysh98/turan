import { ref } from 'vue';

export function useFetch() {
  var data = ref<any>([]);
  const fetch = async (url: string) => {
    try {
      data.value = await $fetch(url);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return { data, fetch };
}
