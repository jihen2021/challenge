import {weReducer} from './weReducer'
import {combineReducers} from 'redux';
import TodoReducer from './TodoReducer';

export const rootReducer= combineReducers({weReducer,TodoReducer})



