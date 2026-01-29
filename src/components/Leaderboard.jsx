import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getLendersWithScores, attributeConfig, getAttributeRanks, custodyTypes } from '../data/lenders';
import RankBadge from './RankBadge';
import ScoreBadge from './ScoreBadge';
import AttributeCell from './AttributeCell';
import LenderDetails from './LenderDetails';
import ColumnFilter from './ColumnFilter';
import './Leaderboard.css';

// Filter options for specific columns
const columnFilterOptions = {
  custodyType: [
    { value: 'all', label: 'All Types' },
    { value: 'non-custodial', label: 'Non-Custodial' },
    { value: 'collaborative', label: 'Collaborative' },
    { value: 'custodial', label: 'Custodial' },
  ],
  usAvailable: [
    { value: 'all', label: 'All Regions' },
    { value: 'yes', label: 'US Available' },
    { value: 'no', label: 'Non-US Only' },
  ],
  bitcoinHandling: [
    { value: 'all', label: 'All Types' },
    { value: 'native', label: 'Native BTC' },
    { value: 'wrapped', label: 'Wrapped BTC' },
  ],
  termFlexibility: [
    { value: 'all', label: 'All' },
    { value: 'open', label: 'Open-ended' },
    { value: 'renewable', label: 'Renewable' },
    { value: 'fixed', label: 'Fixed' },
  ],
  largeLoanEase: [
    { value: 'all', label: 'All' },
    { value: 'excellent', label: 'Excellent' },
    { value: 'good', label: 'Good' },
    { value: 'fair', label: 'Fair' },
    { value: 'poor', label: 'Poor' },
    { value: 'na', label: 'N/A (<$1M)' },
  ],
};

// Primary columns (always visible)
const primaryColumns = [
  { key: 'compositeScore' },
  { key: 'interestRateMin' },
  { key: 'ltvMax' },
  { key: 'custodyType' },
];

// Secondary columns (shown when expanded)
const secondaryColumns = [
  { key: 'termFlexibility' },
  { key: 'largeLoanEase' },
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
  
  // Local column filters (separate from prop filters)
  const [columnFilters, setColumnFilters] = useState({
    custodyType: 'all',
    usAvailable: 'all',
    bitcoinHandling: 'all',
    termFlexibility: 'all',
    largeLoanEase: 'all',
  });
  
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
  
  // Handle column filter change
  const handleColumnFilterChange = (column, value) => {
    setColumnFilters(prev => ({ ...prev, [column]: value }));
  };
  
  // Apply filters
  const filteredLenders = useMemo(() => {
    let result = [...allLenders];
    
    // Custody type filter (from props)
    if (filters.custody && filters.custody !== 'all') {
      result = result.filter(l => l.custodyType === filters.custody);
    }
    
    // Column-level custody filter
    if (columnFilters.custodyType !== 'all') {
      result = result.filter(l => l.custodyType === columnFilters.custodyType);
    }
    
    // KYC filter
    if (filters.kyc === 'none') {
      result = result.filter(l => !l.kycRequired);
    } else if (filters.kyc === 'required') {
      result = result.filter(l => l.kycRequired);
    }
    
    // US availability filter (from props)
    if (filters.usAvailable === 'yes') {
      result = result.filter(l => l.usAvailable);
    } else if (filters.usAvailable === 'no') {
      result = result.filter(l => !l.usAvailable);
    }
    
    // Column-level US availability filter
    if (columnFilters.usAvailable === 'yes') {
      result = result.filter(l => l.usAvailable);
    } else if (columnFilters.usAvailable === 'no') {
      result = result.filter(l => !l.usAvailable);
    }
    
    // Column-level Bitcoin handling filter
    if (columnFilters.bitcoinHandling !== 'all') {
      result = result.filter(l => l.bitcoinHandling === columnFilters.bitcoinHandling);
    }
    
    // Column-level term flexibility filter
    if (columnFilters.termFlexibility !== 'all') {
      result = result.filter(l => l.termFlexibility === columnFilters.termFlexibility);
    }
    
    // Column-level large loan ease filter
    if (columnFilters.largeLoanEase !== 'all') {
      result = result.filter(l => l.largeLoanEase === columnFilters.largeLoanEase);
    }
    
    // High trust institutions filter (community rating >= 75)
    if (filters.highTrust) {
      result = result.filter(l => l.communityRating === 'excellent' || l.communityRating === 'good');
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
  }, [allLenders, filters, columnFilters]);
  
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
      
      // Handle special sorting for term flexibility
      if (sortKey === 'termFlexibility') {
        const order = { open: 1, renewable: 2, fixed: 3 };
        aVal = order[aVal] || 4;
        bVal = order[bVal] || 4;
      }
      
      // Handle special sorting for large loan ease
      if (sortKey === 'largeLoanEase') {
        const order = { excellent: 1, good: 2, fair: 3, poor: 4, na: 5 };
        aVal = order[aVal] || 6;
        bVal = order[bVal] || 6;
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
                const hasFilter = columnFilterOptions[col.key];
                return (
                  <th 
                    key={col.key}
                    className={`col-${col.key} sortable ${isActive ? 'active' : ''} ${!isPrimary ? 'secondary-col' : ''}`}
                    title={config?.description ? `${config.description} — Click to sort.` : 'Click to sort.'}
                  >
                    <div className="th-content">
                      <span 
                        className="th-label-wrapper"
                        onClick={() => handleSort(col.key)}
                      >
                        <span className="th-label">{config?.label || col.key}</span>
                        <span className="sort-indicator">
                          {isActive ? (sortAsc ? '↑' : '↓') : '↕'}
                        </span>
                      </span>
                      {hasFilter && (
                        <ColumnFilter
                          options={columnFilterOptions[col.key]}
                          value={columnFilters[col.key]}
                          onChange={(value) => handleColumnFilterChange(col.key, value)}
                          label={config?.label || col.key}
                        />
                      )}
                    </div>
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
