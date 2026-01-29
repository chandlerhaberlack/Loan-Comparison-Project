// Bitcoin-Backed Loan Providers Data
// Last updated: January 28, 2026
// Note: Verify all terms directly with lenders before borrowing
// Rates audited: Coinbase (5%), Ledn (10.4-13.4%), SALT (8.95-14.45%), Arch (8.49-14%), Strike (9.5-13%)

export const lenders = [
  {
    id: 'ledn',
    name: 'Ledn',
    logo: '🔷',
    tagline: 'Transparent Bitcoin Financial Services',
    description: 'Platform known for competitive rates and proof-of-reserves transparency. Popular choice for Bitcoin-backed loans with US availability.',
    website: 'https://ledn.io',
    
    yearFounded: 2018,
    aumOrVolume: 600000000, // ~$600M in loan volume
    
    ltvMin: 0,
    ltvMax: 50,
    loanMin: 500,
    loanMax: 2000000,
    interestRateMin: 10.4,
    interestRateMax: 13.4,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: true,
    communityRating: 'excellent',
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: true,
    availableRegions: ['United States', 'Global'],
    
    loanDurations: ['12 months', 'Open-ended'],
    termFlexibility: 'open', // Auto-renewal if LTV ≤65%
    liquidationThreshold: 80,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    largeLoanEase: 'good', // $2M max, straightforward single loan process
    
    pros: ['Proof of reserves audits', 'Competitive interest rates', 'No early repayment penalties', 'Native BTC (no wrapping)'],
    cons: ['Custodial - they hold your keys', 'Full KYC required', 'Limited US availability']
  },
  
  {
    id: 'unchained',
    name: 'Unchained',
    logo: '🔐',
    tagline: 'Collaborative Custody Bitcoin Loans',
    description: 'Pioneer in collaborative multisig custody. You maintain 2-of-3 keys, significantly reducing counterparty risk.',
    website: 'https://unchained.com',
    
    yearFounded: 2019,
    aumOrVolume: 2000000000, // ~$2B+ AUM under collaborative custody
    
    ltvMin: 0,
    ltvMax: 40,
    loanMin: 10000,
    loanMax: 10000000,
    interestRateMin: 14,
    interestRateMax: 16,
    
    custodyType: 'collaborative',
    bitcoinHandling: 'native',
    hasProofOfReserves: true,
    communityRating: 'excellent',
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: true,
    availableRegions: ['United States'],
    
    loanDurations: ['12 months'],
    termFlexibility: 'fixed',
    liquidationThreshold: 70,
    autoLiquidation: false,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    largeLoanEase: 'excellent', // $10M max, designed for high-net-worth individuals, dedicated support
    
    pros: ['Collaborative custody (you hold 2 keys)', 'No rehypothecation of your Bitcoin', 'Established US-based company', 'IRA options available'],
    cons: ['Higher minimum loan ($10k)', 'US only', 'Lower LTV ratio', 'Slightly higher rates']
  },
  
  {
    id: 'salt',
    name: 'SALT Lending',
    logo: '💎',
    tagline: 'OG Crypto Lending Platform',
    description: 'One of the original crypto lending platforms, established in 2016. Offers flexible loan terms and multiple collateral options.',
    website: 'https://saltlending.com',
    
    yearFounded: 2016,
    aumOrVolume: 500000000, // ~$500M estimated loan volume
    
    ltvMin: 30,
    ltvMax: 70,
    loanMin: 5000,
    loanMax: 100000000,
    interestRateMin: 9.95,
    interestRateMax: 14.45,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: false,
    communityRating: 'fair',
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: true,
    availableRegions: ['Global'],
    
    loanDurations: ['3 months', '6 months', '12 months', '24 months'],
    termFlexibility: 'fixed',
    liquidationThreshold: 90,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: true,
    largeLoanEase: 'excellent', // $100M max, institutional-grade infrastructure for large borrowers
    
    pros: ['Established track record since 2016', 'High LTV options up to 70%', 'Flexible loan durations', 'Large maximum loan amounts'],
    cons: ['Custodial platform', 'Early repayment fees', 'No proof of reserves', 'Higher LTV means higher liquidation risk']
  },
  
  {
    id: 'nexo',
    name: 'Nexo',
    logo: '🌐',
    tagline: 'Instant Crypto Credit Lines',
    description: 'Large crypto platform offering instant credit lines against your Bitcoin. Advertised low rates (2.9%) require holding NEXO tokens; actual rates up to 18.9% without token holdings.',
    website: 'https://nexo.com',
    
    yearFounded: 2018,
    aumOrVolume: 3000000000, // ~$3B+ in managed assets
    
    ltvMin: 0,
    ltvMax: 50,
    loanMin: 50,
    loanMax: 2000000,
    interestRateMin: 13.9,
    interestRateMax: 18.9,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: true,
    communityRating: 'good',
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: false,
    availableRegions: ['Global (excl. US)'],
    
    loanDurations: ['Open-ended'],
    termFlexibility: 'open',
    liquidationThreshold: 83.3,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    largeLoanEase: 'good', // $2M max, instant credit line makes it easy up to limits
    
    pros: ['Very low minimum ($50)', 'Instant credit line', 'Flexible repayment', 'No fixed terms'],
    cons: ['Not available in US', 'Custodial platform', 'Advertised low rates require buying NEXO tokens', 'Actual rates 13.9-18.9% without tokens']
  },
  
  {
    id: 'hodlhodl',
    name: 'Hodl Hodl',
    logo: '🤝',
    tagline: 'P2P Collaborative Custody Loans',
    description: 'Peer-to-peer lending platform using multisig escrow. Your Bitcoin goes into 2-of-3 multisig with collaborative custody.',
    website: 'https://hodlhodl.com',
    
    yearFounded: 2018,
    aumOrVolume: 50000000, // ~$50M estimated P2P volume
    
    ltvMin: 0,
    ltvMax: 70,
    loanMin: 100,
    loanMax: 1000000,
    interestRateMin: 11,
    interestRateMax: 20,
    
    custodyType: 'collaborative',
    bitcoinHandling: 'native',
    hasProofOfReserves: true,
    communityRating: 'good',
    
    kycRequired: false,
    kycLevel: 'none',
    
    usAvailable: true,
    availableRegions: ['Global'],
    
    loanDurations: ['Up to 12 months'],
    termFlexibility: 'fixed',
    liquidationThreshold: 0,
    autoLiquidation: false,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    largeLoanEase: 'poor', // P2P model requires multiple counterparties for large loans, $1M max but very difficult
    
    pros: ['Non-custodial (multisig escrow)', 'No KYC required', 'P2P - negotiate your terms', 'Global availability'],
    cons: ['Rates vary by lender', 'Less liquidity than centralized', 'Requires finding a counterparty', 'More complex process']
  },
  
  {
    id: 'debifi',
    name: 'Debifi',
    logo: '⚡',
    tagline: 'DLC-Powered Collaborative Custody Loans',
    description: 'Uses Discreet Log Contracts (DLCs) for trustless Bitcoin collateral. Collaborative custody via DLC smart contracts.',
    website: 'https://debifi.com',
    
    yearFounded: 2022,
    aumOrVolume: null, // Undisclosed - newer platform
    
    ltvMin: 0,
    ltvMax: 50,
    loanMin: 1000,
    loanMax: 500000,
    interestRateMin: 10,
    interestRateMax: 18,
    
    custodyType: 'collaborative',
    bitcoinHandling: 'native',
    hasProofOfReserves: true,
    communityRating: 'good',
    
    kycRequired: false,
    kycLevel: 'minimal',
    
    usAvailable: true,
    availableRegions: ['Global'],
    
    loanDurations: ['3 months', '6 months', '12 months'],
    termFlexibility: 'fixed',
    liquidationThreshold: 75,
    autoLiquidation: true,
    canAddCollateral: false,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    largeLoanEase: 'na', // $500k max - cannot do $1M+ loans
    
    pros: ['True non-custodial via DLCs', 'No KYC or minimal KYC', 'Trustless Bitcoin-native tech', 'No counterparty risk'],
    cons: ['Newer platform', 'Cannot add collateral mid-loan', 'Limited loan amounts', 'DLC tech still maturing']
  },
  
  {
    id: 'xapo',
    name: 'Xapo Bank',
    logo: '🏦',
    tagline: 'Swiss Bank Bitcoin Credit',
    description: 'Licensed Swiss private bank offering USD credit lines backed by Bitcoin. Full banking services with Bitcoin at the core.',
    website: 'https://xapobank.com',
    
    yearFounded: 2014,
    aumOrVolume: 1000000000, // ~$1B+ in AUM
    
    ltvMin: 0,
    ltvMax: 40,
    loanMin: 10000,
    loanMax: 1000000,
    interestRateMin: 10,
    interestRateMax: 12,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: false,
    communityRating: 'excellent',
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: false,
    availableRegions: ['Global (excl. US)'],
    
    loanDurations: ['30-365 days'],
    termFlexibility: 'renewable', // Can extend + upsizing
    liquidationThreshold: 65,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    largeLoanEase: 'fair', // $1M max, Swiss private bank but limited to $1M ceiling
    
    pros: ['Swiss banking license & regulation', 'Full banking services', 'Professional custody standards', 'USD bank account included'],
    cons: ['High minimums ($10k)', 'Membership/account fees', 'Not available in US', 'Conservative LTV']
  },
  
  {
    id: 'arch',
    name: 'Arch Lending',
    logo: '🏛️',
    tagline: 'Modern Bitcoin-Backed Lending',
    description: 'Newer entrant focused on competitive rates and user experience. Transparent terms with no hidden fees.',
    website: 'https://archlending.com',
    
    yearFounded: 2023,
    aumOrVolume: null, // Undisclosed - newer platform
    
    ltvMin: 0,
    ltvMax: 60,
    loanMin: 1000,
    loanMax: 5000000,
    interestRateMin: 11.49,
    interestRateMax: 14,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: true,
    communityRating: 'good',
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: true,
    availableRegions: ['United States', 'Select countries'],
    
    loanDurations: ['6 months', '12 months', '24 months'],
    termFlexibility: 'renewable', // Rollover in last 3 months + Perpetual Income option
    liquidationThreshold: 85,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    largeLoanEase: 'good', // $5M max, straightforward process for large loans
    
    pros: ['Competitive rates', 'US availability', 'Good LTV ratio (60%)', 'No early repayment fees'],
    cons: ['Newer platform', 'Custodial', 'Full KYC required', 'Still building track record']
  },
  
  // NEW LENDERS ADDED IN PHASE 2
  
  {
    id: 'coinbase',
    name: 'Coinbase',
    logo: '🔵',
    tagline: 'Trusted Crypto Exchange Loans',
    description: 'Major US-based exchange offering Bitcoin-backed loans to eligible users. Backed by a publicly traded company with institutional-grade custody.',
    website: 'https://coinbase.com',
    
    yearFounded: 2012,
    aumOrVolume: 130000000000, // ~$130B+ platform AUM
    
    ltvMin: 0,
    ltvMax: 40,
    loanMin: 100,
    loanMax: 1000000,
    interestRateMin: 5,
    interestRateMax: 12,
    
    custodyType: 'custodial',
    bitcoinHandling: 'wrapped',
    hasProofOfReserves: true,
    communityRating: 'excellent',
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: true,
    availableRegions: ['United States (select states)'],
    
    loanDurations: ['Open-ended'],
    termFlexibility: 'open',
    liquidationThreshold: 70,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    largeLoanEase: 'excellent', // Institutional platform with strong support for large loans
    
    pros: ['Publicly traded company (NASDAQ)', 'Institutional-grade custody', 'US availability', 'Low minimum ($100)', 'Rates as low as 5% APY'],
    cons: ['Bitcoin is converted to cbBTC (wrapped)', 'Limited to select US states', 'Conservative LTV (40%)', 'Custodial platform', 'Variable rates based on market conditions']
  },
  
  {
    id: 'milo',
    name: 'Milo',
    logo: '🏠',
    tagline: 'Bitcoin Mortgages & Loans',
    description: 'US-focused lender specializing in Bitcoin-backed mortgages and loans. One of the few offering real estate financing with crypto collateral.',
    website: 'https://milo.io',
    
    yearFounded: 2021,
    aumOrVolume: 250000000, // ~$250M estimated mortgage/loan volume
    
    ltvMin: 0,
    ltvMax: 50,
    loanMin: 50000,
    loanMax: 5000000,
    interestRateMin: 9,
    interestRateMax: 13,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: false,
    communityRating: 'fair',
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: true,
    availableRegions: ['United States'],
    
    loanDurations: ['12 months', '24 months', '30 years (mortgage)'],
    termFlexibility: 'fixed',
    liquidationThreshold: 75,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    largeLoanEase: 'good', // $5M max, designed for large mortgage-style loans
    
    pros: ['Bitcoin mortgages available', 'US focused', 'Large loan amounts', 'Long-term options'],
    cons: ['High minimum ($50k)', 'Custodial', 'Full KYC required', 'Limited to US']
  },
  
  {
    id: 'lend-at-hodl',
    name: 'Lend @ Hodl',
    logo: '📈',
    tagline: 'Simple Bitcoin Loans',
    description: 'Streamlined Bitcoin lending platform focused on simplicity. Quick approvals with straightforward terms for bitcoiners.',
    website: 'https://lendathodl.com',
    
    yearFounded: 2022,
    aumOrVolume: null, // Undisclosed - newer platform
    
    ltvMin: 0,
    ltvMax: 50,
    loanMin: 500,
    loanMax: 250000,
    interestRateMin: 11,
    interestRateMax: 16,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: false,
    communityRating: 'good',
    
    kycRequired: true,
    kycLevel: 'basic',
    
    usAvailable: true,
    availableRegions: ['US', 'Canada', 'EU'],
    
    loanDurations: ['6 months', '12 months'],
    termFlexibility: 'fixed',
    liquidationThreshold: 75,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    largeLoanEase: 'na', // $250k max - cannot do $1M+ loans
    
    pros: ['Simple application', 'Quick approval', 'Basic KYC only', 'US available'],
    cons: ['Smaller max loan', 'Custodial', 'No proof of reserves', 'Newer platform']
  },
  
  {
    id: 'firefish',
    name: 'Firefish',
    logo: '🐟',
    tagline: 'Collaborative Custody Bitcoin Loans',
    description: 'Next-generation Bitcoin lending using smart contracts with collaborative custody. Access liquidity while maintaining shared control.',
    website: 'https://firefish.io',
    
    yearFounded: 2023,
    aumOrVolume: null, // Undisclosed - newer platform
    
    ltvMin: 0,
    ltvMax: 50,
    loanMin: 200,
    loanMax: 300000,
    interestRateMin: 9,
    interestRateMax: 15,
    
    custodyType: 'collaborative',
    bitcoinHandling: 'native',
    hasProofOfReserves: true,
    communityRating: 'good',
    
    kycRequired: false,
    kycLevel: 'minimal',
    
    usAvailable: true,
    availableRegions: ['Global'],
    
    loanDurations: ['3 months', '6 months', '12 months'],
    termFlexibility: 'renewable', // Explicit rollover feature
    liquidationThreshold: 75,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    largeLoanEase: 'fair', // Smaller max but can work with larger amounts through multiple loans
    
    pros: ['Non-custodial', 'No/minimal KYC', 'Global availability', 'Native Bitcoin'],
    cons: ['Newer platform', 'Smart contract risk', 'Lower max loan', 'Tech complexity']
  },
  
  {
    id: 'strike',
    name: 'Strike',
    logo: '⚡',
    tagline: 'Bitcoin-Backed Loans Without Selling',
    description: 'US-based platform offering Bitcoin-backed loans with competitive rates. Instant funding with no origination fees. Available in select US states.',
    website: 'https://strike.me/lending',
    
    yearFounded: 2020,
    aumOrVolume: 500000000, // ~$500M+ estimated
    
    ltvMin: 0,
    ltvMax: 50,
    loanMin: 10000,
    loanMax: 2000000,
    interestRateMin: 9.5,
    interestRateMax: 13,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: true,
    communityRating: 'excellent',
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: true,
    availableRegions: ['United States (select states)'],
    
    loanDurations: ['12 months'],
    termFlexibility: 'renewable', // Can close and reopen with no fees
    liquidationThreshold: 75,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    largeLoanEase: 'good', // $2M max, streamlined process for large loans
    
    pros: ['No origination fees', 'Competitive interest rates', 'Instant funding', 'No credit check required', 'US available'],
    cons: ['Limited to select US states', 'Custodial platform', 'Higher minimum ($10k)', 'Full KYC required']
  }
];

