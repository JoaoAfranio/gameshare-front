import axios from "axios";

const BASE_URL = "http://localhost:5000";

export function findAllProducts() {
  const response = axios.get(`${BASE_URL}/products`).catch((err) => err.response);

  return response;
}

export function findProductByID(id) {
  const response = axios.get(`${BASE_URL}/product?id=${id}`).catch((err) => err.response);

  return response;
}
