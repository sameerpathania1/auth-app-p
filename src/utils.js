import axios from "axios";
import { API_URL } from "./constants";

export function apiGet(endpoint, header) {
  const finalEndpoint = finalUrl(endpoint);
  console.log(header, "the header");
  return axios.get(finalEndpoint, { headers: header });
}

export function apiPost(endpoint, data) {
  console.log(data, "the data value");
  const finalEndpoint = finalUrl(endpoint);
  console.log(finalEndpoint, "the final endpoint");
  return axios.post(finalEndpoint, data);
}

export function apiPut(endpoint, data) {
  const finalEndpoint = finalUrl(endpoint);
  return axios.put(finalEndpoint, data);
}

export function apiDelete(endpoint, data, header) {
  const user = getObject("user");
  const headers = { ...header, Authorization: user.token };
  const finalEndpoint = finalUrl(endpoint);
  return axios.delete(finalEndpoint);
}

const finalUrl = slug => {
  return API_URL + slug;
};

export const saveObject = (key, data) => {
  let obj = JSON.stringify(data);
  localStorage.setItem(key, obj);
};

export const removeObject = key => {
  localStorage.removeItem(key);
};

export const getObject = key => {
  return JSON.parse(localStorage.getItem(key));
};

export const isLoggedIn = () => {
  let user = getObject("user");
  console.log(user && user.token, "isLoggedin");
  if (user && user.token) {
    return true;
  }
  return false;
};
