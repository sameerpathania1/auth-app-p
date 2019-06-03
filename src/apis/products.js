import { apiPost, apiGet } from "../utils";

export function getProductsAPI() {
   return apiGet("/products")
}

export function getProductAPI(id) {
   return apiGet("/products/" + id);
}

export function createProductAPI(data, file) {
   const data1 = new FormData();
   data1.append('name', data.name)
   data1.append('price', data.price)
   data1.append("asset", file)
   console.log(data1, "image and data1")
   return apiPost("/products", data1);
}

