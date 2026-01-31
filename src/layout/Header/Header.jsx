import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons';

const Header = ({ collapsed, setCollapsed }) => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand href="/">ShijuApps</Navbar.Brand>
      <span className="d-lg-none">
        <Button
          variant="outline-light"
          size="sm"
          className="me-2"
          onClick={() => setCollapsed(!collapsed)}
          title="Toggle Sidebar"
          aria-label="Toggle Sidebar"
        >
          <List size={22} />
        </Button>
      </span>
      <span className="d-none d-lg-inline">
        <Button variant="outline-light" size="sm" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? '→' : '←'}
        </Button>
      </span>
    </Container>
  </Navbar>
);

export default Header;
