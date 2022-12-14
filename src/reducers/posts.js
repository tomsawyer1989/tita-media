import { 
    GET_POSTS_REQUESTED,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
    GET_POST_BY_TAG_REQUESTED,
    GET_POST_BY_TAG_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    postsLoading: false,
    posts: null,
    error: null,
    postByTagLoading: false,
    postByTag: null
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_REQUESTED:
            return {
                ...state,
                postsLoading: true,
                posts: null,
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
                posts: null,
                error: action.payload
            };

        case GET_POST_BY_TAG_REQUESTED:
            return {
                ...state,
                postByTagLoading: true,
                postByTag: null
            };
        
        case GET_POST_BY_TAG_SUCCESS:
            const filter = state.posts.data.filter(post => post.tags.some(tag => tag.toLowerCase().includes(action.payload.toLowerCase())));
            return {
                ...state,
                postByTagLoading: false,
                postByTag: action.payload !== '' ? filter : null
            };
        
        default:
            return state;
    }
}