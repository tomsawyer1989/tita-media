import { 
    GET_COMMENTS_BY_POST_REQUESTED,
    GET_COMMENTS_BY_POST_SUCCESS,
    GET_COMMENTS_BY_POST_ERROR
} from "./actionTypes";
import { fetchCommentsByPost } from "../services/comments";

export const getCommentsByPost = (id) => async dispatch => {
    dispatch({
        type: GET_COMMENTS_BY_POST_REQUESTED,
    });

    try {
        const response = await fetchCommentsByPost(id);

        dispatch({
            type: GET_COMMENTS_BY_POST_SUCCESS,
            payload: response,
        });
        return response;
    }
    catch (err) {
        dispatch({
            type: GET_COMMENTS_BY_POST_ERROR,
            payload: 'Server failure',
        });
        throw err;
    }
}