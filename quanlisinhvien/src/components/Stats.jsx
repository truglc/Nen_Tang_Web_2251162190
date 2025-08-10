import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function Stats({ students }) {
  const totalStudents = students.length;
  const uniqueMajors = new Set(students.map(s => s.major)).size;
  return (
    <Row className="mt-4">
      <Col>
        <Card bg="primary" text="white" className="text-center">
          <Card.Body>
            <Card.Title>Tổng sinh viên</Card.Title>
            <Card.Text style={{ fontSize: '1.5rem' }}>{totalStudents}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="success" text="white" className="text-center">
          <Card.Body>
            <Card.Title>Ngành học</Card.Title>
            <Card.Text style={{ fontSize: '1.5rem' }}>{uniqueMajors}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Stats;
