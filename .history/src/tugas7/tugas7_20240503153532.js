import React from "react";

function Tugas7(props) {
  return (
    <div className="Card1">
      <h1>Data Diri Peserta Kelas React</h1>
      <hr></hr>
      <ul>
        <li>
          <span>Nama Lengkap </span>Muhammad Farhan Nurrahmat Latif{props.name}
        </li>
        <li>
          <span>Email </span>farhan@gmail.com{props.name}
        </li>
        <li>
          <span>Kelas </span>XII SIJA{props.name}
        </li>
      </ul>
    </div>
  );
}

export default Tugas7;
