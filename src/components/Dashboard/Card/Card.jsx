import React from 'react';

const cardTextStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '100%',
  display: 'block',
};

const Card = ({ card, onClick }) => (
  <div
    className="card dashboard-card shadow-sm"
    style={{
      width: '100%',
      maxWidth: 250,
      minWidth: 180,
      height: 280,
      minHeight: 280,
      maxHeight: 280,
      cursor: 'pointer',
      margin: '0 auto',
      boxSizing: 'border-box',
    }}
    onClick={onClick}
  >
    <img
      src={card.image}
      className="card-img-top"
      alt={card.title}
      style={{ height: 120, objectFit: 'cover' }}
    />
    <div className="card-body d-flex flex-column justify-content-end">
      <h5 className="card-title">{card.title}</h5>
      <p className="card-text" style={cardTextStyle}>
        {card.description}
      </p>
    </div>
  </div>
);

export default Card;
