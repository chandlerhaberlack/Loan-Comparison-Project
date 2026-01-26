import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './QuizModal.css';

const questions = [
  {
    id: 'custody',
    question: 'How important is controlling your own keys?',
    options: [
      { value: 'non-custodial', label: 'Critical', sublabel: 'I want non-custodial only', icon: '🔐' },
      { value: 'collaborative', label: 'Important', sublabel: 'Collaborative custody is fine', icon: '🤝' },
      { value: 'custodial', label: 'Not a priority', sublabel: 'Convenience matters more', icon: '🏦' },
    ]
  },
  {
    id: 'priority',
    question: "What's your top priority?",
    options: [
      { value: 'interestRateMin', label: 'Lowest Rates', sublabel: 'Minimize borrowing costs', icon: '📉' },
      { value: 'ltvMax', label: 'Highest LTV', sublabel: 'Borrow more against my BTC', icon: '📊' },
      { value: 'loanMin', label: 'Low Minimums', sublabel: 'I want a smaller loan', icon: '💰' },
      { value: 'kycRequired', label: 'No KYC', sublabel: 'Privacy is essential', icon: '👤' },
    ]
  },
  {
    id: 'region',
    question: 'Where are you located?',
    options: [
      { value: 'us', label: 'United States', sublabel: 'Need US-available lenders', icon: '🇺🇸' },
      { value: 'global', label: 'Outside US', sublabel: 'More options available', icon: '🌍' },
      { value: 'any', label: 'Show all', sublabel: "I'll figure out availability", icon: '🌐' },
    ]
  }
];

export default function QuizModal({ isOpen, onClose, onComplete }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  
  if (!isOpen) return null;
  
  const currentQuestion = questions[step];
  const isLastStep = step === questions.length - 1;
  
  const handleSelect = (value) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);
    
    if (isLastStep) {
      // Complete quiz - determine sort column and filters
      const result = {
        sortKey: newAnswers.priority || 'compositeScore',
        filters: {}
      };
      
      if (newAnswers.custody && newAnswers.custody !== 'custodial') {
        result.filters.custody = newAnswers.custody;
      }
      
      if (newAnswers.region === 'us') {
        result.filters.usAvailable = 'yes';
      }
      
      if (newAnswers.priority === 'kycRequired') {
        result.filters.kyc = 'none';
        result.sortKey = 'compositeScore'; // Reset sort since KYC is a filter
      }
      
      onComplete(result);
      resetQuiz();
    } else {
      setStep(step + 1);
    }
  };
  
  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  
  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
  };
  
  const handleClose = () => {
    resetQuiz();
    onClose();
  };
  
  return (
    <motion.div 
      className="quiz-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
    >
      <motion.div 
        className="quiz-modal"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="quiz-header">
          <div className="progress-dots">
            {questions.map((_, i) => (
              <span 
                key={i} 
                className={`dot ${i === step ? 'active' : ''} ${i < step ? 'completed' : ''}`}
              />
            ))}
          </div>
          <button className="close-btn" onClick={handleClose}>×</button>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            className="quiz-content"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <h2>{currentQuestion.question}</h2>
            
            <div className="options">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  className={`option-btn ${answers[currentQuestion.id] === option.value ? 'selected' : ''}`}
                  onClick={() => handleSelect(option.value)}
                >
                  <span className="option-icon">{option.icon}</span>
                  <div className="option-text">
                    <span className="option-label">{option.label}</span>
                    <span className="option-sublabel">{option.sublabel}</span>
                  </div>
                  <span className="option-arrow">→</span>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="quiz-footer">
          {step > 0 && (
            <button className="back-btn" onClick={handleBack}>
              ← Back
            </button>
          )}
          <span className="step-indicator">
            Question {step + 1} of {questions.length}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

