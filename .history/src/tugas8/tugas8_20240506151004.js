mport React, { Component } from 'react';
class Tugas8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="tugas8-container">
        <h2>Tugas 8: State, Lifecycle, Event Handling, Conditional Rendering</h2>
        <p>Count: {count}</p>
        {count > 10 ? (
          <p>sudah lebih dari 10</p>
        ) : (
          <button onClick={this.handleIncrement}>Increment</button>
        )}
      </div>
    );
  }
}

export default Tugas8;

