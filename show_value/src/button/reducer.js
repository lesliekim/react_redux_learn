import { CLICKED } from "./actionTypes";

const initState = [{
    id: 1,
    name: "button1",
    active: false
}, {
    id: 2,
    name: "button2",
    active: false
}]
function reducer(state=initState, action) {
    switch(action.type) {
        case CLICKED:
            return state.map((item) => {
                if (item.id === action.id) {
                    item.active = true;
                } else {
                    item.active = false;
                }
                return item;
            })
        default:
            return state;
    }
}

export default reducer;