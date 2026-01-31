import React from 'react';
import { Button } from 'react-bootstrap';

const ChatHeader = ({ handleNewThread }) => (
  <div className="bg-primary text-white" style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1.25rem', fontWeight: 500, fontSize: 18 }}>
    <span>Ask me anything</span>
    <Button size="sm" variant="outline-light" onClick={handleNewThread}>+ New</Button>
  </div>
);

export default ChatHeader;
