import Button from 'react-bootstrap/Button';
import { HouseFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Reports = () => {
  const navigate = useNavigate();
  return (
    <Container className="reports-container" style={{ minWidth: 900, maxWidth: 1140, width: '100%' }}>
      {/* Removed sub header */}
      <div className="reports-content">
        <p>View and generate reports here.</p>
        {/* Reports functionality can be added here */}
      </div>
    </Container>
  );
};

export default Reports;
