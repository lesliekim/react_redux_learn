import React from 'react';
import { filterTodo } from '../actioins.js';
import { ALL, TODO, COMPLETED } from '../constants.js';

class Filter extends React.component {
	constructor(props){
		super(props);
	}
	filterAll() {
		dispatch(filterTodo(ALL));
	}
	filterTodo() {
		dispatch(filterTodo(TODO));
	}
	filterCompleted() {
		dispatch(filterTodo(COMPLTED));
	}
	render() {
		return (
		<div>
			<button onclick="filterAll()">All</button>
			<button onclick="filterTodo()">Todo</button>
			<button onclick="filterCompleted()">Completed</button>
		</div>
		);
	}
}

export default Filter;
