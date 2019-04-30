import types from "../types"
import store from "../store"
import { loginApi } from "../apis/auth";

const { dispatch } = store;

const authFetch = () => {
    dispatch({
        type: types.AUTH_LOADING,
        payload: { isFetching: true }
    })
}

const loginsuccess = (data) => {
    dispatch({
        type: types.AUTH_SUCCESS,
        payload: data
    });
};



export function onLoginPress(data) {
    authFetch();
    return new Promise((resolve, reject) => {
        loginApi(data)
            .then(res => {
                loginsuccess(res);
                resolve(res);
            })
            .catch(error => {
                reject(error);
            })
    })
}