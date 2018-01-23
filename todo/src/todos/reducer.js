import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes.js'

function reducer(state = [], action) {
	switch (action.type) {
	case ADD_TODO:
		return [
			...state,
			{ id: action.id, text: action.text, completed: action.completed }
		];
	case TOGGLE_TODO:
		return state.map((item) => {
			if (item.id == action.id) {
				return Object.assign({}, item, { completed: !item.completed });
			} else {
				return item
			}
		});
	case REMOVE_TODO:
		var new_state = []
		state.map((item) => {
			if (item.id != action.id) {
				new_state.push(item)
			}
		});
		return new_state;
	default:
		return state;
	}

}

export default reducer;
