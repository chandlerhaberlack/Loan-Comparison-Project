import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
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
  const [initialSortKey, setInitialSortKey] = useState('compositeScore');
  
  const resetFilters = () => {
    setFilters({
      custody: 'all',
      kyc: 'all',
      usAvailable: 'all'
    });
    setInitialSortKey('compositeScore');
  };
  
  const handleQuizComplete = (result) => {
    // Apply filters from quiz
    setFilters(prev => ({
      ...prev,
      ...result.filters
    }));
    
    // Apply sort key from quiz
    if (result.sortKey) {
      setInitialSortKey(result.sortKey);
    }
    
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
          lenderCount={13}
          attributeCount={15}
        />
        
        <section id="about" className="about-section">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <h2>About This Leaderboard</h2>
                <p>
                  Built by <a href="https://tahoebtcstrategy.com" target="_blank" rel="noopener noreferrer">Tahoe BTC Strategy</a> to help 
                  Bitcoiners access liquidity without selling. We believe in transparency and empowering the community 
                  with accurate, unbiased data on Bitcoin-backed lending options.
                </p>
                <p className="about-disclaimer">
                  This leaderboard is updated regularly to reflect current rates and terms. Always verify directly 
                  with lenders before borrowing. Not financial advice.
                </p>
              </div>
              <a 
                href="https://tahoebtcstrategy.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="about-logo-link"
              >
                <img src="/logo-on-black.svg" alt="Tahoe BTC Strategy" className="about-logo" />
              </a>
            </div>
          </div>
        </section>
        
        <section id="leaderboard" className="leaderboard-section">
          <div className="container">
            <Leaderboard 
              filters={filters}
              initialSortKey={initialSortKey}
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
          <div className="footer-branding">
            <a 
              href="https://tahoebtcstrategy.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="tahoe-link"
            >
              <img 
                src="/logo-on-black.svg" 
                alt="Tahoe BTC Strategy" 
                className="tahoe-logo"
              />
              <span>Powered by Tahoe BTC Strategy</span>
            </a>
          </div>
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
