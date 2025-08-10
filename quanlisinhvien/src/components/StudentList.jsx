import React from 'react';
import { Table, Button } from 'react-bootstrap';

function StudentList({ students, onDelete, onEdit }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ tên</th>
          <th>Ngành học</th>
          <th>Email</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={student.id}>
            <td>{index + 1}</td>
            <td>{student.name}</td>
            <td>{student.major}</td>
            <td>{student.email}</td>
            <td>
              <Button variant="warning" size="sm" onClick={() => onEdit(student)}>Sửa</Button>{' '}
              <Button variant="danger" size="sm" onClick={() => onDelete(student.id)}>Xóa</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default StudentList;
