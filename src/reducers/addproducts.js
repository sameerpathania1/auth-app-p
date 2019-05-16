import types from "../types";

const initialstate = {
   loading: false,
   addproduct: {}
}

export default function (state = initialstate, action) {
   switch (action.type) {
      case types.ADD_PRODUCT_REQUEST:
         return {
            ...state,
            loading: true
         };

      case types.ADD_PRODUCT_SUCCESS: {
         const data = action.payload
         return {
            ...state,
            loading: false,
            addproduct: data
         }
      }
      default:
         return { ...state };
   }
}