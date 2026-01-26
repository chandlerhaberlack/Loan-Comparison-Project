import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getLendersWithScores, attributeConfig, getAttributeRanks, custodyTypes } from '../data/lenders';
import RankBadge from './RankBadge';
import ScoreBadge from './ScoreBadge';
import AttributeCell from './AttributeCell';
import LenderDetails from './LenderDetails';
import './Leaderboard.css';

// Primary columns (always visible)
const primaryColumns = [
  { key: 'compositeScore' },
  { key: 'interestRateMin' },
  { key: 'ltvMax' },
  { key: 'custodyType' },
];

// Secondary columns (shown when expanded)
const secondaryColumns = [
  { key: 'yearFounded' },
  { key: 'aumOrVolume' },
  { key: 'loanMin' },
  { key: 'loanMax' },
  { key: 'kycRequired' },
  { key: 'hasProofOfReserves' },
  { key: 'bitcoinHandling' },
  { key: 'usAvailable' },
  { key: 'earlyRepayment' },
  { key: 'liquidationThreshold' },
  { key: 'communityRating' },
];

export default function Leaderboard({ filters = {}, initialSortKey = 'compositeScore', onOpenQuiz }) {
  const [sortKey, setSortKey] = useState(initialSortKey);
  const [sortAsc, setSortAsc] = useState(false);
  const [selectedLender, setSelectedLender] = useState(null);
  
  // Update sortKey when initialSortKey changes (from quiz)
  useEffect(() => {
    setSortKey(initialSortKey);
    // Set ascending/descending based on attribute config
    const config = attributeConfig[initialSortKey];
    setSortAsc(config?.sortAsc ?? false);
  }, [initialSortKey]);
  const [showAllColumns, setShowAllColumns] = useState(() => {
    // Check localStorage for saved preference
    if (typeof window !== 'undefined') {
      return localStorage.getItem('showAllColumns') === 'true';
    }
    return false;
  });
  
  // Save column preference to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('showAllColumns', showAllColumns.toString());
    }
  }, [showAllColumns]);
  
  const allLenders = useMemo(() => getLendersWithScores(), []);
  
  const columns = useMemo(() => {
    return showAllColumns ? [...primaryColumns, ...secondaryColumns] : primaryColumns;
  }, [showAllColumns]);
  
  // Apply filters
  const filteredLenders = useMemo(() => {
    let result = [...allLenders];
    
    // Custody type filter
    if (filters.custody && filters.custody !== 'all') {
      result = result.filter(l => l.custodyType === filters.custody);
    }
    
    // KYC filter
    if (filters.kyc === 'none') {
      result = result.filter(l => !l.kycRequired);
    } else if (filters.kyc === 'required') {
      result = result.filter(l => l.kycRequired);
    }
    
    // US availability filter
    if (filters.usAvailable === 'yes') {
      result = result.filter(l => l.usAvailable);
    } else if (filters.usAvailable === 'no') {
      result = result.filter(l => !l.usAvailable);
    }
    
    // High trust institutions filter (community rating >= 75)
    if (filters.highTrust) {
      result = result.filter(l => (l.communityRating || 0) >= 75);
    }
    
    // LTV filters
    if (filters.ltvMin) {
      result = result.filter(l => l.ltvMax >= filters.ltvMin);
    }
    if (filters.ltvMax) {
      result = result.filter(l => l.ltvMax <= filters.ltvMax);
    }
    if (filters.ltvRange) {
      result = result.filter(l => l.ltvMax >= filters.ltvRange.min && l.ltvMax <= filters.ltvRange.max);
    }
    
    // Proof of reserves filter
    if (filters.proofOfReserves) {
      result = result.filter(l => l.hasProofOfReserves);
    }
    
    return result;
  }, [allLenders, filters]);
  
  // Sort lenders
  const sortedLenders = useMemo(() => {
    const sorted = [...filteredLenders].sort((a, b) => {
      let aVal = a[sortKey];
      let bVal = b[sortKey];
      
      // Handle special sorting for custody type
      if (sortKey === 'custodyType') {
        const order = { 'non-custodial': 1, 'collaborative': 2, 'custodial': 3 };
        aVal = order[aVal] || 4;
        bVal = order[bVal] || 4;
      }
      
      // Handle booleans
      if (typeof aVal === 'boolean') {
        aVal = aVal ? 0 : 1;
        bVal = bVal ? 0 : 1;
      }
      
      if (sortAsc) {
        return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
      }
      return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
    });
    
    return sorted;
  }, [filteredLenders, sortKey, sortAsc]);
  
  // Get attribute ranks for highlighting
  const attributeRanks = useMemo(() => {
    const ranks = {};
    [...primaryColumns, ...secondaryColumns].forEach(col => {
      const config = attributeConfig[col.key];
      if (config) {
        ranks[col.key] = getAttributeRanks(col.key, config.sortAsc);
      }
    });
    return ranks;
  }, []);
  
  const handleSort = (key) => {
    const config = attributeConfig[key];
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(config?.sortAsc ?? false);
    }
  };
  
  const openLenderDetails = (lender) => {
    setSelectedLender(lender);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  const closeLenderDetails = () => {
    setSelectedLender(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="leaderboard">
      <div className="leaderboard-controls">
        <div className="lender-count">
          <span className="count">{sortedLenders.length}</span> lenders
        </div>
        <button 
          className={`expand-columns-btn ${showAllColumns ? 'expanded' : ''}`}
          onClick={() => setShowAllColumns(!showAllColumns)}
        >
          {showAllColumns ? (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="4 14 10 14 10 20" />
                <polyline points="20 10 14 10 14 4" />
                <line x1="14" y1="10" x2="21" y2="3" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
              Less Attributes
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
              More Attributes
            </>
          )}
        </button>
      </div>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="col-rank">Rank</th>
              <th className="col-lender">Lender</th>
              {columns.map(col => {
                const config = attributeConfig[col.key];
                const isActive = sortKey === col.key;
                const isPrimary = primaryColumns.some(c => c.key === col.key);
                return (
                  <th 
                    key={col.key}
                    className={`col-${col.key} sortable ${isActive ? 'active' : ''} ${!isPrimary ? 'secondary-col' : ''}`}
                    onClick={() => handleSort(col.key)}
                    title={config?.description ? `${config.description} — Click to sort.` : 'Click to sort.'}
                  >
                    <span className="th-label">{config?.label || col.key}</span>
                    <span className="sort-indicator">
                      {isActive ? (sortAsc ? '↑' : '↓') : '↕'}
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {sortedLenders.map((lender, index) => {
              const rank = index + 1;
              return (
                <motion.tr
                  key={lender.id}
                  className={`lender-row ${rank <= 3 ? 'top-three' : ''}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.02 }}
                  onClick={() => openLenderDetails(lender)}
                >
                  <td className="col-rank">
                    <RankBadge rank={rank} />
                  </td>
                  <td className="col-lender">
                    <div className="lender-info">
                      <span className="lender-logo">{lender.logo}</span>
                      <div className="lender-text">
                        <span className="lender-name">{lender.name}</span>
                        <span className="lender-tagline">{lender.tagline}</span>
                      </div>
                      <button
                        type="button"
                        className="expand-icon"
                        onClick={(e) => { e.stopPropagation(); openLenderDetails(lender); }}
                        aria-label="View details"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="col-score">
                    <ScoreBadge score={lender.compositeScore} />
                  </td>
                  {columns.slice(1).map(col => {
                    const isPrimary = primaryColumns.some(c => c.key === col.key);
                    return (
                      <AttributeCell
                        key={col.key}
                        type={col.key}
                        value={lender[col.key]}
                        lender={lender}
                        rank={attributeRanks[col.key]?.[lender.id] || 99}
                        totalCount={sortedLenders.length}
                        className={!isPrimary ? 'secondary-col' : ''}
                      />
                    );
                  })}
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {sortedLenders.length === 0 && (
        <div className="no-results">
          <p>No lenders match your filters.</p>
          <button onClick={() => window.location.reload()}>Reset Filters</button>
        </div>
      )}
      
      <AnimatePresence>
        {selectedLender && (
          <LenderDetails
            lender={selectedLender}
            onClose={closeLenderDetails}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
