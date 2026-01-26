import { motion } from 'framer-motion';
import { custodyTypes } from '../data/lenders';
import './LenderDetails.css';

export default function LenderDetails({ lender, onClose }) {
  if (!lender) return null;
  
  const custody = custodyTypes[lender.custodyType];
  
  return (
    <motion.div
      className="lender-details"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="details-content">
        <div className="details-header">
          <div className="header-left">
            <span className="details-logo">{lender.logo}</span>
            <div>
              <h3>{lender.name}</h3>
              <p className="tagline">{lender.tagline}</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <p className="description">{lender.description}</p>
        
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
                <dt>Liquidation Threshold</dt>
                <dd className="mono">{lender.liquidationThreshold}% LTV</dd>
              </div>
            </dl>
          </div>
          
          <div className="detail-section">
            <h4>Features</h4>
            <dl>
              <div className="detail-row">
                <dt>Custody Model</dt>
                <dd className={`custody-value ${lender.custodyType}`}>
                  <span>{custody?.icon}</span> {custody?.label}
                </dd>
              </div>
              <div className="detail-row">
                <dt>Bitcoin Handling</dt>
                <dd className={lender.bitcoinHandling === 'native' ? 'highlight' : ''}>
                  {lender.bitcoinHandling === 'native' ? '₿ Native Bitcoin' : '🔗 Wrapped'}
                </dd>
              </div>
              <div className="detail-row">
                <dt>KYC Required</dt>
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
                <dt>Early Repayment</dt>
                <dd className={lender.earlyRepayment && !lender.earlyRepaymentFee ? 'highlight' : ''}>
                  {lender.earlyRepayment 
                    ? (lender.earlyRepaymentFee ? '⚠ With Fee' : '✓ No Fee') 
                    : 'Not Allowed'}
                </dd>
              </div>
              <div className="detail-row">
                <dt>US Available</dt>
                <dd className={lender.usAvailable ? 'highlight' : ''}>
                  {lender.usAvailable ? '🇺🇸 Yes' : 'No'}
                </dd>
              </div>
              <div className="detail-row">
                <dt>Community Rating</dt>
                <dd className={lender.communityRating >= 70 ? 'highlight' : ''}>
                  {lender.communityRating || 'N/A'}/100
                  <span className="rating-note"> (X sentiment)</span>
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
        
        <div className="details-actions">
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
      </div>
    </motion.div>
  );
}

