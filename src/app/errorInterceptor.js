import axios from "axios";
import { toast } from "react-toastify";

export async function errorInterceptor() {
  axios.interceptors.response.use(null, (error) => {
    const { response } = error;

    console.log("errorInterceptor", error);

    if (!response) {
      // network error
      console.error(error);
      return false;
    }

    if (response && response.status === 401) {
      // cookies().delete("accessToken");
      toast.error("Giriş sayfasına yönlendiliyorsunuz!!!");
      return false;
    }

    if (response && response.status === 403) {
      toast.error("Bu metoda erisim yetkiniz yoktur!");
      //   toast.error("Bu metoda erisim yetkiniz yoktur!", {
      //     position: "top-right",
      //     autoClose: 3000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "colored",
      //   });
      return false;
    }

    return false;
  });
}
