import { 
    GET_POST_USER_REQUESTED,
    GET_POST_USER_SUCCESS,
    GET_POST_USER_ERROR
} from "../actions/actionTypes";

const initialState = {
    postUserLoading: false,
    postUser: null,
    error: null
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_USER_REQUESTED:
            return {
                ...state,
                postUserLoading: true,
                postUser: null,
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
                postUser: null,
                error: action.payload
            };
    
        default:
            return state;
    }
}