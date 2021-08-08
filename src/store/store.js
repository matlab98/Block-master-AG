import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/authReducer';
import { movieReducer } from '../reducers/movieReducer';
import { uiReducer } from '../reducers/uiReducer';
import { userReducer } from '../reducers/userReducer';
import verMasTardeReducer from '../reducers/verMasTardeReducer';
const reducers = combineReducers({
    auth: authReducer,
    movies: movieReducer,
    error: uiReducer,
    users: userReducer,
    verMasTarde: verMasTardeReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)