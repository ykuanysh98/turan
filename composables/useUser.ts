import { ref } from 'vue';

export function useUser(url: string) {
  const data = ref(null);
  const user = ref({ name: 'Али', age: 26 });

  function updateUser(newData: { name?: string; age?: number }) {
    user.value = { ...user.value, ...newData };
  }

  const fetchData = async () => {
    const res = await fetch(url);
    data.value = await res.json();
  };


  return { user, updateUser, data, fetchData };
}
