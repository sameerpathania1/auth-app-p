import * as auth from "./auth"
import * as singupauth from "./signupauth"
import * as products from './products';
import * as addproducts from "./addproducts"

export default {
    ...auth,
    ...singupauth,
    ...products,
    ...addproducts
}