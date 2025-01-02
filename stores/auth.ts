import { defineStore } from "pinia";
import { useApi } from "~/composables/useApi";
import { useAuth } from "~/composables/useAuth";
const { setToken } = useAuth();

export const useAuthStore = defineStore("auth", {
  state: () => ({
    otpData: null as any,
    loginData: null as any,
    phone: null as string | null,
    name: null as string | null,

    pending: false,
    error: null as string | null,
  }),
  actions: {
    async otp(payload: Record<string, any>) {
      const { post } = useApi();
      this.pending = true;
      this.error = null;
      try {
        const response = await post("/user/verification", payload);

        this.otpData = response;
        this.phone = payload.phone;
        if (payload.name) {
          this.name = payload.name;
        }
      } catch (error: any) {
        this.error = error.message;
        console.error("Failed to create data:", error);
      } finally {
        this.pending = false;
      }
    },
    async login(payload: Record<string, any>) {
      const { post } = useApi();
      this.pending = true;
      this.error = null;

      const formData = new FormData();

      // if(this.phone) {
      //   formData.append('phone', this.phone)
      //   formData.append('code', payload.code)
      // }

      // const data = [ {
      //   phone : this.phone,
      //   code : payload.code,
      // }];

      try {
        const response = await post("/user/login", {
          phone: this.phone,
          code: payload.code,
        });

        this.loginData = response;
        setToken(this.loginData.data.token, this.loginData.data.user);
      } catch (error: any) {
        this.error = error.message;
        console.error("Failed to create data:", error);
      } finally {
        this.pending = false;
      }
    },
  },
});
