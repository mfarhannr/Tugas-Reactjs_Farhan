import React from "react";

function Tugas7(props) {
  return (
    <div className="Card1">
      <h1>Data Diri Peserta Kelas React</h1>
      <hr></hr>
      <ul>
        <li>
          <span>Nama Lengkap: </span>{props.name}
        </li>
        <li>
          <span>Email </span>{props.email}
        </li>
        <li>
          <span>Kelas </span>{props.kelas}
        </li>
      </ul>
    </div>
  );
}

export default Tugas7;
