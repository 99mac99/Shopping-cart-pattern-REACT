import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div className={this.getDivClasses()}>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  getDivClasses() {
    let classes = "m-2";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

// renderTags() {
//     if(this.state.tags.length === 0) return <p>There are no tags! </p>;

//     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
// }
// {this.state.tags.length === 0 && 'Please create a new tag!'}
// {this.renderTags()}
