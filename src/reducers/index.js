import { combineReducers } from 'redux';
import infoRedcuers from './infoRedcuers';
import { reducer as formReducer } from 'redux-form'
import info from './infoRedcuers'

export default combineReducers({
    info:infoRedcuers,
    form:formReducer
})