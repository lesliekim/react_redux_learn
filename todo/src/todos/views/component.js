import React from 'react';

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		this.onToggle = this.onToggle.bind(this);
		this.onRemove = this.onRemove.bind(this);
	}
	onToggle() {
		this.props.toggle(this.props.id);
	}
	onRemove() {
		this.props.remove(this.props.id);
	}
	render() {
		return (<li>
			<label>
			<input type="checkbox" checked={this.props.completed} onClick={this.onToggle} />
			{ this.props.text }
			</label>
			<button onClick={this.onRemove}>x</button>
		</li>);
	}
}

class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.onAdd = this.onAdd.bind(this);
		this.refInput = this.refInput.bind(this);
	}
	onAdd() {
		let text = this.input.value;
		this.props.add(text);
		this.input.value = '';
	}
	refInput(node) {
		this.input = node;
	}
	render() {
		return (
			<li><input type="text" ref={this.refInput}/><button onClick={ this.onAdd }>Add</button></li>
		);
	}
}

class TodoList extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		const todos = [];
		const { toggle, remove } = this.props
		for (let i=0; i < this.props.todos.length; i++) {
			let item = this.props.todos[i]
			todos.push(<TodoItem key={item.id} id={item.id} text={item.text} completed={item.completed} toggle={toggle} remove={remove}/>)
		}
		return (<div>
			<ul>{ todos }</ul>
			<AddTodo add={ this.props.add }/>
		</div>);
	}

}

export default TodoList;
