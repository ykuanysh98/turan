import { defineEventHandler, getQuery, H3Event } from 'h3';

export default defineEventHandler((event: H3Event) => {
  const query = getQuery(event); // getQuery функциясы автоматты түрде типтеледі
  const name = (query.name as string) || 'Қонақ';
  
  return { message: `Сәлем, ${name}!` };
});
