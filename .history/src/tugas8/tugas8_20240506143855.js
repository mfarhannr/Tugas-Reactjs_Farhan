import React, { Component } from 'react';
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
      <div className="Card8">
        <p>Tambah{count}</p>
        {count > 10 ? (
          <p>sudah lebih dari 10</p>
        ) : (
          <button className="tambah"  onClick={this.handleIncrement}>Increment</button>
        )}
      </div>
    );
  }
}

export default Tugas8;

