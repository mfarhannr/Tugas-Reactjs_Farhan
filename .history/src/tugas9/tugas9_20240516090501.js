import React from "react";
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";

function Tugas9() { 
    return (
      <div className="Card9">
        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head color="purple">
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
                <Table.Cell>1</Table.Cell>
                <Table.Cell>Alam</Table.Cell>
                <Table.Cell>Matematika</Table.Cell>
                <Table.Cell>80</Table.Cell>
                <Table.Cell>B</Table.Cell>
                <Table.Cell>
                  <div className="flex">
                    <Button color="blue"  >Edit</Button>
                    <Button color="failure">Delete</Button>
                  </div>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    );
}

export default Tugas9;