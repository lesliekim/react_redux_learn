import React from 'react';
import * as actions from '../actions';
import TodoList from './component';
import { connect } from 'react-redux';

class TodoContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <TodoList  todos={this.props.todos} add={this.props.add} toggle={this.props.toggle} remove={this.props.remove}/>;
	}
}

function mapStateToProps(state) {
	return {
		todos: state.todos
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
