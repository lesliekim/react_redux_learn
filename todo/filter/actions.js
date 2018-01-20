import React from 'react'
import { SET_FILTER } from './actionTypes.js'

export const filterTodo = (filter) => ({
	type: SET_FILTER,
	filter: filter
});
