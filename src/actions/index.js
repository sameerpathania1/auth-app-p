import * as auth from "./auth"
import * as sign from "./signupauth"
import * as products from './products';

export default {
    ...auth,
    ...sign,
    ...products
};