import { 
    LOGIN_REQUESTED,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_REQUESTED,
    LOGOUT_SUCCESS,
    GET_POST_USER_REQUESTED,
    GET_POST_USER_SUCCESS,
    GET_POST_USER_ERROR
} from "./actionTypes";
import { fetchPostUser } from "../services/users";

export const loginUser = (response) => async dispatch => {
    dispatch({
        type: LOGIN_REQUESTED,
    });

    if (response) {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response,
        });
    }
    else {
        dispatch({
            type: LOGIN_ERROR,
            payload: 'login error',
        });
    }
}

export const logoutUser = () => async dispatch => {
    dispatch({
        type: LOGOUT_REQUESTED,
    });

    try {
        await window.FB.api('/me/permissions', 'delete', null, () => window.FB.logout());
        localStorage.clear();
        sessionStorage.clear();

        dispatch({
            type: LOGOUT_SUCCESS,
        });
    }
    catch (err) {
        throw err;
    }
}

export const getPostUser = (id) => async dispatch => {
    dispatch({
        type: GET_POST_USER_REQUESTED,
    });

    try {
        const response = await fetchPostUser(id);

        dispatch({
            type: GET_POST_USER_SUCCESS,
            payload: response,
        });
        return response;
    }
    catch (err) {
        dispatch({
            type: GET_POST_USER_ERROR,
            payload: 'Server failure',
        });
        throw err;
    }
}