import { combineReducers } from 'redux'
import { rootReducer } from './reducer';
import { userReducer } from './userReducer';

export const reducer = combineReducers({
    userReducer,
    rootReducer
})