// Scoring weights
const WEIGHTS = {
  interestRate: 0.25,    // Lower is better
  ltvMax: 0.12,          // Higher is better
  custodyType: 0.10,     // Non-custodial > Collaborative > Custodial
  proofOfReserves: 0.10, // Yes is better
  nativeBtc: 0.05,       // Native is better
  earlyRepayment: 0.05,  // No fee is better
  communityRating: 0.10, // Community/reputation tier (Excellent > Good > Fair > Poor)
  termFlexibility: 0.15, // Open-ended > Renewable > Fixed
  largeLoanEase: 0.08    // Ease of getting $1M+ loans (Excellent > Good > Fair > Poor)
};

// Community rating tiers (display order: Excellent > Good > Fair > Poor)
export const COMMUNITY_TIER_ORDER = ['excellent', 'good', 'fair', 'poor'];
export const COMMUNITY_TIER_LABELS = { excellent: 'Excellent', good: 'Good', fair: 'Fair', poor: 'Poor' };
const COMMUNITY_TIER_SCORES = { excellent: 100, good: 75, fair: 50, poor: 25 };

// Term flexibility tiers
export const TERM_FLEXIBILITY_LABELS = { open: 'Open-ended', renewable: 'Renewable', fixed: 'Fixed' };
const TERM_FLEXIBILITY_SCORES = { open: 100, renewable: 70, fixed: 40 };

