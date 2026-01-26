import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero({ onOpenQuiz, lenderCount = 18, attributeCount = 12 }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Bitcoin-Backed Loan <span className="text-gradient">Leaderboard</span>
        </motion.h1>
        
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="stat">{lenderCount} lenders</span>
          <span className="divider">•</span>
          <span className="stat">{attributeCount} attributes</span>
          <span className="divider">•</span>
          <span className="stat">Click any column to sort</span>
        </motion.p>
        
        <motion.button
          className="quiz-link"
          onClick={onOpenQuiz}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="quiz-icon">?</span>
          Not sure what you need? Take the 60-second quiz
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}

