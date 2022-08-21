import { 
    GET_POSTS_REQUESTED,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
    GET_POST_BY_TAG_REQUESTED,
    GET_POST_BY_TAG_SUCCESS,
    GET_POST_BY_TAG_ERROR
} from "../actions/actionTypes";

const initialState = {
    postsLoading: false,
    posts: [],
    error: null,
    postByTagLoading: false,
    postByTag: [],
    postByTagError: null
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_REQUESTED:
            return {
                ...state,
                postsLoading: true,
                posts: [],
                error: null
            };
        
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                postsLoading: false,
                posts: action.payload,
                error: null
            };

        case GET_POSTS_ERROR:
            return {
                ...state,
                postsLoading: false,
                posts: [],
                error: action.payload
            };

        case GET_POST_BY_TAG_REQUESTED:
            return {
                ...state,
                postByTagLoading: true,
                postByTag: [],
                postByTagError: null
            };
        
        case GET_POST_BY_TAG_SUCCESS:
            return {
                ...state,
                postByTagLoading: false,
                postByTag: action.payload,
                postByTagError: null
            };

        case GET_POST_BY_TAG_ERROR:
            return {
                ...state,
                postByTagLoading: false,
                postByTag: [],
                postByTagError: action.payload
            };
        
        default:
            return state;
    }
}