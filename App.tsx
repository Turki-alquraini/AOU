import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AdminView from './components/AdminView';
import StudentView from './components/StudentView';
import { ViewType } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ViewType>('admin');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-right" dir="rtl">
      {/* Sidebar Navigation */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <main className="md:mr-20 lg:mr-64 min-h-screen transition-all duration-300">
        {/* Header */}
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6">
          
          {/* Toggle for Demo Purposes (Mobile accessible) */}
          <div className="flex justify-end mb-4">
            <div className="bg-white p-1 rounded-lg border shadow-sm inline-flex">
              <button 
                onClick={() => setActiveTab('admin')}
                className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-md font-medium transition-all ${activeTab === 'admin' ? 'bg-slate-800 text-white shadow' : 'text-slate-500 hover:bg-gray-50'}`}
              >
                المسؤول
              </button>
              <button 
                onClick={() => setActiveTab('student')}
                className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-md font-medium transition-all ${activeTab === 'student' ? 'bg-slate-800 text-white shadow' : 'text-slate-500 hover:bg-gray-50'}`}
              >
                الطالب
              </button>
            </div>
          </div>

          {/* Conditional Rendering of Views */}
          {activeTab === 'admin' ? <AdminView /> : <StudentView />}

        </div>
      </main>
    </div>
  );
}

export default App;