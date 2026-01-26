import './RankBadge.css';

export default function RankBadge({ rank, size = 'md' }) {
  const getMedal = () => {
    if (rank === 1) return { emoji: '🥇', class: 'gold' };
    if (rank === 2) return { emoji: '🥈', class: 'silver' };
    if (rank === 3) return { emoji: '🥉', class: 'bronze' };
    return null;
  };
  
  const medal = getMedal();
  
  if (medal) {
    return (
      <div className={`rank-badge medal ${medal.class} ${size}`}>
        <span className="medal-emoji">{medal.emoji}</span>
      </div>
    );
  }
  
  return (
    <div className={`rank-badge number ${size}`}>
      <span className="rank-number">{rank}</span>
    </div>
  );
}

