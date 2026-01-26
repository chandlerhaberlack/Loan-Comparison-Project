import { motion } from 'framer-motion';
import './FilterBar.css';

export default function FilterBar({ filters, onFilterChange, onReset }) {
  const hasActiveFilters = Object.values(filters).some(v => v !== 'all');
  
  return (
    <div className="filter-bar">
      <div className="filter-row">
        <div className="filter-group">
          <label>Custody</label>
          <select 
            value={filters.custody || 'all'} 
            onChange={(e) => onFilterChange('custody', e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="non-custodial">Non-Custodial</option>
            <option value="collaborative">Collaborative</option>
            <option value="custodial">Custodial</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>KYC</label>
          <select 
            value={filters.kyc || 'all'} 
            onChange={(e) => onFilterChange('kyc', e.target.value)}
          >
            <option value="all">Any</option>
            <option value="none">No KYC</option>
            <option value="required">KYC Required</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>Region</label>
          <select 
            value={filters.usAvailable || 'all'} 
            onChange={(e) => onFilterChange('usAvailable', e.target.value)}
          >
            <option value="all">All Regions</option>
            <option value="yes">US Available</option>
            <option value="no">Non-US Only</option>
          </select>
        </div>
        
        {hasActiveFilters && (
          <motion.button 
            className="reset-btn"
            onClick={onReset}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Reset
          </motion.button>
        )}
      </div>
    </div>
  );
}
