import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "flowbite-react";

const Tugas9 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://example-api-react.smktibazma.sch.id/api/student-scores")
      .then((res) => {
        // Pastikan res.data adalah array sebelum menetapkan ke state
        if (Array.isArray(res.data)) {
          setData(res.data);
        } else {
          console.error("API response is not an array");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className=""
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Nama</Table.HeadCell>
          <Table.HeadCell>Mata Kuliah</Table.HeadCell>
          <Table.HeadCell>Nilai</Table.HeadCell>
          <Table.HeadCell>Predikat</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((res, index) => (
            <Table.Row
              key={index}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>{index + 1}</Table.Cell> {/* Nomor urut */}
              <Table.Cell>{res.nama}</Table.Cell>
              <Table.Cell>{res.mata_kuliah}</Table.Cell>
              <Table.Cell>{res.nilai}</Table.Cell>
              <Table.Cell>{res.index_nilai}</Table.Cell>
              <Table.Cell>
                <div className="flex space-x-2">
                  <Button color="blue">Edit</Button>
                  <Button color="failure">Delete</Button>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Tugas9;
