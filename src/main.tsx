import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App.tsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Router> {/* Wrap your application with BrowserRouter */}
        <main className="container">
          <div className="flex items-start justify-center min-h-screen">
            <div className="mt-20"></div>
          </div>
        </main>
        <App />
      </Router>
    </ClerkProvider>
  </React.StrictMode>,
);
