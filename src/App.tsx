import React from 'react';
import { LandingPage } from '@/components/pages/LandingPage/LandingPage';
import { Footer } from '@/components/layouts/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <LandingPage />
      <Footer />
    </div>
  );
};

export default App; 