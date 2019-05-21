import { apiDelete } from "../utils"

export function deleteproduct(id) {
   return apiDelete("/products/" + id)
}