import React, { useState } from 'react';
import './Layout.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

const Layout = ({ children, sidebarData }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className={`layout${collapsed ? ' collapsed' : ''}`}>
      <Header collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="layout-body">
        <Sidebar sidebarData={sidebarData} collapsed={collapsed} setCollapsed={setCollapsed} />
        <main className="main-content">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
