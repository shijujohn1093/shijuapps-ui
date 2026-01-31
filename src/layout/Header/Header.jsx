import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons';

const Header = ({ collapsed, setCollapsed }) => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand href="/">ShijuApps</Navbar.Brand>
      {/* Sidebar toggle removed from header for clarity. Use sidebar button only. */}
    </Container>
  </Navbar>
);

export default Header;
