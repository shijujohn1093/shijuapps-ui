import React from 'react';
import './DashboardSearch.css';
import Form from 'react-bootstrap/Form';

const DashboardSearch = ({ searchTerm, setSearchTerm }) => (
  <Form className="mb-4">
    <Form.Control
      type="text"
      className="search-box"
      placeholder="Search by title, description, or tags..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </Form>
);

export default DashboardSearch;
