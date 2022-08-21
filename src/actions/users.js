import { 
    GET_POST_USER_REQUESTED,
    GET_POST_USER_SUCCESS,
    GET_POST_USER_ERROR
} from "./actionTypes";
import { fetchPostUser } from "../services/users";

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