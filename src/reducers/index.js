import counterReducer from "./counter";
import LoggedReducer from "./isLogged";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: LoggedReducer,
});

export default allReducers;