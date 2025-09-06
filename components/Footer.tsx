
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800/50 shadow-inner mt-12">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Gemini Multi-Page App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
