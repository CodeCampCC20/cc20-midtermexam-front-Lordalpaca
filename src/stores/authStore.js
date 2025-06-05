import { create } from "zustand";
import { persist } from "zustand/middleware";
import authApi from "../apis/authApi";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      accessToken: "",
      actionRegister: async (input) => {
        return await authApi.register(input);
      },
      actionLogin: async (input) => {
        const res = await authApi.login(input);
        console.log("res.data", res.data);
        set({ accessToken: res.data.accessToken });
      },
    }),
    {
      name: "accessToken",
      partialize: (state) => ({ accessToken: state.accessToken }),
    }
  )
);
export default useAuthStore;
