import React, { Component } from "react";
import "./VoteRange.css";

class VoteRange extends Component {
  render() {
    return (
      <form
        name="voteForm"
        className="flex flex-row items-center justify-between my-4">
        <div className="w-1/2 align-left">
          <p className="text-lg text-gray-dark">{this.props.name}</p>
        </div>
        <input
          className="flex-grow slider"
          type="range"
          name="amount"
          min="0"
          data-userid={this.props.userId}
          data-option={this.props.option}
          max={this.props.max}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <input
          type="number"
          name="amount"
          min="0"
          data-userid={this.props.userId}
          data-option={this.props.option}
          max={this.props.max}
          value={this.props.value}
          onChange={this.props.onChange}
          className="ml-4"
        />
      </form>
    );
  }
}

export default VoteRange;
