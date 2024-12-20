import { navigateTo, defineNuxtRouteMiddleware } from 'nuxt/app';

import Cookie from 'cookie-universal'

const cookies = Cookie() // Cookie объектісін инициализациялау

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log(`Кірген маршрут: ${to.path}`);
  const token = cookies.get('auth-token');
  // const token = localStorage.getItem('auth-token');
  // const user = await fetchUserData();
  // const isLoggedIn = user.isLoggedIn;
  let isLoggedIn = false;
  console.log('token', token);

  if(token){
    isLoggedIn = true;
    console.log('isLoggedIn', isLoggedIn);
  } 

  if (to.path === '/restricted') {
    // return abortNavigation(); // Қозғалысты тоқтату үшін қолданылады. Қолданушы сол тұрған бетінде қалады.
  }

  if (!isLoggedIn && to.path !== '/') {
    return navigateTo('/');
  }
});
