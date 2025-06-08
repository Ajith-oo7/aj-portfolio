
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuth');
    const sessionTime = localStorage.getItem('adminSession');
    
    if (!isAuthenticated || !sessionTime) {
      navigate('/');
      return;
    }

    // Check if session is still valid (24 hours)
    const currentTime = Date.now();
    const sessionAge = currentTime - parseInt(sessionTime);
    const maxAge = 24 * 60 * 60 * 1000; // 24 hours

    if (sessionAge > maxAge) {
      localStorage.removeItem('adminAuth');
      localStorage.removeItem('adminSession');
      navigate('/');
    }
  }, [navigate]);

  const isAuthenticated = localStorage.getItem('adminAuth');
  
  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
