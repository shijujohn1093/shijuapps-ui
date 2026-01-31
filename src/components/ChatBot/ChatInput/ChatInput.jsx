import React from 'react';
import { Form, Button, InputGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Paperclip } from 'react-bootstrap-icons';

const ChatInput = ({
  input,
  setInput,
  file,
  setFile,
  handleSend,
  handleFileChange,
  handleKeyDown
}) => (
  <Form onSubmit={handleSend}>
    <InputGroup>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="file-upload-tooltip">Attach file</Tooltip>}
      >
        <Button
          as="label"
          variant="link"
          style={{ color: '#495057', padding: '0 10px 0 0', fontSize: 20, background: 'none', border: 'none', boxShadow: 'none' }}
          tabIndex={-1}
        >
          <Paperclip />
          <Form.Control id="chatbot-file-upload" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
        </Button>
      </OverlayTrigger>
      <Form.Control
        as="textarea"
        rows={2}
        style={{ resize: 'vertical', minHeight: 48, maxHeight: 96 }}
        placeholder="Type your message..."
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
      <Button type="submit" variant="primary" style={{ marginLeft: 8 }}>Send</Button>
    </InputGroup>
    {file && (
      <div style={{ fontSize: 13, marginTop: 6, color: '#555', display: 'flex', alignItems: 'center' }}>
        <Paperclip size={15} style={{ marginRight: 6, verticalAlign: 'middle' }} />
        <span style={{ background: '#f1f3f4', borderRadius: 8, padding: '2px 10px', display: 'inline-block', marginRight: 8 }}>{file.name}</span>
        <Button size="sm" variant="link" onClick={() => setFile(null)} style={{ color: '#888', padding: 0, fontSize: 16, lineHeight: 1 }}>×</Button>
      </div>
    )}
  </Form>
);

export default ChatInput;
