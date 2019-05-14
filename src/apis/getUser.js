import { apiGet } from "../utils";

export function getUserApi() {
  return apiGet("/users");
}