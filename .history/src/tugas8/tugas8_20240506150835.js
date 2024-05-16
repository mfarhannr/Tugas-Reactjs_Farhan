import React, { Component } from 'react';
import { Alert } from "flowbite-react";
class Tugas8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:1
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="Card8">
        <p>{count}</p>
        <Alert variant="info">This is an information alert.</Alert>
        {/* Other Flowbite components */}
        {count > 10 ? (
          <p>sudah lebih dari 10</p>
        ) : (
          <button className="tambah" onClick={this.handleIncrement}>
            Tambah
          </button>
        )}
      </div>
    );
  }
}

export default Tugas8;
