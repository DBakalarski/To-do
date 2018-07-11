import React from 'react';



const TodoElements = elements.map(function(elements) {
	return React.createElement(TodoList, {key: elements.id, text: elements.title})
})

/*
const TodoElements = elementData.map(function(elements) {
	return(
		<li key={this.props.id} >	
			{this.props.text}
		</li>
	) */
/*
	return React.createElement(TodoList, {key: elements.id, title: movie.title, desc: movie.desc, img: movie.img}) 
}) */




class TodoList extends React.Component {
	constructor(props){
	super(props)
	}
	render() {
		return (
			<div>
				<ul>			
					<TodoElements elements={this.props.elements} />
				</ul>
			</div>
		)
	}
}

class TodoElement extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		return(
			<li key={this.props.id} >	
				{this.props.text}
			</li>
		)
	}
}


export default TodoList;