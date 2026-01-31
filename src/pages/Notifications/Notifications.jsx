import Button from 'react-bootstrap/Button';
import { HouseFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Notifications = () => {
  const navigate = useNavigate();
  return (
    <Container className="notifications-container" style={{ minWidth: 900, maxWidth: 1140, width: '100%' }}>
      {/* Removed sub header */}
      <div className="notifications-content">
        <p>Check your notifications here.</p>
        {/* Notifications functionality can be added here */}
      </div>
    </Container>
  );
};

export default Notifications;
