import React from 'react';
import { ADD_TODO } from './actionTypes.js';

class AddTodo extends React.Component {
	constructor() {
		super();
	}
	add() {
		text = this.refs.input.value
		action = {
			type: ADD_TODO,
			text: text,
			completed: false
		};
		dispatch(action)
	}
	render() {
		return (
			<li><input type="text" ref="input"><button onClick={ this.add }>Add</button></li>
		);
	}
}

export default AddTodo;
