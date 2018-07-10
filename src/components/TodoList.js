import React from 'react';

const elementData =
	[{
	id: 1,
	    text: 'clean room'
	}, {
	id: 2,
	    text: 'wash the dishes'
	}, {
	id: 3,
	    text: 'feed my cat'
	}]

class TodoList extends React.component {
	constructor(props){
	super(props)
	}
	render() {
		return (
			<div>
				<ul>			
						<TodoElement text={this.props.elementData.text} />
				</ul>
			</div>
		)
	}
	remove() {

	}
}

class TodoElement extends React.component {
	constructor(props){
		super(props)
	}
	render() {
		return(
			<li key={this.props.id} text={this.props.text} >
				
			</li>
		)
	}
}


export default TodoList;