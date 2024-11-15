import { ref } from 'vue';

export function useUser() {
  const users = ref<any>([]);
  const fetchUsers = async () => {
    try {
      users.value = await $fetch('/api/user');
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return { users, fetchUsers };
}
