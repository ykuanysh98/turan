import { ref } from "vue";
import Cookie from "cookie-universal";

const cookies = Cookie(); // Cookie объектісін инициализациялау

// Аутентификация күйін бақылау үшін реактивті мәндер
const isAuth = ref(false);
const user = ref<Record<string, any> | null>(null);

// Логин функциясы
export const setToken = async (
  token: string,
  userData: Record<string, any>
) => {
  cookies.set("turan-token", token, {
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 күнге жарамды
    secure: true,
    httpOnly: false, // Браузерде JavaScript арқылы қолжетімді
  });
  cookies.set("user-data", JSON.stringify(userData), {
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  user.value = userData;
  isAuth.value = true;
};

// Логаут функциясы
export const logout = () => {
  cookies.remove("turan-token", { path: "/" });
  cookies.remove("user-data", { path: "/" });
  user.value = null;
  isAuth.value = false;
};

// Қолданушы деректерін алу
export const getUser = () => {
  if (!user.value) {
    const userData = cookies.get("user-data");
    if (userData) {
      user.value = JSON.parse(userData);
      isAuth.value = true;
    }
  }
  return user.value;
};

// Токенді алу
export const getToken = () => cookies.get("turan-token");

// Аутентификация күйін тексеру
export const getAuth = () => {
  const token = getToken();
  // // isAuth.value = !!token
  if (token) {
    // getUser()
    isAuth.value = true;
  }
  return isAuth.value;
};

// Reactive мәндерді экспорттау
export const useAuth = () => {
  return {
    isAuth,
    user,
    setToken,
    logout,
    getUser,
    getToken,
    getAuth,
  };
};
