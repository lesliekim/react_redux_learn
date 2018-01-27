import React from 'react';
import * as actions from '../actions';
import TodoList from './component';
import { connect } from 'react-redux';
import { FilterType } from '../../constants.js';

class TodoContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <TodoList  todos={this.props.todos} add={this.props.add} toggle={this.props.toggle} remove={this.props.remove}/>;
	}
}

function selectVisibleTodos(todos, filter) {
	switch(filter) {
		case FilterType.All:
			return todos;
		case FilterType.TODO:
			return todos.filter((todo) => (todo.completed !== true));
		case FilterType.COMPLETED:
			return todos.filter((todo) => (todo.completed === true));
		default:
			return todos;
	}
}

function mapStateToProps(state) {
	return {
		todos: selectVisibleTodos(state.todos, state.filter)
	};
}

function mapDispatchToProps(dispatch) {
	return {
		add: (text) => (dispatch(actions.addTodo(text))),
		toggle: (id) => (dispatch(actions.toggleTodo(id))),
		remove: (id) => (dispatch(actions.removeTodo(id)))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
