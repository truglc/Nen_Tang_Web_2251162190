import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import Stats from "./components/Stats";
import { initialStudents } from "./data"; 

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const handleAdd = (student) => {
    if (student.id) {
      setStudents(students.map((s) => (s.id === student.id ? student : s)));
    } else {
      const newId = students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1;
      const newStt = students.length > 0 ? Math.max(...students.map((s) => s.stt)) + 1 : 1;
      setStudents([...students, { ...student, id: newId, stt: newStt }]);
    }
    setShowForm(false);
    setEditingStudent(null);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  return (
    <Container className="mt-4">
      <h1>Quản lý sinh viên</h1>

      {}
      <Stats students={students} />

      {}
      <Button className="mb-3 mt-3" onClick={() => setShowForm(true)}>
        + Thêm sinh viên
      </Button>

      {}
      <StudentList students={students} onDelete={handleDelete} onEdit={handleEdit} />

      {}
      <StudentForm
        show={showForm}
        handleClose={() => { setShowForm(false); setEditingStudent(null); }}
        onSave={handleAdd}
        editingStudent={editingStudent}
      />
    </Container>
  );
}

export default App;
