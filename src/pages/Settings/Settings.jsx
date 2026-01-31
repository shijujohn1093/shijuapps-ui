import Button from 'react-bootstrap/Button';
import { HouseFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Settings = () => {
  const navigate = useNavigate();
  return (
    <Container className="settings-container" style={{ minWidth: 900, maxWidth: 1140, width: '100%' }}>
      <div className="settings-content">
        <p>Adjust your settings here.</p>
        {/* Settings functionality can be added here */}
      </div>
    </Container>
  );
};

export default Settings;
