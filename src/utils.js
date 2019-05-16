import axios from "axios";
import { API_URL } from "./constants";

export function apiGet(endpoint) {
  const finalEndpoint = finalUrl(endpoint);
  return apiRequest(finalEndpoint, {}, "get", {});
}

export function apiPost(endpoint, data) {
  const finalEndpoint = finalUrl(endpoint);
  console.log(endpoint, getHeaders(), data, "apipost data for email")
  return apiRequest(finalEndpoint, data, "post");
}

export function apiPut(endpoint, data) {
  const finalEndpoint = finalUrl(endpoint);
  return axios["put"](finalEndpoint, data);
}

export function apiDelete(endpoint, data, header) {
  const user = getObject("user");
  const headers = { ...header, Authorization: user.token };
  const finalEndpoint = finalUrl(endpoint);
  return axios.delete(finalEndpoint);
}

export function getHeaders() {
  const user = getObject("user") || {};
  if (user && user.token) {
    return {
      Authorization: `Bearer ${user.token}`
    };

  }
  return {};
}

export function apiRequest(endpoint, data, method, header = {}) {
  const headers = { ...getHeaders(), ...header };
  if (method === "get" || method === "delete") {
    data = {
      headers
    }
  }
  return axios[method](endpoint, data, { headers }).then(res => {
    return res.data;
  },
    console.log(headers, "final im"))
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
  return JSON.parse(localStorage.getItem(key))
};

export const isLoggedIn = () => {
  let user = getObject("user");
  if (user && user.token) {
    return true;
  }
  return false;
};