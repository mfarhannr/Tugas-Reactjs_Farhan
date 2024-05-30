import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Tugas9 = () => {
  const [data, setData] = useState([]); // Data state
  const [error, setError] = useState(null); // Error state

  // Fetch data when component mounts
  useEffect(() => {
    axios
      .get("https://example-api-react.smktibazma.sch.id/api/student-scores")
      .then((response) => setData(response.data))
      .catch((err) => setError(err));
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>; // Display error message
  }

  if (data.length === 0) {
    return <p>No data available from the API.</p>; // Display no data message
  }

  return (
    <div className="container mx-auto">
      <Table hoverable>
        <Table.Head color="purple text-center">
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Nama</Table.HeadCell>
          <Table.HeadCell>Mata Kuliah</Table.HeadCell>
          <Table.HeadCell>Nilai</Table.HeadCell>
          <Table.HeadCell>Predikat</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((res) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={res.id}
            >
              <Table.Cell>{res.id}</Table.Cell>
              <Table.Cell>{res.nama}</Table.Cell>
              <Table.Cell>{res.mata_kuliah}</Table.Cell>
              <Table.Cell>{res.nilai}</Table.Cell>
              <Table.Cell>{res.index_nilai}</Table.Cell>
              <Table.Cell>
                <div className="flex">
                  <Button color="blue" className="flex mr-2">
                    Edit
                  </Button>
                  <Button color="failure" className="flex">
                    Delete
                  </Button>
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