// Large loan ease tiers (ability to easily get $1M+ loans)
export const LARGE_LOAN_EASE_LABELS = { excellent: 'Excellent', good: 'Good', fair: 'Fair', poor: 'Poor', na: 'N/A' };
const LARGE_LOAN_EASE_ORDER = { excellent: 1, good: 2, fair: 3, poor: 4, na: 5 };
const LARGE_LOAN_EASE_SCORES = { excellent: 100, good: 75, fair: 50, poor: 25, na: 0 };

// Apply generous curve to boost scores by ~15-20%
function applyGenerousCurve(score) {
  // Safety check for NaN or undefined
  if (isNaN(score) || score === undefined || score === null) {
    return 50; // Default score
  }
  // Power curve: score^0.85 * 100 gives ~15-20% boost on average
  // Also add a small baseline boost of 8 points
  const curved = Math.pow(score / 100, 0.85) * 100;
  const boosted = curved + 8;
  return Math.min(Math.round(boosted), 100);
}

// Calculate normalized score (0-100) for each attribute
function normalizeScore(value, min, max, higherIsBetter = true) {
  // Safety checks
  if (value === undefined || value === null || isNaN(value)) return 50;
  if (max === min) return 50;
  const normalized = (value - min) / (max - min);
  const result = higherIsBetter ? normalized * 100 : (1 - normalized) * 100;
  return isNaN(result) ? 50 : result;
}

