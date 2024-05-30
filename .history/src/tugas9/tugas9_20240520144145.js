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
                <div className="Card9">
                  <div className="overflow-x-auto">
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
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>{res.nama}</Table.Cell>
                          <Table.Cell>{res.nama}</Table.Cell>
                          <Table.Cell>Matematika</Table.Cell>
                          <Table.Cell>80</Table.Cell>
                          <Table.Cell>B</Table.Cell>
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
                      </Table.Body>
                    </Table>
                  </div>
                </div>
              </>
            );
          })}
      </ul>
    </div>
  </>;
};

export default Tugas9;
