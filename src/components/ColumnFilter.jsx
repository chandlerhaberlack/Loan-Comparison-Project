import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ColumnFilter.css';

export default function ColumnFilter({ options, value, onChange, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const handleToggle = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  
  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };
  
  const hasActiveFilter = value !== 'all';
  const selectedOption = options.find(opt => opt.value === value);
  
  return (
    <div className="column-filter" ref={dropdownRef}>
      <button 
        className={`filter-trigger ${hasActiveFilter ? 'active' : ''}`}
        onClick={handleToggle}
        title={`Filter by ${label}`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="filter-dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            <div className="filter-dropdown-header">
              Filter: {label}
            </div>
            <div className="filter-options">
              {options.map(option => (
                <button
                  key={option.value}
                  className={`filter-option ${value === option.value ? 'selected' : ''}`}
                  onClick={() => handleSelect(option.value)}
                >
                  <span className="option-check">
                    {value === option.value && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </span>
                  <span className="option-label">{option.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
