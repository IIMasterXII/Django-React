import { combineReducers } from 'redux';
import leadsReducer from './leads';
import errorsReducer from './errors';
import messagesReducer from './messages';
import authReducer from './auth';

export default combineReducers({
    leadsReducer,
    errorsReducer,
    messagesReducer,
    authReducer
});