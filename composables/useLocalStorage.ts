import { ref, watch } from 'vue';
import type { Ref } from 'vue';

/**
 * LocalStorage-мен жұмыс істеуге арналған composable.
 * @param key - LocalStorage-дегі сақталатын деректің кілті.
 * @param initialValue - Бастапқы мән.
 * @returns `data`, `save`, және `clear` функциялары.
 */
export function useLocalStorage<T>(key: string, initialValue: T): {
  data: Ref<T>;
  save: () => void;
  clear: () => void;
} {
  const isClient = typeof window !== 'undefined'; // Клиенттік ортаны тексеру
  const storedValue = isClient ? localStorage.getItem(key) : null;
  const data = ref<T>(storedValue ? JSON.parse(storedValue) : initialValue);

  const save = () => {
    if (isClient) {
      localStorage.setItem(key, JSON.stringify(data.value));
    }
  };

  const clear = () => {
    data.value = [];
    if (isClient) {
      localStorage.removeItem(key);
    }
  };

  if (isClient) {
    watch(data,
      () => {
        save();
      },
      { deep: true });
  }

  return { data, save, clear };
}
