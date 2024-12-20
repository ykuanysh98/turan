import { ref } from 'vue'
import Cookie from 'cookie-universal'

const cookies = Cookie() // Cookie объектісін инициализациялау

// Аутентификация күйін бақылау үшін реактивті мәндер
const isAuthenticated = ref(false)
const user = ref<Record<string, any> | null>(null)

// Логин функциясы
export const login = async (token: string, userData: Record<string, any>) => {
  cookies.set('auth-token', token, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 күнге жарамды
    secure: true,
    httpOnly: false, // Браузерде JavaScript арқылы қолжетімді
  })
  cookies.set('user-data', JSON.stringify(userData), {
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
  user.value = userData
  isAuthenticated.value = true
}

// Логаут функциясы
export const logout = () => {
  cookies.remove('auth-token', { path: '/' })
  cookies.remove('user-data', { path: '/' })
  user.value = null
  isAuthenticated.value = false
}

// Қолданушы деректерін алу
export const getUser = () => {
  if (!user.value) {
    const userData = cookies.get('user-data')
    if (userData) {
      user.value = JSON.parse(userData)
      isAuthenticated.value = true
    }
  }
  return user.value
}

// Токенді алу
export const getToken = () => cookies.get('auth-token')

// Аутентификация күйін тексеру
export const checkAuth = () => {
  const token = getToken()
  // isAuthenticated.value = !!token
  if (token) {
    // getUser()
    isAuthenticated.value = true
  }
  // return isAuthenticated.value
}

// Reactive мәндерді экспорттау
export const useAuth = () => {
  return {
    isAuthenticated,
    user,
    login,
    logout,
    getUser,
    getToken,
    checkAuth,
  }
}
