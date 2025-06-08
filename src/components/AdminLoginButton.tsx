
import React, { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';
import AdminLoginModal from './AdminLoginModal';

const AdminLoginButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleFooterHover = () => {
      setIsVisible(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsVisible(false), 3000);
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'a' && e.ctrlKey && e.shiftKey) {
        e.preventDefault();
        setShowModal(true);
      }
    };

    const footer = document.querySelector('footer');
    if (footer) {
      footer.addEventListener('mouseenter', handleFooterHover);
      footer.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => setIsVisible(false), 1000);
      });
    }

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      if (footer) {
        footer.removeEventListener('mouseenter', handleFooterHover);
        footer.removeEventListener('mouseleave', () => {});
      }
      document.removeEventListener('keydown', handleKeyPress);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`fixed bottom-6 right-6 z-50 p-3 bg-gray-800/90 hover:bg-gray-700 backdrop-blur-sm border border-white/10 rounded-full transition-all duration-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        title="Admin Panel (Ctrl+Shift+A)"
      >
        <Settings className="w-5 h-5 text-white" />
      </button>
      
      <AdminLoginModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </>
  );
};

export default AdminLoginButton;
