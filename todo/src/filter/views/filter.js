import React from 'react';
import { filterTodo } from '../actions.js';
import { FilterType } from '../../constants.js';
import { connect } from 'react-redux';

class Filter extends React.Component {
	constructor(props) {
		super(props);
	}
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
		filter: state.filter
	};
}

function mapDispatchToProps(dispatch) {
	return {
		filterAll: () => (dispatch(filterTodo(FilterType.ALL))),
		filterTodo: () => (dispatch(filterTodo(FilterType.TODO))),
		filterCompleted: () => (dispatch(filterTodo(FilterType.COMPLETED)))

	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
