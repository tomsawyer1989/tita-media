import { 
    GET_POST_USER_REQUESTED,
    GET_POST_USER_SUCCESS,
    GET_POST_USER_ERROR
} from "./actionTypes";

const initialState = {
    postUserLoading: false,
    postUser: [],
    error: null
};

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_USER_REQUESTED:
            return {
                ...state,
                postUserLoading: true,
                postUser: [],
                error: null
            };
        
        case GET_POST_USER_SUCCESS:
            return {
                ...state,
                postUserLoading: false,
                postUser: action.payload,
                error: null
            };

        case GET_POST_USER_ERROR:
            return {
                ...state,
                postUserLoading: false,
                postUser: [],
                error: action.payload
            };
    
        default:
            return state;
    }
}