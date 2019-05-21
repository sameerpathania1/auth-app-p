import types from "../types"
import store from "../store";
import { signupApi } from "../apis/auth"
import { toast } from "react-toastify";

const { dispatch } = store;

const authFetch = () => {
    dispatch({
        type: types.SIGNUP_LOADING
    })
}

const signupsuccess = (data) => {
    dispatch({
        type: types.SIGNUP_SUCCESS,
        payload: data
    })
}

export function onSignupPress(data) {
    authFetch();
    return new Promise((resolve, reject) => {
        signupApi(data)
            .then(res => {
                signupsuccess(res)
                resolve(res)
            })
            .catch(error => {
                reject(error);
                toast.error(error.response.data.message || 'Something went wrong!');
            })
    })
}
