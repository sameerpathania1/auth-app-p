import { apiGet } from "../utils";

export function getUserApi(header) {
  return apiGet("/users", header);
}
export function getProductApi(header) {
  return apiGet("/products", header)
}