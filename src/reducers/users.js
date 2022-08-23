import {
    LOGIN_REQUESTED,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    GET_POST_USER_REQUESTED,
    GET_POST_USER_SUCCESS,
    GET_POST_USER_ERROR
} from "../actions/actionTypes";

const initialState = {
    loginLoading: false,
    login: false,
    user: null,
    error: null,
    postUserLoading: false,
    postUser: null,
    postUserError: null
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUESTED:
            return {
                ...state,
                loginLoading: true,
                login: false,
                user: null,
                error: null
            };
        
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginLoading: false,
                login: true,
                user: action.payload,
                error: null
            };
        
        case LOGIN_ERROR:
            return {
                ...state,
                loginLoading: false,
                login: false,
                user: null,
                error: action.payload
            };
        
        case GET_POST_USER_REQUESTED:
            return {
                ...state,
                postUserLoading: true,
                postUser: null,
                postUserError: null
            };
        
        case GET_POST_USER_SUCCESS:
            return {
                ...state,
                postUserLoading: false,
                postUser: action.payload,
                postUserError: null
            };

        case GET_POST_USER_ERROR:
            return {
                ...state,
                postUserLoading: false,
                postUser: null,
                postUserError: action.payload
            };
    
        default:
            return state;
    }
}