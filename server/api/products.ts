export default defineEventHandler((event) => {
  const query = getQuery(event);
  const page = parseInt(query.page as string || '1');
  const limit = parseInt(query.limit as string || '5');

  const products = Array.from({ length: 50 }, (_, i) => ({ id: i + 1, name: `Product ${i + 1}` }));
  const start = (page - 1) * limit;
  const paginated = products.slice(start, start + limit);

  return { page, limit, total: products.length, products: paginated };
});
