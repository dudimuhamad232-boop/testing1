
import React, { useState, useCallback } from 'react';
import { generateStory } from '../services/geminiService';
import { SparklesIcon } from '../components/icons/SparklesIcon';

const StoryGeneratorPage: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [story, setStory] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateStory = useCallback(async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt for the story.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setStory('');
    try {
      const generatedStory = await generateStory(prompt);
      setStory(generatedStory);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt]);

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <SparklesIcon className="h-16 w-16 mx-auto text-indigo-400 mb-4" />
        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
          AI Story Generator
        </h1>
        <p className="text-slate-400">Let Gemini write a unique story for you. Just provide a prompt!</p>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg shadow-2xl">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., A lost astronaut on a planet of giant mushrooms"
            className="flex-grow bg-slate-700 text-white placeholder-slate-400 border border-slate-600 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            disabled={isLoading}
          />
          <button
            onClick={handleGenerateStory}
            disabled={isLoading}
            className="flex items-center justify-center bg-indigo-600 text-white font-bold py-3 px-6 rounded-md hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed transition duration-200"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : (
              'Generate Story'
            )}
          </button>
        </div>
      </div>

      {error && (
        <div className="mt-6 bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg" role="alert">
          <p>{error}</p>
        </div>
      )}

      {story && (
        <div className="mt-8 bg-slate-800/50 p-6 rounded-lg shadow-lg animate-fade-in">
          <h2 className="text-2xl font-bold mb-4 text-indigo-400">Your Story</h2>
          <p className="text-slate-300 whitespace-pre-wrap leading-relaxed">{story}</p>
        </div>
      )}
    </div>
  );
};

export default StoryGeneratorPage;
