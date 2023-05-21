import axios from "axios";

import { baseURL } from "../config";

export const addProduct = async (product) => {
  const { data } = await axios.post(baseURL + "/product/", product);
  return data;
};

export const getAllProducts = async () => {
  const { data } = await axios.get(baseURL + "/product/");
  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await axios.delete(baseURL + `/product/${id}`);
  return data;
};

export const getProduct = async (id) => {
  const { data } = await axios.get(baseURL + `/product/${id}`);
  return data;
};

export const editProduct = async (id, newProduct) => {
  const { data } = await axios.patch(baseURL + `/product/${id}`, newProduct);
  return data;
};
