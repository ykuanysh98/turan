import { defineEventHandler, getQuery } from "h3";

// Іздеу сұрауы бойынша нәтижелерді қайтару
export default defineEventHandler(async (event) => {
  // URL параметрлерін алу (яғни, іздеу сұрауы)
  const query = (getQuery(event).q as string) || "";

  // Мысал ретінде нәтижелер
  const data: { link: string; title: string; count: number }[] = [
    { link: "/", title: "Apple", count: 12 },
    { link: "/", title: "Banana", count: 12 },
    { link: "/", title: "Banana 2", count: 12 },
    { link: "/", title: "Cherry", count: 12 },
    { link: "/", title: "Date", count: 12 },
    { link: "/", title: "Elderberry", count: 12 },
    { link: "/", title: "Fig", count: 12 },
    { link: "/", title: "Grape", count: 12 },
  ];

  // Іздеу нәтижелерін сүзу
  const results = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return results;
});
