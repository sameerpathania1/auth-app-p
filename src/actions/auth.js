import types from "../types"
import store from "../store"
import { loginApi } from "../apis/auth";
import { toast } from 'react-toastify';

const { dispatch } = store;

const authFetch = () => {
    dispatch({
        type: types.AUTH_LOADING
    })
}



export function onLoginPress(data) {
    authFetch();
    return new Promise((resolve, reject) => {
        loginApi(data)
            .then(res => {
                dispatch({
                    type: types.AUTH_SUCCESS,
                    payload: res
                })
                resolve(res);
            })
            .catch(err => {
                toast.error(err.response.data.message || 'Something went wrong!');
                reject(err);
            })
    })
}