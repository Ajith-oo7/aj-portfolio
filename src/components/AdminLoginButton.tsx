
import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import AdminLoginModal from './AdminLoginModal';

const AdminLoginButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="p-2 text-white opacity-80 hover:opacity-100 hover:text-neon-blue transition-colors rounded-md hover:bg-white/10"
        title="Admin Panel"
      >
        <Settings className="w-5 h-5" />
      </button>
      
      <AdminLoginModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </>
  );
};

export default AdminLoginButton;