// Calculate composite score for a lender
export function calculateCompositeScore(lender, allLenders) {
  // Get min/max values for normalization
  const rates = allLenders.map(l => l.interestRateMin);
  const ltvs = allLenders.map(l => l.ltvMax);
  
  let score = 0;
  
  // Interest Rate (lower is better)
  score += WEIGHTS.interestRate * normalizeScore(
    lender.interestRateMin, 
    Math.min(...rates), 
    Math.max(...rates), 
    false
  );
  
  // LTV Max (higher is better)
  score += WEIGHTS.ltvMax * normalizeScore(
    lender.ltvMax,
    Math.min(...ltvs),
    Math.max(...ltvs),
    true
  );
  
  // Custody Type (non-custodial = 100, collaborative = 70, custodial = 40)
  const custodyScores = { 'non-custodial': 100, 'collaborative': 70, 'custodial': 40 };
  score += WEIGHTS.custodyType * (custodyScores[lender.custodyType] || 40);
  
  // Proof of Reserves (yes = 100, no = 0)
  score += WEIGHTS.proofOfReserves * (lender.hasProofOfReserves ? 100 : 0);
  
  // Native BTC (native = 100, wrapped = 0)
  score += WEIGHTS.nativeBtc * (lender.bitcoinHandling === 'native' ? 100 : 0);
  
  // Early Repayment (no fee = 100, fee = 50, no = 0)
  const earlyScore = lender.earlyRepayment ? (lender.earlyRepaymentFee ? 50 : 100) : 0;
  score += WEIGHTS.earlyRepayment * earlyScore;
  
  // Community Rating tier (excellent=100, good=75, fair=50, poor=25)
  score += WEIGHTS.communityRating * (COMMUNITY_TIER_SCORES[lender.communityRating] ?? 50);
  
  // Term Flexibility (open=100, renewable=70, fixed=40)
  score += WEIGHTS.termFlexibility * (TERM_FLEXIBILITY_SCORES[lender.termFlexibility] ?? 40);
  
  // Large Loan Ease (excellent=100, good=75, fair=50, poor=25, na=0)
  score += WEIGHTS.largeLoanEase * (LARGE_LOAN_EASE_SCORES[lender.largeLoanEase] ?? 0);
  
  // Apply generous curve to boost scores
  return applyGenerousCurve(score);
}

