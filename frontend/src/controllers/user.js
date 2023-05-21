import axios from "axios";

import { baseURL } from "../config";

export const addUser = async (user) => {
  const { data } = await axios.post(baseURL + "/user/", user);
  localStorage.setItem("userId", data._id);
  return data;
};

export const loginUser = async (email) => {
  // const { data } = await axios.get(baseURL + "/user/find", {
  //   params: {
  //     email: email,
  //   },
  // });
  const { data } = await axios.get(baseURL + `/user/find/${email}`);
  console.log(data);
  localStorage.setItem("userId", data._id);
  return data;
};
