import axios from "axios";
import { BASE_URL } from "./configURL";
import { localStorageService } from "./localStorageService";

export const productService = {
  getProducts: () => {
    return axios({
      method: "GET",
      url: `${BASE_URL}/products`
    });
  },
};
