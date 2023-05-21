import axios from "axios";

import { baseURL } from "../config";

export const addSeller = async (product) => {
  const { data } = await axios.post(baseURL + "/seller/", product);
  return data;
};

export const getAllSellers = async () => {
  const { data } = await axios.get(baseURL + "/seller/");
  return data;
};

export const deleteSeller = async (id) => {
  const { data } = await axios.delete(baseURL + `/seller/${id}`);
  return data;
};

export const getSeller = async (id) => {
  const { data } = await axios.get(baseURL + `/seller/${id}`);
  return data;
};

export const editSeller = async (id, newSeller) => {
  const { data } = await axios.patch(baseURL + `/seller/${id}`, newSeller);
  return data;
};
