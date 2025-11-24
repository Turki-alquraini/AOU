import React from 'react';
import { TrendingUp, LayoutDashboard, Users, BookOpen, Briefcase, X } from 'lucide-react';
import { ViewType } from '../types';

interface SidebarProps {
  activeTab: ViewType;
  setActiveTab: (tab: ViewType) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isOpen, onClose }) => {
  // Mobile Overlay
  const overlayClass = isOpen 
    ? "fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm transition-opacity opacity-100" 
    : "fixed inset-0 bg-black/50 z-40 md:hidden pointer-events-none opacity-0 transition-opacity";

  // Sidebar container classes
  const sidebarClasses = `
    fixed top-0 right-0 h-full bg-slate-900 text-white transition-transform duration-300 ease-in-out z-50 shadow-2xl
    w-64 md:w-20 lg:w-64
    ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
  `;

  return (
    <>
      {/* Mobile Overlay */}
      <div className={overlayClass} onClick={onClose} aria-hidden="true" />

      <aside className={sidebarClasses}>
        <div className="p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
              <TrendingUp size={20} />
            </div>
            <span className="font-bold text-xl md:hidden lg:block">AOU</span>
          </div>
          
          {/* Close button for mobile */}
          <button 
            onClick={onClose}
            className="md:hidden text-slate-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 py-6 space-y-2 px-3 overflow-y-auto">
          <button 
            onClick={() => { setActiveTab('admin'); onClose(); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'admin' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'text-slate-400 hover:bg-slate-800'}`}
          >
            <LayoutDashboard size={20} className="shrink-0" />
            <span className="md:hidden lg:block font-medium">لوحة القيادة</span>
          </button>
          <button 
            onClick={() => { setActiveTab('student'); onClose(); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'student' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'text-slate-400 hover:bg-slate-800'}`}
          >
            <Users size={20} className="shrink-0" />
            <span className="md:hidden lg:block font-medium">بوابة الطلاب</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 transition-colors">
            <BookOpen size={20} className="shrink-0" />
            <span className="md:hidden lg:block font-medium">المناهج الدراسية</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 transition-colors">
            <Briefcase size={20} className="shrink-0" />
            <span className="md:hidden lg:block font-medium">سوق العمل (Live)</span>
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center shrink-0 border border-slate-600">
              <span className="font-bold">A</span>
            </div>
            <div className="md:hidden lg:block overflow-hidden">
              <p className="text-sm font-medium truncate">د. أحمد الغامدي</p>
              <p className="text-xs text-slate-400 truncate">عميد كلية الحاسب</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;