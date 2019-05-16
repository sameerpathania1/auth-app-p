import { apiPost, apiGet } from "../utils";

export function getProductsAPI() {
   return apiGet("/products")
}

export function getProductAPI(id) {
   return apiGet("/products/" + id);
}

export function createProductAPI(data) {
   const data1 = new FormData();
   data1.append('name', data.name)
   data1.append('price', data.price)
   return apiPost("/products", data1);
}

