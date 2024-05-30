import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Tugas9 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://example-api-react.smktibazma.sch.id/api/student-scores")
      .then((res) => {
        setData([...res.data]);
      })
      .catch((error) => {});
  }, []);

  console.log(data);
    <>
      
      <div>
        <ul>
          {data !== null &&
            data.map((res) => {
              return (
                <>
                  <li> {res.nama} </li>
                </>
              );
            })}
        </ul>
      </div>
    </>
};

export default Tugas9;
