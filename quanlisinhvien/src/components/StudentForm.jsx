import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function StudentForm({ show, handleClose, onSave, editingStudent }) {
  const [formData, setFormData] = useState({ name: '', major: '', email: '' });

  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name,
        major: editingStudent.major,
        email: editingStudent.email
      });
    } else {
      setFormData({ name: '', major: '', email: '' });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.major || !formData.email) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    onSave(formData);
    setFormData({ name: '', major: '', email: '' });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{editingStudent ? "Sửa sinh viên" : "Thêm sinh viên"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Họ tên</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ngành học</Form.Label>
            <Form.Control type="text" name="major" value={formData.major} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Hủy</Button>
        <Button variant="primary" onClick={handleSubmit}>
          {editingStudent ? "Cập nhật" : "Thêm mới"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StudentForm;
