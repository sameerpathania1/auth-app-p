import { apiPost } from "../utils";

export function loginApi(data) {
  return apiPost("/users/login", data);
}

export function signupApi(data) {
  return apiPost("/users/signup", data);
}
export function productsApi(data) {
  console.log(data, "data in api")
  return apiPost("/products", data)
}