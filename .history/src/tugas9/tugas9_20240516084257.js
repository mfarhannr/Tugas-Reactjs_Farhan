import React from "react";

function Tugas6() { 
    return (
      <div className="overflow-x-auto w-auto m-10 p-2">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Nama</Table.HeadCell>
            <Table.HeadCell>Mata Kuliah</Table.HeadCell>
            <Table.HeadCell>Nilai</Table.HeadCell>
            <Table.HeadCell>Predikat</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>{student.predikat}</Table.Cell>
                <Table.Cell>
                  <div className="d-flex">
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
}