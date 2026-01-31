import React from 'react';
import Button from 'react-bootstrap/Button';
import { HouseFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const EventManagement = () => {
  const navigate = useNavigate();
  return (
    <Container className="event-management-container" style={{ minWidth: 900, maxWidth: 1140, width: '100%' }}>
      <div className="event-content">
        <p>Plan, organize, and manage your events seamlessly.</p>
      </div>
    </Container>
  );
};

export default EventManagement;
