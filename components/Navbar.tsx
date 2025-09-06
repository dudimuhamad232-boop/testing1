
import React from 'react';
import { Page } from '../types';
import { SparklesIcon } from './icons/SparklesIcon';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavItem: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, setCurrentPage, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => setCurrentPage(page)}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 ${
        isActive
          ? 'bg-indigo-600 text-white shadow-lg'
          : 'text-slate-300 hover:bg-slate-700 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
};

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="bg-slate-800/50 backdrop-blur-sm sticky top-0 z-50 shadow-md shadow-slate-900/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
             <div className="flex-shrink-0 text-white flex items-center gap-2">
                <SparklesIcon className="h-8 w-8 text-indigo-400" />
                <span className="font-bold text-xl">Gemini Pages</span>
             </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavItem page={Page.Home} currentPage={currentPage} setCurrentPage={setCurrentPage}>Home</NavItem>
              <NavItem page={Page.Gallery} currentPage={currentPage} setCurrentPage={setCurrentPage}>Gallery</NavItem>
              <NavItem page={Page.StoryGenerator} currentPage={currentPage} setCurrentPage={setCurrentPage}>AI Story</NavItem>
              <NavItem page={Page.Contact} currentPage={currentPage} setCurrentPage={setCurrentPage}>Contact</NavItem>
            </div>
          </div>
          {/* Mobile menu can be added here if needed */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
