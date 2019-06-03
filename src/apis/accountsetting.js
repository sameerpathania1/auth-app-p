import { apiPatch } from "../utils";

export function UpdateUser(id, data) {
  return apiPatch(`/users/${id}`, data);
}
