import { navigateTo, defineNuxtRouteMiddleware } from 'nuxt/app';

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log(`Кірген маршрут: ${to.path}`);
  // const token = localStorage.getItem('authToken');
  // const user = await fetchUserData();
  // const isLoggedIn = user.isLoggedIn;
  const isLoggedIn = false;

  if (to.path === '/restricted') {
    // return abortNavigation(); // Қозғалысты тоқтату үшін қолданылады. Қолданушы сол тұрған бетінде қалады.
  }

  if (!isLoggedIn && to.path !== '/') {
    return navigateTo('/');
  }
});
