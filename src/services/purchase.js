import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;

export function purchase(products, priceByDay, token) {
  const headers = {
    authorization: `Bearer ${token}`,
  };

  const response = axios.post(`${BASE_URL}/purchase`, { products, priceByDay }, { headers }).catch((err) => err.response);

  return response;
}
