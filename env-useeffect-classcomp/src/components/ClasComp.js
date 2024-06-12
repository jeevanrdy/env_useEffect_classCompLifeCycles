import React, { Component } from "react";

export default class ClasComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      age: 0,
    };
  }
  componentDidMount() {
    console.log("CComp-loaded");
  }
  componentWillUnmount() {
    console.log("CComp-unloaded");
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log("CComp shouldComponentUpdate");

    // Only update if score or age changes
    if (
      nextState.score !== this.state.score ||
      nextState.age !== this.state.age
    ) {
      return true;
    }

    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("CComp componentDidUpdate");

    // Log changes in score
    if (prevState.score !== this.state.score) {
      console.log(
        `Score changed from ${prevState.score} to ${this.state.score}`
      );
    }

    // Log changes in age
    if (prevState.age !== this.state.age) {
      console.log(`Age changed from ${prevState.age} to ${this.state.age}`);
    }
  }
  render() {
    return (
      <div className="counterstyle">
        <h3>ClasComponent</h3>
        <h2>Score: {this.state.score}</h2>
        <button
          type="button"
          onClick={() => {
            this.setState({ score: this.state.score + 1 });
          }}
        >
          Increase
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ score: this.state.score - 1 });
          }}
        >
          Decrease
        </button>

        <h2>Age: {this.state.age}</h2>
        <button
          type="button"
          onClick={() => {
            this.setState({ age: this.state.age + 1 });
          }}
        >
          Increase
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ age: this.state.age - 1 });
          }}
        >
          Decrease
        </button>
      </div>
    );
  }
}
