import { apiPost, apiGet } from "../utils";

export function getResetAPI() {
   return apiGet("/users/reset-password")
}

