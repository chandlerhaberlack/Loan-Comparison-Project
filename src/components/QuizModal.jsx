import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './QuizModal.css';

const questions = [
  {
    id: 'custody',
    question: 'How important is controlling your own keys?',
    multiSelect: false,
    options: [
      { 
        value: 'non-custodial', 
        label: 'Critical - Non-Custodial Only', 
        sublabel: 'Your keys, your Bitcoin. No third party ever holds your coins, eliminating counterparty risk entirely.', 
        icon: '🔐' 
      },
      { 
        value: 'collaborative', 
        label: 'Important - Collaborative Custody', 
        sublabel: 'Multi-sig setup where you hold most keys. Balances security with professional backup options.', 
        icon: '🤝' 
      },
      { 
        value: 'custodial', 
        label: 'Flexible - Custodial is Fine', 
        sublabel: 'Convenience matters most. You trust the platform to secure your Bitcoin during the loan.', 
        icon: '🏦' 
      },
    ]
  },
  {
    id: 'trustLevel',
    question: 'Would you consider custodial solutions from high-trust institutions?',
    multiSelect: false,
    options: [
      { 
        value: 'high-trust-only', 
        label: 'Yes - Institutional Trust Matters', 
        sublabel: 'I prefer regulated institutions with proven track records, audits, and strong reputations (e.g., Swiss banks, public companies).', 
        icon: '🏛️' 
      },
      { 
        value: 'no-custodial', 
        label: 'No - Self-Custody Only', 
        sublabel: 'No matter the institution, I only want solutions where I maintain full control of my keys at all times.', 
        icon: '🔒' 
      },
      { 
        value: 'flexible', 
        label: 'Flexible - Case by Case', 
        sublabel: "I'm open to evaluating each platform individually based on their specific security measures and reputation.", 
        icon: '⚖️' 
      },
    ]
  },
  {
    id: 'ltvPreference',
    question: 'What loan-to-value (LTV) ratio are you looking for?',
    multiSelect: true,
    multiSelectHint: 'Select all that apply',
    options: [
      { 
        value: 'high', 
        label: 'High LTV (60%+)', 
        sublabel: 'Maximize borrowing power against your Bitcoin. Higher risk of liquidation if BTC price drops significantly.', 
        icon: '📈' 
      },
      { 
        value: 'medium', 
        label: 'Medium LTV (40-60%)', 
        sublabel: 'Balanced approach between borrowing capacity and safety margin. Good buffer for normal market volatility.', 
        icon: '⚖️' 
      },
      { 
        value: 'low', 
        label: 'Low LTV (Under 40%)', 
        sublabel: 'Conservative and safe. Large buffer protects against liquidation even in major market downturns.', 
        icon: '🛡️' 
      },
    ]
  },
  {
    id: 'priority',
    question: "What's most important to you?",
    multiSelect: true,
    multiSelectHint: 'Select all that apply',
    options: [
      { 
        value: 'interestRateMin', 
        label: 'Lowest Interest Rates', 
        sublabel: 'Minimize your borrowing costs over the loan term. Lower rates mean less Bitcoin value needed to service the loan.', 
        icon: '📉' 
      },
      { 
        value: 'loanMin', 
        label: 'Low Minimum Loan', 
        sublabel: 'Access liquidity with smaller amounts of Bitcoin. Ideal for testing platforms or smaller capital needs.', 
        icon: '💰' 
      },
      { 
        value: 'kycRequired', 
        label: 'No KYC Required', 
        sublabel: 'Privacy is essential. Avoid identity verification and keep your financial activity private.', 
        icon: '👤' 
      },
      { 
        value: 'proofOfReserves', 
        label: 'Proof of Reserves', 
        sublabel: 'Transparency matters. Only consider platforms that publicly audit and prove they hold customer assets.', 
        icon: '✅' 
      },
    ]
  },
  {
    id: 'region',
    question: 'Where are you located?',
    multiSelect: false,
    options: [
      { 
        value: 'us', 
        label: 'United States', 
        sublabel: 'US regulations limit options. We will filter for lenders that are licensed and available to US residents.', 
        icon: '🇺🇸' 
      },
      { 
        value: 'global', 
        label: 'Outside the US', 
        sublabel: 'More lending options available globally. Access platforms not restricted by US regulatory requirements.', 
        icon: '🌍' 
      },
      { 
        value: 'any', 
        label: 'Show All Options', 
        sublabel: "Display every lender regardless of availability. You will verify regional access yourself before applying.", 
        icon: '🌐' 
      },
    ]
  }
];

