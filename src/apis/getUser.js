import { apiGet } from "../utils";

export function getUserApi(header) {
  return apiGet("/users", header);
}
