
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="animate-fade-in max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                Contact Us
            </h1>
            <div className="bg-slate-800 rounded-lg shadow-2xl p-8">
                {submitted ? (
                     <div className="text-center p-8 animate-fade-in">
                        <svg className="w-16 h-16 mx-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h2 className="text-2xl font-bold text-white mt-4">Thank you!</h2>
                        <p className="text-slate-300 mt-2">Your message has been "sent". We'll get back to you shortly (not really, this is a demo!).</p>
                    </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300">Full Name</label>
                        <input type="text" name="name" id="name" required className="mt-1 block w-full bg-slate-700 text-white placeholder-slate-400 border border-slate-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200" placeholder="John Doe" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
                        <input type="email" name="email" id="email" required className="mt-1 block w-full bg-slate-700 text-white placeholder-slate-400 border border-slate-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200" placeholder="you@example.com" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
                        <textarea id="message" name="message" rows={4} required className="mt-1 block w-full bg-slate-700 text-white placeholder-slate-400 border border-slate-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200" placeholder="Your message here..."></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-indigo-500 transition duration-200">
                            Send Message
                        </button>
                    </div>
                </form>
                )}
            </div>
        </div>
    );
};

export default ContactPage;
