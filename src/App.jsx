import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatWindow from './pages/ChatWindow/ChatWindow';
import EventManagement from './pages/EventManagement/EventManagement';
import Directory from './pages/Directory/Directory';
import Layout from './layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarChart, FileEarmarkBarGraph, People, Bell, Gear, CalendarEvent, PersonCircle, Speedometer2 } from 'react-bootstrap-icons';

const sampleCardsData = [
  {
    title: 'Events',
    description: 'Plan, organize, and manage your events seamlessly.',
    image: 'https://placehold.co/300x200?text=Events',
    tags: ['events', 'management', 'planning'],
    navigateTo: '/event-management',
    category: 'Operations',
    icon: CalendarEvent,
    pageComponent: EventManagement,
  },
  {
    title: 'Directory',
    description: 'Access and manage your contacts and resources.',
    image: 'https://placehold.co/300x200?text=Directory',
    tags: ['directory', 'contacts', 'resources'],
    navigateTo: '/directory',
    category: 'Resources',
    icon: People,
    pageComponent: Directory,
  },
  {
    title: 'Directory Card',
    description: 'A new directory card for quick access.',
    image: 'https://placehold.co/300x200?text=Directory+Card',
    tags: ['directory', 'quick access'],
    navigateTo: '/directory-card',
    category: 'Resources',
    icon: People,
    pageComponent: Directory,
  },
  {
    title: 'Chat',
    description: 'Engage in real-time conversations with RAG.',
    image: 'https://placehold.co/300x200?text=Chat',
    tags: ['chat', 'RAG', 'communication'],
    navigateTo: '/chat-window',
    category: 'Communication',
    icon: Bell,
    pageComponent: ChatWindow,
  },
  {
    title: 'Analytics',
    description: 'Visualize and analyze your data with powerful dashboards.',
    image: 'https://placehold.co/300x200?text=Analytics',
    tags: ['analytics', 'data', 'dashboard'],
    navigateTo: '/analytics',
    category: 'Insights',
    icon: BarChart,
    pageComponent: null,
  },
  {
    title: 'Notifications',
    description: 'Manage and view all your notifications in one place.',
    image: 'https://placehold.co/300x200?text=Notifications',
    tags: ['notifications', 'alerts', 'messages'],
    navigateTo: '/notifications',
    category: 'Communication',
    icon: Bell,
    pageComponent: null,
  },
  {
    title: 'Profile',
    description: 'View and edit your user profile and settings.',
    image: 'https://placehold.co/300x200?text=Profile',
    tags: ['user', 'profile', 'settings'],
    navigateTo: '/user-profile',
    category: 'Account',
    icon: PersonCircle,
    pageComponent: null,
  },
  {
    title: 'Reports',
    description: 'Generate and download detailed reports.',
    image: 'https://placehold.co/300x200?text=Reports',
    tags: ['reports', 'download', 'summary'],
    navigateTo: '/reports',
    category: 'Insights',
    icon: FileEarmarkBarGraph,
    pageComponent: null,
  },
  {
    title: 'Settings',
    description: 'Configure application preferences and options.',
    image: 'https://placehold.co/300x200?text=Settings',
    tags: ['settings', 'preferences', 'options'],
    navigateTo: '/settings',
    category: 'Account',
    icon: Gear,
    pageComponent: null,
  },
];

const categories = Array.from(new Set(sampleCardsData.map(card => card.category)));

const sidebarData = [
  { label: 'Dashboard', path: '/', icon: Speedometer2 },
  ...categories.map(category => {
    const card = sampleCardsData.find(card => card.category === category);
    return {
      label: category,
      path: `/category/${category.toLowerCase().replace(/\s+/g, '-')}`,
      icon: card ? card.icon : null,
    };
  })
];

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Layout sidebarData={sidebarData}>
        <Routes>
          <Route path="/" element={<Dashboard cardsData={sampleCardsData} />} />
          {categories.map(category => (
            <Route
              key={category}
              path={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
              element={<Dashboard cardsData={sampleCardsData.filter(card => card.category === category)} />} />
          ))}
          {sampleCardsData.map(card => {
            const PageComponent = card.pageComponent || (() => <div>{card.title} Page</div>);
            return (
              <Route
                key={card.navigateTo}
                path={card.navigateTo}
                element={<PageComponent />}
              />
            );
          })}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
