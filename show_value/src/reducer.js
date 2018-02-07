import { createStore, combineReducers } from 'redux';
import { reducer as showReducer } from './show';
import { reducer as buttonReducer } from './button';

const reducer = combineReducers({
    show: showReducer,
    button: buttonReducer
});

export default createStore(reducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
