import { SET_FILTER } from './actionTypes.js'
import { FilterType } from '../constants.js'

function reducer (state = FilterType.ALL, action) {
	switch (action.type) {
		case SET_FILTER:
			return action.filter;
		default:
			return state;
	}
}

export default reducer;
