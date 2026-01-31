import Button from 'react-bootstrap/Button';
import { HouseFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Analytics = () => {
  const navigate = useNavigate();
  return (
    <Container className="analytics-container" style={{ minWidth: 900, maxWidth: 1140, width: '100%' }}>
      <div className="analytics-content">
        <p>View analytics and reports here.</p>
        {/* Analytics functionality can be added here */}
      </div>
    </Container>
  );
};

export default Analytics;
