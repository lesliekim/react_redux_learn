import React from 'react';
import AddTodo from './addTodo.jsx';
import TodoItem from './todoItem.jsx';

class TodoPanel extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		const todos = [];
		for (let i=0; i < len(this.props.todos); i++) {
			item = this.props.todos[i]
			todos.push(<TodoItem id=item.id name=item.name completed=item.completed/>)	
		}
		return (<div>
		<ul>{ todos }</ul>
		<AddTodo />	
		</div>);
	}

}

export default TodoPanel;
