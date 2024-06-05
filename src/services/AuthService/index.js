import { ApiHelper } from "@/helpers/apiHelper";

export const AuthService = {
  Auth: {
    Login: async (payload) => {
      return await ApiHelper.requestWithoutToken("post", "/login", payload);
    },
    Register: async (payload) => {
      return await ApiHelper.requestWithoutToken("post", "/register", payload);
    },
  },
};
