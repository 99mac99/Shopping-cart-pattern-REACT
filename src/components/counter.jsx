import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 0
	};
	handleIncrement = product => {
		console.log(product);
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		console.log('props', this.props)
		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={product => this.handleIncrement(product)}
					className='btn btn-secondary btn-sm'
				>
					Increment
				</button>
			</div>
		);
	}


	getBadgeClasses() {
		let classes = 'badge m-2 bg-';
		classes += this.state.count === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
}

export default Counter;

// renderTags() {
//     if(this.state.tags.length === 0) return <p>There are no tags! </p>;

//     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
// }
// {this.state.tags.length === 0 && 'Please create a new tag!'}
// {this.renderTags()}
