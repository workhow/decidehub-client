import React, { Component } from "react";

class VoteRange extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: 0 };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form name="voteForm" className="flex flex-row my-4 justify-between">
        <div className=" w-full align-left">
          <p className="text-lg text-gray-dark">{this.props.name}</p>
        </div>
        <div className="w-2/3">
          <input
            type="range"
            name="amount"
            min="0"
            max="100"
            value={this.state.amount}
            onChange={this.handleInputChange}
          />
          <input
            type="number"
            name="amount"
            min="0"
            max="100"
            value={this.state.amount}
            onChange={this.handleInputChange}
            className="ml-4"
          />
        </div>
      </form>
    );
  }
}

export default VoteRange;
