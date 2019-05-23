import { apiPost } from "../utils";

export function getResetAPI(data) {
   return apiPost("/users/reset-password", data)
}

