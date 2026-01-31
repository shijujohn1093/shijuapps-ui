import React from 'react';
import { Button } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import { Nav } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ sidebarData, collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <aside className={`sidebar bg-dark text-light${collapsed ? ' collapsed' : ''}`} style={{ position: 'relative' }}>
      <Button
        variant="outline-light"
        size="sm"
        style={{ position: 'absolute', top: 10, right: collapsed ? -18 : -18, zIndex: 2, background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}
        onClick={() => setCollapsed(!collapsed)}
        title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        aria-label={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
      >
        {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </Button>
      <Nav className="flex-column sidebar-nav">
        {sidebarData.map((item, idx) => (
          <React.Fragment key={idx}>
            <Nav.Link
              className={`sidebar-item${location.pathname === item.path ? ' active' : ''}`}
              onClick={() => navigate(item.path)}
              title={item.label}
              aria-current={location.pathname === item.path ? 'page' : undefined}
            >
              {collapsed ? (
                <span className="sidebar-icon">
                  {item.icon && <item.icon size={22} />}
                </span>
              ) : (
                <>
                  <span className="sidebar-icon me-2">{item.icon && <item.icon size={22} />}</span>
                  {item.label}
                </>
              )}
            </Nav.Link>
            {idx === 0 && <div className="sidebar-divider" />}
          </React.Fragment>
        ))}
      </Nav>
    </aside>
  );
};

export default Sidebar;
