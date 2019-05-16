import * as auth from "./auth"
import * as sign from "./signupauth"
import * as products from './products';
import * as addproducts from "./addproducts"

export default {
    ...auth,
    ...sign,
    ...products,
    ...addproducts
};