// Get all lenders with computed scores
export function getLendersWithScores() {
  return lenders.map(lender => ({
    ...lender,
    compositeScore: calculateCompositeScore(lender, lenders)
  })).sort((a, b) => b.compositeScore - a.compositeScore);
}

// Get rank for a specific attribute (returns object with lenderId: rank)
export function getAttributeRanks(attribute, ascending = true) {
  const communityOrder = { excellent: 1, good: 2, fair: 3, poor: 4 };
  const termFlexOrder = { open: 1, renewable: 2, fixed: 3 };
  const largeLoanOrder = { excellent: 1, good: 2, fair: 3, poor: 4, na: 5 };
  
  const sorted = [...lenders].sort((a, b) => {
    const aVal = a[attribute];
    const bVal = b[attribute];
    if (typeof aVal === 'boolean') {
      return ascending ? (aVal ? -1 : 1) : (aVal ? 1 : -1);
    }
    if (attribute === 'communityRating' && typeof aVal === 'string') {
      const aOrd = communityOrder[aVal] ?? 5;
      const bOrd = communityOrder[bVal] ?? 5;
      return ascending ? aOrd - bOrd : bOrd - aOrd;
    }
    if (attribute === 'largeLoanEase' && typeof aVal === 'string') {
      const aOrd = largeLoanOrder[aVal] ?? 6;
      const bOrd = largeLoanOrder[bVal] ?? 6;
      return ascending ? aOrd - bOrd : bOrd - aOrd;
    }
    if (attribute === 'termFlexibility' && typeof aVal === 'string') {
      const aOrd = termFlexOrder[aVal] ?? 4;
      const bOrd = termFlexOrder[bVal] ?? 4;
      return ascending ? aOrd - bOrd : bOrd - aOrd;
    }
    if (typeof aVal === 'string') {
      const order = { 'non-custodial': 1, 'collaborative': 2, 'custodial': 3 };
      return ascending ? (order[aVal] ?? 4) - (order[bVal] ?? 4) : (order[bVal] ?? 4) - (order[aVal] ?? 4);
    }
    return ascending ? aVal - bVal : bVal - aVal;
  });
  
  const ranks = {};
  sorted.forEach((lender, idx) => {
    ranks[lender.id] = idx + 1;
  });
  return ranks;
}

