import React from 'react';

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id,
			text: this.props.text,
			completed: this.props.completed
		};
	}

	render() {
		return (<li><label><input type="checkbox" checked={ this.state.completed }>{ this.props.text }</label></li>);
	}
}

export default TodoItem;
