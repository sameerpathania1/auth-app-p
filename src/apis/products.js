import { apiPost, apiGet } from "../utils";

export function getProductsAPI() {
   return apiGet("/products")
}

export function getProductAPI(id) {
   return apiGet("/products/" + id);
}

export function createProductAPI(data) {
   return apiPost("/products", data);
}

