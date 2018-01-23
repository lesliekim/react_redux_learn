import React from 'react';
import { filterTodo } from '../actions.js';
import { ALL, TODO, COMPLETED } from '../constants.js';
import { connect } from 'react-redux';

class Filter extends React.Component {
	render() {
		return (
		<div>
			<button onClick={this.props.filterAll}>All</button>
			<button onClick={this.props.filterTodo}>Todo</button>
			<button onClick={this.props.filterCompleted}>Completed</button>
		</div>
		);
	}
}

function mapStateToProps(state) {
	return {
	};
}

function mapDispatchToProps(dispatch) {
	return {
		filterAll: () => (dispatch(filterTodo(ALL))),
		filterTodo: () => (dispatch(filterTodo(TODO))),
		filterCompleted: () => (dispatch(filterTodo(COMPLETED)))

	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
