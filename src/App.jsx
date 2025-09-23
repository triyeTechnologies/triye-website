import { useState, useEffect } from 'react';
import TriyeWebsite from './components/TriyeWebsite';
import AdminPage from './components/AdminPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Check URL path on load
    const path = window.location.pathname;
    if (path === '/admin' || path.endsWith('/admin')) {
      setCurrentPage('admin');
    } else {
      setCurrentPage('home');
    }

    // Handle browser back/forward buttons
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/admin' || path.endsWith('/admin')) {
        setCurrentPage('admin');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToAdmin = () => {
    window.history.pushState(null, '', '/admin');
    setCurrentPage('admin');
  };

  const navigateToHome = () => {
    window.history.pushState(null, '', '/');
    setCurrentPage('home');
  };

  // Handle direct navigation to /admin
  useEffect(() => {
    // Listen for manual URL changes
    const checkForAdminRoute = () => {
      if (window.location.pathname === '/admin' || window.location.pathname.endsWith('/admin')) {
        setCurrentPage('admin');
      }
    };

    // Check immediately and set up interval to check periodically
    checkForAdminRoute();
    const interval = setInterval(checkForAdminRoute, 1000);
    
    return () => clearInterval(interval);
  }, []);

  if (currentPage === 'admin') {
    return <AdminPage onBackToHome={navigateToHome} />;
  }

  return <TriyeWebsite onNavigateToAdmin={navigateToAdmin} />;
}

export default App;