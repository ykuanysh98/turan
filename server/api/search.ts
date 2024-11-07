import { defineEventHandler, getQuery } from 'h3';

// Іздеу сұрауы бойынша нәтижелерді қайтару
export default defineEventHandler(async (event) => {
  // URL параметрлерін алу (яғни, іздеу сұрауы)
  const query = (getQuery(event).q as string) || '';

  // Мысал ретінде нәтижелер
  const data: { link: string; title: string }[] = [
    { link: '/', title: 'Apple' },
    { link: '/', title: 'Banana' },
    { link: '/', title: 'Banana 2' },
    { link: '/', title: 'Cherry' },
    { link: '/', title: 'Date' },
    { link: '/', title: 'Elderberry' },
    { link: '/', title: 'Fig' },
    { link: '/', title: 'Grape' },
  ];

  // Іздеу нәтижелерін сүзу
  const results = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return results;
});
