import { 
    LOGIN_REQUESTED,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
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