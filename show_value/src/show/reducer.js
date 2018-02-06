import { CHANGE_VALUE } from "./actionTypes";

function reducer(state={}, action){
    switch(action.type) {
        case CHANGE_VALUE:
            return Object.assign({}, state, {value: action.value});
        default:
            return state;
    }
}

export default reducer;