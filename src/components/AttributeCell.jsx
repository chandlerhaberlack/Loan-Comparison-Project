import { custodyTypes } from '../data/lenders';
import './AttributeCell.css';

export default function AttributeCell({ type, value, lender, rank, totalCount = 18, className = '' }) {
  // Determine if this is a top performer for this attribute
  const isTop = rank <= 2;
  const isGood = rank <= 4;
  
  const renderContent = () => {
    switch (type) {
      case 'interestRateMin':
        return (
          <div className={`cell-content rate ${isTop ? 'top' : isGood ? 'good' : ''}`}>
            <span className="value mono">{value}%</span>
            {isTop && <span className="best-indicator">Low</span>}
          </div>
        );
      
      case 'ltvMax':
        return (
          <div className={`cell-content ltv ${isTop ? 'top' : isGood ? 'good' : ''}`}>
            <div className="bar-container">
              <div className="bar-fill" style={{ width: `${value}%` }} />
            </div>
            <span className="value mono">{value}%</span>
          </div>
        );
      
      case 'loanMin':
        return (
          <div className={`cell-content loan ${isTop ? 'top' : ''}`}>
            <span className="value mono">
              {value >= 1000 ? `$${(value/1000).toFixed(0)}k` : `$${value}`}
            </span>
          </div>
        );
      
      case 'loanMax':
        return (
          <div className={`cell-content loan`}>
            <span className="value mono">${(value/1000000).toFixed(1)}M</span>
          </div>
        );
      
      case 'custodyType':
        const custody = custodyTypes[value];
        return (
          <div className={`cell-content custody ${value}`}>
            <span className="custody-icon">{custody?.icon}</span>
            <span className="custody-label">{custody?.label}</span>
          </div>
        );
      
      case 'kycRequired':
        return (
          <div className={`cell-content kyc ${!value ? 'no-kyc' : ''}`}>
            {value ? (
              <>
                <span className="icon warning">⚠</span>
                <span className="label">Required</span>
              </>
            ) : (
              <>
                <span className="icon success">✓</span>
                <span className="label">None</span>
              </>
            )}
          </div>
        );
      
      case 'hasProofOfReserves':
        return (
          <div className={`cell-content por ${value ? 'has-por' : ''}`}>
            {value ? (
              <>
                <span className="icon success">✓</span>
                <span className="label">Audited</span>
              </>
            ) : (
              <span className="label muted">—</span>
            )}
          </div>
        );
      
      case 'bitcoinHandling':
        return (
          <div className={`cell-content btc ${value === 'native' ? 'native' : ''}`}>
            {value === 'native' ? (
              <>
                <span className="btc-icon">₿</span>
                <span className="label">Native</span>
              </>
            ) : (
              <>
                <span className="icon muted">🔗</span>
                <span className="label muted">Wrapped</span>
              </>
            )}
          </div>
        );
      
      case 'usAvailable':
        return (
          <div className={`cell-content us ${value ? 'available' : ''}`}>
            {value ? (
              <>
                <span className="flag">🇺🇸</span>
                <span className="label">Yes</span>
              </>
            ) : (
              <span className="label muted">—</span>
            )}
          </div>
        );
      
      case 'earlyRepayment':
        const hasFee = lender?.earlyRepaymentFee;
        return (
          <div className={`cell-content early ${value && !hasFee ? 'free' : ''}`}>
            {!value ? (
              <span className="label muted">No</span>
            ) : hasFee ? (
              <>
                <span className="icon warning">⚠</span>
                <span className="label">Fee</span>
              </>
            ) : (
              <>
                <span className="icon success">✓</span>
                <span className="label">Free</span>
              </>
            )}
          </div>
        );
      
      case 'liquidationThreshold':
        return (
          <div className="cell-content liquidation">
            {value ? (
              <span className="value mono">{value}%</span>
            ) : (
              <span className="label muted">N/A</span>
            )}
          </div>
        );
      
      case 'communityRating':
        const rating = value || 0;
        const ratingClass = rating >= 80 ? 'excellent' : rating >= 70 ? 'good' : rating >= 50 ? 'fair' : 'poor';
        return (
          <div className={`cell-content community ${ratingClass} ${isTop ? 'top' : isGood ? 'good' : ''}`}>
            <div className="rating-bar-container">
              <div className="rating-bar-fill" style={{ width: `${rating}%` }} />
            </div>
            <span className="value mono">{rating}</span>
          </div>
        );
      
      case 'yearFounded':
        const currentYear = new Date().getFullYear();
        const yearsOld = value ? currentYear - value : null;
        const experienceClass = yearsOld >= 8 ? 'veteran' : yearsOld >= 4 ? 'established' : 'newer';
        return (
          <div className={`cell-content year-founded ${experienceClass}`}>
            <span className="value mono">{value || 'N/A'}</span>
            {yearsOld !== null && <span className="years-label">{yearsOld}yr</span>}
          </div>
        );
      
      case 'aumOrVolume':
        const formatAum = (v) => {
          if (!v) return null;
          if (v >= 1000000000) return `$${(v / 1000000000).toFixed(0)}B`;
          if (v >= 1000000) return `$${(v / 1000000).toFixed(0)}M`;
          return `$${(v / 1000).toFixed(0)}K`;
        };
        const formattedAum = formatAum(value);
        const sizeClass = value >= 10000000000 ? 'massive' : value >= 1000000000 ? 'large' : value >= 100000000 ? 'medium' : 'small';
        return (
          <div className={`cell-content aum ${value ? sizeClass : ''}`}>
            {formattedAum ? (
              <span className="value mono">{formattedAum}</span>
            ) : (
              <span className="label muted">N/A</span>
            )}
          </div>
        );
      
      default:
        return <span className="value">{String(value)}</span>;
    }
  };
  
  return (
    <td className={`attribute-cell ${type} ${className}`}>
      {renderContent()}
    </td>
  );
}

