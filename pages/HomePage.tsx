import React from 'react';

// FIX: Replaced `JSX.Element` with `React.ReactElement` to fix "Cannot find namespace 'JSX'" error.
const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactElement }> = ({ title, description, icon }) => (
    <div className="bg-slate-800 rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
        <div className="bg-indigo-500 rounded-full p-3 mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-slate-400">{description}</p>
    </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in text-center">
      <section className="py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 mb-4 animate-slide-in-up">
          Welcome to the Future of Web Apps
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-8 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
          Explore a seamless multi-page experience built with React, styled with Tailwind CSS, and powered by the intelligent Gemini API. All with a single, static URL.
        </p>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
                title="Static URL Navigation"
                description="Enjoy a multi-page feel without page reloads or URL changes, perfect for specific hosting environments."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>}
            />
            <FeatureCard
                title="AI-Powered Content"
                description="Leverage the Gemini API to generate creative and engaging stories on-demand. See our AI Story page!"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
            />
            <FeatureCard
                title="Modern UI/UX"
                description="A beautiful and responsive interface built with Tailwind CSS for an excellent user experience on any device."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m8-8h2M4 12H2m15.364 6.364l1.414 1.414M4.222 4.222l1.414 1.414m12.728 0l-1.414 1.414M5.636 18.364l-1.414 1.414" /></svg>}
            />
        </div>
      </section>
    </div>
  );
};

export default HomePage;