import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// import { commentsReducer } from '../reducers/comments';
import { postsReducer } from '../reducers/posts';
import { usersReducer } from '../reducers/users';

const rootReducer = combineReducers({
    // comments: commentsReducer,
    posts: postsReducer,
    users: usersReducer
});

const middlewares = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;