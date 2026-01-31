import React from 'react';
import ChatBot from '../../components/ChatBot/ChatBot';

const ChatWindow = () => (
  <div style={{ minWidth: 900, maxWidth: 1140, width: '100%', margin: '0 auto', height: 'calc(100vh - 64px - 56px)', display: 'flex', alignItems: 'stretch' }}>
    <ChatBot />
  </div>
);

export default ChatWindow;