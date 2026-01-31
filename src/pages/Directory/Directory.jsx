import React from 'react';
import Button from 'react-bootstrap/Button';
import { HouseFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Directory = () => {
  const navigate = useNavigate();
  return (
    <Container className="directory-container" style={{ minWidth: 900, maxWidth: 1140, width: '100%' }}>
      {/* Removed sub header */}
      <div className="directory-content">
        <p>Browse the directory here.</p>
        {/* Directory functionality can be added here */}
      </div>
    </Container>
  );
};

export default Directory;
