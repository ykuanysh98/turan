import { navigateTo, defineNuxtRouteMiddleware } from 'nuxt/app';

import Cookie from 'cookie-universal'

const cookies = Cookie() // Cookie объектісін инициализациялау

export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = cookies.get('turan-token');
  // const token = localStorage.getItem('auth-token');
  // const user = await fetchUserData();
  // const isLoggedIn = user.isLoggedIn;
  let isLoggedIn = false;

  if(token){
    isLoggedIn = true;
  } 

  if (to.path === '/restricted') {
    // return abortNavigation(); // Қозғалысты тоқтату үшін қолданылады. Қолданушы сол тұрған бетінде қалады.
  }

  if (!isLoggedIn && to.path !== '/') {
    return navigateTo('/');
  }
});
