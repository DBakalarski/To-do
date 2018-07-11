import React from 'react';

class TodoList extends React.component {
	constructor(props){
	super(props)
	}
	render() {
		return (
			<div>
				<ul>			
					<TodoElement text={this.props.text} />
				</ul>
			</div>
		)
	}
}

class TodoElement extends React.component {
	constructor(props){
		super(props)
	}
	render() {
		return(
			<li /*key={this.props.id}*/ >	
				{this.props.text}
			</li>
		)
	}
}


export default TodoList;