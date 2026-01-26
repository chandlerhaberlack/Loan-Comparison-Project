import './ScoreBadge.css';

export default function ScoreBadge({ score, size = 'md' }) {
  const getScoreClass = () => {
    if (score >= 75) return 'excellent';
    if (score >= 60) return 'good';
    if (score >= 45) return 'average';
    return 'below';
  };
  
  const scoreClass = getScoreClass();
  
  return (
    <div className={`score-badge ${scoreClass} ${size}`}>
      <div className="score-bar">
        <div className="score-fill" style={{ width: `${score}%` }} />
      </div>
      <span className="score-value">{score}</span>
    </div>
  );
}

