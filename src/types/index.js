import * as auth from "./auth"
import * as singupauth from "./signupauth"
import * as products from './products';

export default {
    ...auth,
    ...singupauth,
    ...products
}