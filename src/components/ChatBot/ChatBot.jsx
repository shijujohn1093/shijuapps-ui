import React, { useState, useRef, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { PersonCircle, Robot } from 'react-bootstrap-icons';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatInput from './ChatInput/ChatInput';
import ThreadPanel from './ThreadPanel/ThreadPanel';

const dummyResponses = [
  "Hello! How can I help you today?",
  "I'm a simple chatbot. Ask me anything!",
  "Here's a random fact: The Eiffel Tower can be 15 cm taller during hot days.",
  "I'm here to assist you with your queries.",
  "Did you know? Honey never spoils.",
  "Feel free to ask another question!",
  "I'm just a bot, but I love to chat!"
];

function getRandomResponse() {
  return dummyResponses[Math.floor(Math.random() * dummyResponses.length)];
}

const initialBotMsg = { from: 'bot', text: 'Hi! I am your assistant. How can I help you?' };

const ChatBot = () => {
  const [threads, setThreads] = useState([
    { id: 1, name: 'Chat 1', messages: [initialBotMsg] }
  ]);
  const [activeThread, setActiveThread] = useState(1);
  const [input, setInput] = useState('');
  const [file, setFile] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const messagesEndRef = useRef(null);

  const currentThread = threads.find(t => t.id === activeThread);
  const messages = currentThread ? currentThread.messages : [];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, activeThread]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() && !file) return;
    const userMessages = [];
    if (input.trim()) {
      userMessages.push({ from: 'user', text: input });
    }
    if (file) {
      userMessages.push({ from: 'user', text: `Uploaded file: ${file.name}` });
    }
    setThreads(ts => ts.map(t => t.id === activeThread ? { ...t, messages: [...t.messages, ...userMessages] } : t));
    setInput('');
    setFile(null);
    setTimeout(() => {
      setThreads(ts => ts.map(t => t.id === activeThread ? { ...t, messages: [...t.messages, { from: 'bot', text: getRandomResponse() }] } : t));
    }, 700);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  };

  const handleNewThread = () => {
    const newId = threads.length ? Math.max(...threads.map(t => t.id)) + 1 : 1;
    setThreads(ts => [...ts, { id: newId, name: `Chat ${newId}`, messages: [initialBotMsg] }]);
    setActiveThread(newId);
  };

  return (
    <div style={{ display: 'flex', height: '100%', width: '100%', position: 'relative', minHeight: 0, minWidth: 0 }}>
      <ThreadPanel
        threads={threads}
        activeThread={activeThread}
        setActiveThread={setActiveThread}
        handleNewThread={handleNewThread}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <div style={{ flex: 1, minWidth: 0, display: 'flex', justifyContent: 'flex-end', background: '#f8fafc', minHeight: 0 }}>
        <Card className="chatbot-card" style={{ width: '100%', maxWidth: 900, height: '100%', margin: 0, minHeight: 0, padding: 0, paddingTop:0, display: 'flex', flexDirection: 'column', borderRadius: 0, boxShadow: '0 0 16px 0 rgba(0,0,0,0.04)' }}>
          <ChatHeader handleNewThread={handleNewThread} />
          <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <Card.Body style={{ flex: 1, overflowY: 'auto', background: '#f8fafc', padding: 16, minHeight: 0 }}>
              {messages.map((msg, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: msg.from === 'user' ? 'flex-start' : 'flex-end', alignItems: 'flex-end', margin: '10px 0' }}>
                  {msg.from === 'user' && (
                    <span style={{ marginRight: 8, color: '#6c757d', display: 'flex', alignItems: 'center' }}><PersonCircle size={28} /></span>
                  )}
                  <span
                    style={{
                      display: 'inline-block',
                      background: msg.from === 'user' ? 'linear-gradient(90deg, #d1e7dd 60%, #b6e2d3 100%)' : 'linear-gradient(90deg, #e2e3e5 60%, #f1f1f1 100%)',
                      color: '#222',
                      borderRadius: msg.from === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                      padding: '10px 18px',
                      maxWidth: '70%',
                      wordBreak: 'break-word',
                      fontSize: 15,
                      boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
                    }}
                  >
                    {msg.text}
                  </span>
                  {msg.from === 'bot' && (
                    <span style={{ marginLeft: 8, color: '#0d6efd', display: 'flex', alignItems: 'center' }}><Robot size={28} /></span>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </Card.Body>
            <Card.Footer style={{ background: '#f8fafc', flex: '0 0 auto', borderTop: '1px solid #e2e3e5' }}>
              <ChatInput
                input={input}
                setInput={setInput}
                file={file}
                setFile={setFile}
                handleSend={handleSend}
                handleFileChange={handleFileChange}
                handleKeyDown={handleKeyDown}
              />
            </Card.Footer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ChatBot;
