import './ScoreBadge.css';

export default function ScoreBadge({ score, size = 'md' }) {
  // Safety check for NaN or undefined
  const safeScore = (score === undefined || score === null || isNaN(score)) ? 0 : score;
  
  const getScoreClass = () => {
    if (safeScore >= 75) return 'excellent';
    if (safeScore >= 60) return 'good';
    if (safeScore >= 45) return 'average';
    return 'below';
  };
  
  const scoreClass = getScoreClass();
  
  return (
    <div className={`score-badge ${scoreClass} ${size}`}>
      <div className="score-bar">
        <div className="score-fill" style={{ width: `${safeScore}%` }} />
      </div>
      <span className="score-value">{safeScore}</span>
    </div>
  );
}

