import { 
    GET_POSTS_REQUESTED,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
    GET_POST_BY_TAG_REQUESTED,
    GET_POST_BY_TAG_SUCCESS,
    GET_POST_BY_TAG_ERROR
} from "./actionTypes";
import { fetchPosts, fetchPostByTag } from "../services/posts";

export const getPosts = () => async dispatch => {
    dispatch({
        type: GET_POSTS_REQUESTED,
    });

    try {
        const response = await fetchPosts();

        dispatch({
            type: GET_POSTS_SUCCESS,
            payload: response,
        });
        return response;
    }
    catch (err) {
        dispatch({
            type: GET_POSTS_ERROR,
            payload: 'Server failure',
        });
        throw err;
    }
}

export const getPostByTag = (id) => async dispatch => {
    dispatch({
        type: GET_POST_BY_TAG_REQUESTED,
    });

    try {
        const response = await fetchPostByTag(id);

        dispatch({
            type: GET_POST_BY_TAG_SUCCESS,
            payload: response,
        });
        return response;
    }
    catch (err) {
        dispatch({
            type: GET_POST_BY_TAG_ERROR,
            payload: 'Server failure',
        });
        throw err;
    }
}