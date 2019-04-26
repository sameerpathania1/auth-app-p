import types from "../types";

const initialstate = {
    loading: false,
    user: {}
}

export default function (state = initialstate, action) {
    switch (action.type) {
        case types.AUTH_LOADING:
            return { ...state, loading: true };
    
        case types.AUTH_SUCCESS: {
            const data = action.payload.data
            return { ...state, loading: false, user: data }
        }
        default:
            break;
    }
    return { ...state };
}