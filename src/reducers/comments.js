import { 
    GET_COMMENTS_BY_POST_REQUESTED,
    GET_COMMENTS_BY_POST_SUCCESS,
    GET_COMMENTS_BY_POST_ERROR
} from "../actions/actionTypes";

const initialState = {
    commentsLoading: false,
    comments: null,
    error: null
};

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS_BY_POST_REQUESTED:
            return {
                ...state,
                commentsLoading: true,
                comments: null,
                error: null
            };
        
        case GET_COMMENTS_BY_POST_SUCCESS:
            return {
                ...state,
                commentsLoading: false,
                comments: action.payload,
                error: null
            };

        case GET_COMMENTS_BY_POST_ERROR:
            return {
                ...state,
                commentsLoading: false,
                comments: null,
                error: action.payload
            };
    
        default:
            return state;
    }
}