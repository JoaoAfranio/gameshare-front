import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;

export function findAllProducts() {
  const response = axios.get(`${BASE_URL}products`).catch((err) => err.response);

  return response;
}

export function findProductByID(id) {
  const response = axios.get(`${BASE_URL}product?id=${id}`).catch((err) => err.response);

  return response;
}
