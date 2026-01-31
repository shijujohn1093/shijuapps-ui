import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { ChatDots } from 'react-bootstrap-icons';

const ThreadPanel = ({
  threads,
  activeThread,
  setActiveThread,
  handleNewThread,
  collapsed,
  setCollapsed
}) => (
  <div style={{ width: collapsed ? 36 : 150, background: '#f4f4f9', borderRight: '1px solid #e2e3e5', display: 'flex', flexDirection: 'column', minWidth: collapsed ? 36 : 90, transition: 'width 0.2s' }}>
    <div style={{ padding: collapsed ? '12px 4px 8px 4px' : '12px 12px 8px 12px', borderBottom: '1px solid #e2e3e5', display: 'flex', alignItems: 'center', justifyContent: collapsed ? 'center' : 'space-between' }}>
      <Button size="sm" variant="light" style={{ border: 'none', boxShadow: 'none', fontSize: 18, padding: 0, marginRight: collapsed ? 0 : 8 }} onClick={() => setCollapsed(c => !c)} title={collapsed ? 'Expand' : 'Collapse'}>
        {collapsed ? '»' : '«'}
      </Button>
      {!collapsed && <span style={{ fontWeight: 600, fontSize: 17, color: '#222', textAlign: 'left', flex: 1 }}>History</span>}
      {/* New button moved to chat header */}
    </div>
    {!collapsed && (
      <ListGroup variant="flush" style={{ flex: 1, overflowY: 'auto' }}>
        {[...threads.slice(-10)].reverse().map(thread => (
          <ListGroup.Item
            key={thread.id}
            action
            active={thread.id === activeThread}
            onClick={() => setActiveThread(thread.id)}
            style={{ cursor: 'pointer', fontWeight: thread.id === activeThread ? 600 : 400, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
          >
            <ChatDots className="me-2" />
            <span style={{ textAlign: 'left' }}>{thread.name}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    )}
    {collapsed && (
      <ListGroup variant="flush" style={{ flex: 1, overflowY: 'auto' }}>
        {[...threads.slice(-10)].reverse().map(thread => (
          <ListGroup.Item
            key={thread.id}
            action
            active={thread.id === activeThread}
            onClick={() => setActiveThread(thread.id)}
            style={{ cursor: 'pointer', padding: '8px 2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <ChatDots />
          </ListGroup.Item>
        ))}
      </ListGroup>
    )}
  </div>
);

export default ThreadPanel;
