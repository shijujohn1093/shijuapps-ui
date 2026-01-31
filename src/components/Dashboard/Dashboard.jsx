import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardSearch from '../DashboardSearch/DashboardSearch';
import Card from './Card/Card';
import './Dashboard.css';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = ({ cardsData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const fuzzyMatch = (text, search) => {
    const searchLower = search.toLowerCase();
    const textLower = text.toLowerCase();
    let searchIndex = 0;
    for (let i = 0; i < textLower.length; i++) {
      if (textLower[i] === searchLower[searchIndex]) {
        searchIndex++;
      }
      if (searchIndex === searchLower.length) {
        return true;
      }
    }
    return false;
  };

  const filteredCards = cardsData.filter((card) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      fuzzyMatch(card.title, lowerCaseSearchTerm) ||
      fuzzyMatch(card.description, lowerCaseSearchTerm) ||
      card.tags.some((tag) => fuzzyMatch(tag, lowerCaseSearchTerm))
    );
  });

  return (
    <Container className="dashboard-container py-4" style={{ minWidth: 320, maxWidth: 1140, width: '100%', minHeight: 400, minWidth: 900 }}>
      <DashboardSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Row className="gx-1 gy-2" style={{ maxWidth: '100%', marginLeft: 0, marginRight: 0, minHeight: 300 }}>
        {filteredCards.map((card, index) => (
          <Col
            key={index}
            xs={12} // 1 per row on mobile
            sm={filteredCards.length === 2 ? 6 : 6} // 2 cards: 2 per row on sm
            md={filteredCards.length === 2 ? 6 : 4} // wider columns for 2 cards
            lg={filteredCards.length === 2 ? 4 : 4}
            xl={filteredCards.length === 2 ? 4 : 4}
            xxl={filteredCards.length === 2 ? 4 : 4}
            className="d-flex align-items-stretch"
            style={{ paddingLeft: 4, paddingRight: 4 }}
          >
            <Card
              card={card}
              onClick={() => {
                console.log(`Navigating to ${card.navigateTo}`);
                navigate(card.navigateTo);
              }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
