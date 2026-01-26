import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import Leaderboard from './components/Leaderboard';
import QuizModal from './components/QuizModal';
import './App.css';

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [filters, setFilters] = useState({
    custody: 'all',
    kyc: 'all',
    usAvailable: 'all'
  });
  
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };
  
  const resetFilters = () => {
    setFilters({
      custody: 'all',
      kyc: 'all',
      usAvailable: 'all'
    });
  };
  
  const handleQuizComplete = (result) => {
    // Apply filters from quiz
    setFilters(prev => ({
      ...prev,
      ...result.filters
    }));
    
    // Close modal
    setIsQuizOpen(false);
    
    // Scroll to leaderboard
    document.getElementById('leaderboard')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Header onOpenQuiz={() => setIsQuizOpen(true)} />
      
      <main>
        <Hero 
          onOpenQuiz={() => setIsQuizOpen(true)}
          lenderCount={18}
          attributeCount={12}
        />
        
        <FilterBar 
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={resetFilters}
        />
        
        <section id="leaderboard" className="leaderboard-section">
          <div className="container">
            <Leaderboard 
              filters={filters}
              onOpenQuiz={() => setIsQuizOpen(true)}
            />
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <p>
            <span className="footer-icon">₿</span>
            BTC Loan Leaderboard — Not financial advice. Always DYOR.
          </p>
          <p className="footer-disclaimer">
            Data is for informational purposes only. Verify terms directly with lenders before borrowing.
          </p>
        </div>
      </footer>
      
      <AnimatePresence>
        {isQuizOpen && (
          <QuizModal 
            isOpen={isQuizOpen}
            onClose={() => setIsQuizOpen(false)}
            onComplete={handleQuizComplete}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
