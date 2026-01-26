import { motion } from 'framer-motion';
import './Header.css';

export default function Header({ onOpenQuiz }) {
  return (
    <motion.header 
      className="header"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="header-content">
        <a href="/" className="logo">
          <span className="logo-icon">₿</span>
          <span className="logo-text">BTC Loan Leaderboard</span>
        </a>
        
        <nav className="nav">
          <a href="#leaderboard" className="nav-link">Leaderboard</a>
          <a href="#about" className="nav-link">About</a>
        </nav>
        
        <button className="quiz-cta" onClick={onOpenQuiz}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          Take Quiz
        </button>
      </div>
    </motion.header>
  );
}
