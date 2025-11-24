import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import Badge from './ui/Badge';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-30 shadow-sm">
      <div className="flex items-center gap-3 sm:gap-4">
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 -mr-2 text-slate-600 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-lg font-bold text-slate-800 hidden xs:block">
          AOU Live
        </h1>
        <Badge type="blue" text="تحديث مباشر" />
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative hidden sm:block">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="بحث في المهارات..." 
            className="pr-10 pl-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 lg:w-64 transition-all"
          />
        </div>
        <button className="sm:hidden p-2 text-slate-600">
          <Search size={20} />
        </button>
        <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Bell size={20} className="text-slate-600" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;