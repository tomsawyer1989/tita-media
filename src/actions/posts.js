import { 
    GET_POSTS_REQUESTED,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
    GET_POST_BY_TAG_REQUESTED,
    GET_POST_BY_TAG_SUCCESS
} from "./actionTypes";
import { fetchPosts } from "../services/posts";

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

export const getPostByTag = (filter) => async dispatch => {
    dispatch({
        type: GET_POST_BY_TAG_REQUESTED,
    });
    dispatch({
        type: GET_POST_BY_TAG_SUCCESS,
        payload: filter
    });
}