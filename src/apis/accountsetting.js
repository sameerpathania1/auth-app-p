import { apiPut } from "../utils";

export function UpdateUser(id, data) {
  return apiPut(`/users/${id}`, data);
}
