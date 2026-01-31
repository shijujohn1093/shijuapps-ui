import Button from 'react-bootstrap/Button';
import { HouseFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const UserProfile = () => {
  const navigate = useNavigate();
  return (
    <Container className="user-profile-container" style={{ minWidth: 900, maxWidth: 1140, width: '100%' }}>
      <div className="user-content">
        <p>Manage your user profile here.</p>
        {/* User profile functionality can be added here */}
      </div>
    </Container>
  );
};

export default UserProfile;
