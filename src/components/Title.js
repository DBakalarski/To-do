import React from 'react';

class Title extends React.Component {
	constructor(props){
		super(props)
	}
	render () {
		return (
			<div>
				<TitleName title={this.props.title} />
				<ToDoNumber number={this.props.number} />
			</div>
		)
	}
}

class TitleName extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		return(
			<h1>{this.props.title}</h1>
		)
	}
}

class ToDoNumber extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<p>Number of to do - {this.props.number}</p>
		)
	}
}

export default Title;