export default function QuizModal({ isOpen, onClose, onComplete }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  
  if (!isOpen) return null;
  
  const currentQuestion = questions[step];
  const isLastStep = step === questions.length - 1;
  const isMultiSelect = currentQuestion.multiSelect;
  
  // Get current selection(s) for this question
  const currentAnswer = answers[currentQuestion.id];
  
  // Toggle selection for multi-select questions
  const toggleSelection = (value) => {
    if (isMultiSelect) {
      const current = Array.isArray(currentAnswer) ? currentAnswer : [];
      const newSelections = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      setAnswers({ ...answers, [currentQuestion.id]: newSelections });
    } else {
      // Single select - immediately advance
      handleSelect(value);
    }
  };
  
  // Check if an option is selected
  const isSelected = (value) => {
    if (isMultiSelect) {
      return Array.isArray(currentAnswer) && currentAnswer.includes(value);
    }
    return currentAnswer === value;
  };
  
  // Process answers and complete quiz
  const processResults = (finalAnswers) => {
    const result = {
      sortKey: 'compositeScore',
      filters: {}
    };
    
    // Custody preference filter
    if (finalAnswers.custody && finalAnswers.custody !== 'custodial') {
      result.filters.custody = finalAnswers.custody;
    }
    
    // Trust level preference - high trust institutions
    if (finalAnswers.trustLevel === 'high-trust-only') {
      result.filters.highTrust = true;
    } else if (finalAnswers.trustLevel === 'no-custodial') {
      // Override to non-custodial only regardless of custody answer
      result.filters.custody = 'non-custodial';
    }
    
    // LTV preference - handle multi-select
    const ltvPrefs = Array.isArray(finalAnswers.ltvPreference) 
      ? finalAnswers.ltvPreference 
      : finalAnswers.ltvPreference ? [finalAnswers.ltvPreference] : [];
    
    if (ltvPrefs.length > 0) {
      // Determine LTV range based on selections
      let minLtv = 0;
      let maxLtv = 100;
      
      if (ltvPrefs.includes('high') && !ltvPrefs.includes('medium') && !ltvPrefs.includes('low')) {
        minLtv = 60;
        result.sortKey = 'ltvMax';
      } else if (ltvPrefs.includes('low') && !ltvPrefs.includes('medium') && !ltvPrefs.includes('high')) {
        maxLtv = 50;
      } else if (ltvPrefs.includes('medium') && !ltvPrefs.includes('high') && !ltvPrefs.includes('low')) {
        result.filters.ltvRange = { min: 40, max: 70 };
      }
      // If multiple selected, use widest range that covers selections
      else if (ltvPrefs.length > 1) {
        if (ltvPrefs.includes('low')) minLtv = 0;
        if (ltvPrefs.includes('high')) maxLtv = 100;
      }
      
      if (minLtv > 0) result.filters.ltvMin = minLtv;
      if (maxLtv < 100 && !result.filters.ltvRange) result.filters.ltvMax = maxLtv;
    }
    
    // Region filter
    if (finalAnswers.region === 'us') {
      result.filters.usAvailable = 'yes';
    }
    
    // Priority-based filters and sorting - handle multi-select
    const priorities = Array.isArray(finalAnswers.priority) 
      ? finalAnswers.priority 
      : finalAnswers.priority ? [finalAnswers.priority] : [];
    
    if (priorities.includes('kycRequired')) {
      result.filters.kyc = 'none';
    }
    if (priorities.includes('proofOfReserves')) {
      result.filters.proofOfReserves = true;
    }
    if (priorities.includes('interestRateMin') && !priorities.includes('kycRequired')) {
      result.sortKey = 'interestRateMin';
    }
    if (priorities.includes('loanMin') && result.sortKey === 'compositeScore') {
      result.sortKey = 'loanMin';
    }
    
    return result;
  };
  
  const handleSelect = (value) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);
    
    if (isLastStep) {
      onComplete(processResults(newAnswers));
      resetQuiz();
    } else {
      setStep(step + 1);
    }
  };
  
  // Continue button for multi-select questions
  const handleContinue = () => {
    if (isLastStep) {
      onComplete(processResults(answers));
      resetQuiz();
    } else {
      setStep(step + 1);
    }
  };
  
  // Skip current question
  const handleSkip = () => {
    if (isLastStep) {
      onComplete(processResults(answers));
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
            {isMultiSelect && currentQuestion.multiSelectHint && (
              <p className="multi-select-hint">{currentQuestion.multiSelectHint}</p>
            )}
            
            <div className="options">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  className={`option-btn ${isSelected(option.value) ? 'selected' : ''} ${isMultiSelect ? 'multi-select' : ''}`}
                  onClick={() => toggleSelection(option.value)}
                >
                  {isMultiSelect && (
                    <span className={`checkbox ${isSelected(option.value) ? 'checked' : ''}`}>
                      {isSelected(option.value) ? '✓' : ''}
                    </span>
                  )}
                  <span className="option-icon">{option.icon}</span>
                  <div className="option-text">
                    <span className="option-label">{option.label}</span>
                    <span className="option-sublabel">{option.sublabel}</span>
                  </div>
                  {!isMultiSelect && <span className="option-arrow">→</span>}
                </button>
              ))}
            </div>
            
            {isMultiSelect && (
              <div className="multi-select-actions">
                <button 
                  className="continue-btn"
                  onClick={handleContinue}
                >
                  {isLastStep ? 'See Results' : 'Continue'} →
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        
        <div className="quiz-footer">
          <div className="footer-left">
            {step > 0 && (
              <button className="back-btn" onClick={handleBack}>
                ← Back
              </button>
            )}
          </div>
          <span className="step-indicator">
            Question {step + 1} of {questions.length}
          </span>
          <div className="footer-right">
            <button className="skip-btn" onClick={handleSkip}>
              Skip →
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

