
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut, Save, Eye, Edit3, ArrowLeft } from 'lucide-react';
import AdminContentEditor from '@/components/AdminContentEditor';
import { usePortfolio } from '@/context/PortfolioContext';

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const { data } = usePortfolio();

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
      handleLogout();
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminSession');
    navigate('/');
  };

  const handleSave = () => {
    // Data is already saved in real-time through context
    setLastSaved(new Date());
    console.log('Portfolio data saved successfully');
  };

  const handlePublish = () => {
    handleSave();
    console.log('Publishing changes...');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Admin Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                onClick={() => navigate('/')}
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Site
              </Button>
              <div className="h-6 w-px bg-white/20" />
              <h1 className="text-lg font-bold text-white">Portfolio Admin</h1>
            </div>

            <div className="flex items-center gap-3">
              {lastSaved && (
                <span className="text-sm text-gray-400">
                  Last saved: {lastSaved.toLocaleTimeString()}
                </span>
              )}

              <Button
                onClick={handleSave}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>

              <Button
                onClick={handlePublish}
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Publish
              </Button>

              <Button
                onClick={handleLogout}
                variant="ghost"
                size="sm"
                className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Content */}
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4 space-y-8">
          <div className="bg-gray-900/50 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Portfolio Content Management</h2>
            <p className="text-gray-300 mb-6">
              Edit your portfolio content in real-time. Changes are saved automatically and will be reflected immediately on the live site.
            </p>

            <AdminContentEditor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
