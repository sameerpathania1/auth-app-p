import { apiPut } from "../utils";

export function UpdateUser(data) {
  return apiPut("/users", data);
}
