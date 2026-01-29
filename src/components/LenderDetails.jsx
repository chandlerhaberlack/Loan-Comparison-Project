import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { custodyTypes, COMMUNITY_TIER_LABELS } from '../data/lenders';
import './LenderDetails.css';

export default function LenderDetails({ lender, onClose }) {
  if (!lender) return null;
  
  const custody = custodyTypes[lender.custodyType];
  
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);
  
  // Format AUM/Volume for display
  const formatAum = (value) => {
    if (!value) return null;
    if (value >= 1000000000) return `$${(value / 1000000000).toFixed(0)}B`;
    if (value >= 1000000) return `$${(value / 1000000).toFixed(0)}M`;
    return `$${(value / 1000).toFixed(0)}K`;
  };
  
  return (
    <motion.div
      className="lender-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="lender-modal"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="header-left">
            <span className="details-logo">{lender.logo}</span>
            <div>
              <h3>{lender.name}</h3>
              <p className="tagline">{lender.tagline}</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        
        <div className="modal-body">
          <p className="description">{lender.description}</p>
          
          <div className="quick-stats">
            <div className="stat">
              <span className="stat-value mono">{lender.interestRateMin}%</span>
              <span className="stat-label">Min Rate</span>
            </div>
            <div className="stat">
              <span className="stat-value mono">{lender.ltvMax}%</span>
              <span className="stat-label">Max LTV</span>
            </div>
            {lender.yearFounded && (
              <div className="stat">
                <span className="stat-value mono">{lender.yearFounded}</span>
                <span className="stat-label">Founded</span>
              </div>
            )}
            {lender.aumOrVolume && (
              <div className="stat">
                <span className="stat-value mono">{formatAum(lender.aumOrVolume)}</span>
                <span className="stat-label">AUM/Volume</span>
              </div>
            )}
          </div>
          
          <div className="details-grid">
            <div className="detail-section">
              <h4>Loan Terms</h4>
              <dl>
                <div className="detail-row">
                  <dt>Loan Range</dt>
                  <dd className="mono">
                    ${lender.loanMin.toLocaleString()} – ${(lender.loanMax / 1000000).toFixed(1)}M
                  </dd>
                </div>
                <div className="detail-row">
                  <dt>LTV Range</dt>
                  <dd className="mono">{lender.ltvMin}% – {lender.ltvMax}%</dd>
                </div>
                <div className="detail-row">
                  <dt>Interest Rate</dt>
                  <dd className="mono">{lender.interestRateMin}% – {lender.interestRateMax}% APR</dd>
                </div>
                <div className="detail-row">
                  <dt>Loan Durations</dt>
                  <dd>{lender.loanDurations.join(', ')}</dd>
                </div>
                <div className="detail-row">
                  <dt>Liquidation</dt>
                  <dd className="mono">{lender.liquidationThreshold}% LTV</dd>
                </div>
              </dl>
            </div>
            
            <div className="detail-section">
              <h4>Features</h4>
              <dl>
                <div className="detail-row">
                  <dt>Custody</dt>
                  <dd className={`custody-value ${lender.custodyType}`}>
                    <span>{custody?.icon}</span> {custody?.label}
                  </dd>
                </div>
                <div className="detail-row">
                  <dt>Bitcoin</dt>
                  <dd className={lender.bitcoinHandling === 'native' ? 'highlight' : ''}>
                    {lender.bitcoinHandling === 'native' ? '₿ Native' : '🔗 Wrapped'}
                  </dd>
                </div>
                <div className="detail-row">
                  <dt>KYC</dt>
                  <dd className={!lender.kycRequired ? 'highlight' : ''}>
                    {lender.kycRequired ? `Yes (${lender.kycLevel})` : '✓ None'}
                  </dd>
                </div>
                <div className="detail-row">
                  <dt>Proof of Reserves</dt>
                  <dd className={lender.hasProofOfReserves ? 'highlight' : ''}>
                    {lender.hasProofOfReserves ? '✓ Audited' : 'No'}
                  </dd>
                </div>
                <div className="detail-row">
                  <dt>US Available</dt>
                  <dd className={lender.usAvailable ? 'highlight' : ''}>
                    {lender.usAvailable ? '🇺🇸 Yes' : 'No'}
                  </dd>
                </div>
                <div className="detail-row">
                  <dt>Community</dt>
                  <dd className={lender.communityRating === 'excellent' || lender.communityRating === 'good' ? 'highlight' : ''}>
                    {lender.communityRating && COMMUNITY_TIER_LABELS[lender.communityRating]
                      ? COMMUNITY_TIER_LABELS[lender.communityRating]
                      : 'N/A'}
                  </dd>
                </div>
              </dl>
            </div>
            
            <div className="detail-section pros-section">
              <h4>Pros</h4>
              <ul className="pros-list">
                {lender.pros.map((pro, i) => (
                  <li key={i}><span className="icon">+</span> {pro}</li>
                ))}
              </ul>
            </div>
            
            <div className="detail-section cons-section">
              <h4>Cons</h4>
              <ul className="cons-list">
                {lender.cons.map((con, i) => (
                  <li key={i}><span className="icon">−</span> {con}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="modal-footer">
          <a 
            href={lender.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="visit-btn"
          >
            Visit {lender.name}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
