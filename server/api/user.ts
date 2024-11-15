// server/api/useUser.ts
export default defineEventHandler(async (event) => {
  // Егер сұраныс POST болса, жаңа деректерді қабылдаймыз
  if (event.node.req.method === 'POST') {
    const body = await readBody(event); // Клиент жіберген деректер
    // Сақтау логикасын қосыңыз немесе тестілік жауап қайтарыңыз
    return { message: 'User added', data: body };
  }

  // Егер сұраныс GET болса, дайын деректерді қайтару
  const data = [
    { id: 1, name: 'Ali', age: 25, initials: 'AL', email: 'ali.doe@doe.com' },
    { id: 2, name: 'Amina', age: 22, initials: 'AI', email: 'amina.doe@doe.com', },
  ];
  return { message: 'Users fetched', data };
});