// Attribute metadata for display
export const attributeConfig = {
  compositeScore: {
    label: 'Score',
    shortLabel: 'Score',
    format: (v) => v,
    sortAsc: false,
    description: 'Overall weighted score based on all attributes',
    primary: true
  },
  interestRateMin: {
    label: 'Interest Rate',
    shortLabel: 'Rate',
    format: (v) => `${v}%`,
    sortAsc: true,
    description: 'Minimum annual interest rate',
    primary: true
  },
  ltvMax: {
    label: 'Max LTV',
    shortLabel: 'LTV',
    format: (v) => `${v}%`,
    sortAsc: false,
    description: 'Maximum loan-to-value ratio',
    primary: true
  },
  custodyType: {
    label: 'Custody',
    shortLabel: 'Custody',
    format: (v) => v,
    sortAsc: true,
    description: 'Who controls your Bitcoin during the loan',
    primary: true
  },
  loanMin: {
    label: 'Min Loan',
    shortLabel: 'Min',
    format: (v) => v >= 1000 ? `$${(v/1000).toFixed(0)}k` : `$${v}`,
    sortAsc: true,
    description: 'Minimum loan amount',
    primary: false
  },
  loanMax: {
    label: 'Max Loan',
    shortLabel: 'Max',
    format: (v) => `$${(v/1000000).toFixed(1)}M`,
    sortAsc: false,
    description: 'Maximum loan amount',
    primary: false
  },
  kycRequired: {
    label: 'KYC',
    shortLabel: 'KYC',
    format: (v) => v ? 'Required' : 'None',
    sortAsc: true,
    description: 'Identity verification requirement',
    primary: false
  },
  hasProofOfReserves: {
    label: 'Proof of Reserves',
    shortLabel: 'PoR',
    format: (v) => v ? 'Yes' : 'No',
    sortAsc: false,
    description: 'Publicly audited reserves',
    primary: false
  },
  bitcoinHandling: {
    label: 'BTC Type',
    shortLabel: 'BTC',
    format: (v) => v === 'native' ? 'Native' : 'Wrapped',
    sortAsc: true,
    description: 'Native Bitcoin or wrapped token',
    primary: false
  },
  usAvailable: {
    label: 'US Available',
    shortLabel: 'US',
    format: (v) => v ? 'Yes' : 'No',
    sortAsc: false,
    description: 'Available to US residents',
    primary: false
  },
  earlyRepayment: {
    label: 'Early Repay',
    shortLabel: 'Early',
    format: (v, lender) => {
      if (!v) return 'No';
      return lender?.earlyRepaymentFee ? 'Fee' : 'Free';
    },
    sortAsc: false,
    description: 'Early repayment allowed',
    primary: false
  },
  liquidationThreshold: {
    label: 'Liquidation',
    shortLabel: 'Liq.',
    format: (v) => v ? `${v}%` : 'N/A',
    sortAsc: false,
    description: 'LTV threshold for liquidation',
    primary: false
  },
  communityRating: {
    label: 'Community Rating',
    shortLabel: 'Community',
    format: (v) => (v && COMMUNITY_TIER_LABELS[v]) ? COMMUNITY_TIER_LABELS[v] : 'N/A',
    sortAsc: false,
    description: 'Community and reputation tier: Excellent, Good, Fair, or Poor',
    primary: false
  },
  yearFounded: {
    label: 'Year Founded',
    shortLabel: 'Founded',
    format: (v) => v || 'N/A',
    sortAsc: true,
    description: 'Year the company was founded',
    primary: false
  },
  aumOrVolume: {
    label: 'AUM / Volume',
    shortLabel: 'AUM',
    format: (v) => {
      if (!v) return 'N/A';
      if (v >= 1000000000) return `$${(v / 1000000000).toFixed(0)}B`;
      if (v >= 1000000) return `$${(v / 1000000).toFixed(0)}M`;
      return `$${(v / 1000).toFixed(0)}K`;
    },
    sortAsc: false,
    description: 'Assets under management or total loan volume',
    primary: false
  },
  termFlexibility: {
    label: 'Term Flexibility',
    shortLabel: 'Term',
    format: (v) => TERM_FLEXIBILITY_LABELS[v] || 'N/A',
    sortAsc: true,
    description: 'Open-ended: No fixed term, pay when ready (variable rate). Renewable: Can roll over at maturity. Fixed: Must refinance to continue.',
    primary: false
  },
  largeLoanEase: {
    label: 'Large Loan (1M+)',
    shortLabel: '1M+ Ease',
    format: (v) => LARGE_LOAN_EASE_LABELS[v] || 'N/A',
    sortAsc: true,
    description: 'How easy it is to get a large loan ($1M+). Excellent: Simple single-loan process with high limits. Good: Straightforward for $1M+. Fair: Possible but limited. Poor: Very difficult (e.g., P2P requires multiple counterparties). N/A: Max loan under $1M.',
    primary: false
  }
};

// Custody type display info
export const custodyTypes = {
  custodial: {
    label: 'Custodial',
    icon: '🏦',
    color: '#6B7280',
    description: 'The lender holds your Bitcoin'
  },
  collaborative: {
    label: 'Collaborative',
    icon: '🤝',
    color: '#F7931A',
    description: 'Multi-sig with shared control'
  },
  'non-custodial': {
    label: 'Non-Custodial',
    icon: '🔐',
    color: '#10B981',
    description: 'You maintain full control'
  }
};
