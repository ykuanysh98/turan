import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  routes: (_routes) => [
    // Барлық автоматты маршруттарды сақтап қалу
    ..._routes,

    // Кастомды маршрутты қосу
    {
      path: '/category/:subcategory?/:type?/:group?/:division?/:class?/:section?/:categoryType?/:item?/:variant?',
      component: () => import('~/pages/category/index.vue'),
      name: 'custom-multi-level-route'
    },
  ],
};

