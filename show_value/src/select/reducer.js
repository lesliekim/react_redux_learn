import { SELECT } from "./actionTypes";

const initState = {
    curColor: `' '`,
    preColor: `' '`
}

function reducer(state=initState, action) {
    switch(action.type) {
        case SELECT:
            return {
                curColor: action.color,
                preColor: state.curColor
            };
        default:
            return state;
    }
}

export default reducer;