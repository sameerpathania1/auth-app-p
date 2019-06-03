import { apiPost } from "../utils";

export function loginApi(data) {
  return apiPost("/users/login", data);
}

export function signupApi(data) {
  return apiPost("/users/signup", data);
}
export function productsApi(data) {
  return apiPost("/products", data)
}
export function forgotPasswordApi(data) {
  return apiPost("/users/forgot-password", data)
}