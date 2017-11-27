import {combineReducers} from  'redux'
import loginDataReducer from './loginDataReducer'

const rootReducer = combineReducers({
    data:loginDataReducer
});
export default rootReducer;