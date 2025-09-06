
import React, { useState, useCallback } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import StoryGeneratorPage from './pages/StoryGeneratorPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const renderPage = useCallback(() => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage />;
      case Page.Gallery:
        return <GalleryPage />;
      case Page.StoryGenerator:
        return <StoryGeneratorPage />;
      case Page.Contact:
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-200">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
