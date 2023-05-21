import axios from "axios";

import { baseURL } from "../config";

export const addVehicle = async (product) => {
  const { data } = await axios.post(baseURL + "/vehicle/", product);
  return data;
};

export const getAllVehicles = async () => {
  const { data } = await axios.get(baseURL + "/vehicle/");
  return data;
};

export const deleteVehicle = async (id) => {
  const { data } = await axios.delete(baseURL + `/vehicle/${id}`);
  return data;
};

export const getVehicle = async (id) => {
  const { data } = await axios.get(baseURL + `/vehicle/${id}`);
  return data;
};

export const editVehicle = async (id, newSeller) => {
  const { data } = await axios.patch(baseURL + `/vehicle/${id}`, newSeller);
  return data;
};
