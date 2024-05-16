import React, { Component } from 'react';

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="Card8">
        <p>{count}</p>
        {count > 10 ? (
          <p>sudah lebih dari 10</p>
        ) : (
          <button className="tambah"  onClick={this.handleIncrement}>Tambah</button>
        )}
      </div>
    );
  }
}

export default Tugas8;

