// Bitcoin-Backed Loan Providers Data
// Last updated: January 2026
// Note: Verify all terms directly with lenders before borrowing

export const lenders = [
  {
    id: 'ledn',
    name: 'Ledn',
    logo: '🔷',
    tagline: 'Transparent Bitcoin Financial Services',
    description: 'Canadian-based platform known for competitive rates and proof-of-reserves transparency. Popular choice for Bitcoin-backed loans.',
    website: 'https://ledn.io',
    
    yearFounded: 2018,
    aumOrVolume: 600000000, // ~$600M in loan volume
    
    ltvMin: 0,
    ltvMax: 50,
    loanMin: 500,
    loanMax: 2000000,
    interestRateMin: 12.4,
    interestRateMax: 13.9,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: true,
    communityRating: 88,
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: false,
    availableRegions: ['Global (excl. US in some states)'],
    
    loanDurations: ['12 months', 'Open-ended'],
    liquidationThreshold: 80,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    
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
    communityRating: 85,
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: true,
    availableRegions: ['United States'],
    
    loanDurations: ['12 months'],
    liquidationThreshold: 70,
    autoLiquidation: false,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    
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
    interestRateMin: 7.95,
    interestRateMax: 14.95,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: false,
    communityRating: 55,
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: true,
    availableRegions: ['Global'],
    
    loanDurations: ['3 months', '6 months', '12 months', '24 months'],
    liquidationThreshold: 90,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: true,
    
    pros: ['Established track record since 2016', 'High LTV options up to 70%', 'Flexible loan durations', 'Large maximum loan amounts'],
    cons: ['Custodial platform', 'Early repayment fees', 'No proof of reserves', 'Higher LTV means higher liquidation risk']
  },
  
  {
    id: 'nexo',
    name: 'Nexo',
    logo: '🌐',
    tagline: 'Instant Crypto Credit Lines',
    description: 'Large crypto platform offering instant credit lines against your Bitcoin. No fixed terms, borrow and repay flexibly.',
    website: 'https://nexo.com',
    
    yearFounded: 2018,
    aumOrVolume: 3000000000, // ~$3B+ in managed assets
    
    ltvMin: 0,
    ltvMax: 50,
    loanMin: 50,
    loanMax: 2000000,
    interestRateMin: 2.9,
    interestRateMax: 13.9,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: true,
    communityRating: 72,
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: false,
    availableRegions: ['Global (excl. US)'],
    
    loanDurations: ['Open-ended'],
    liquidationThreshold: 83.3,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    
    pros: ['Very low minimum ($50)', 'Instant credit line', 'Flexible repayment', 'Lower rates with NEXO token'],
    cons: ['Not available in US', 'Custodial platform', 'Best rates require NEXO token holdings', 'Complex tier system']
  },
  
  {
    id: 'hodlhodl',
    name: 'Hodl Hodl',
    logo: '🤝',
    tagline: 'P2P Non-Custodial Loans',
    description: 'Peer-to-peer lending platform using multisig escrow. Non-custodial - your Bitcoin goes into 2-of-3 multisig, not a company wallet.',
    website: 'https://hodlhodl.com',
    
    yearFounded: 2018,
    aumOrVolume: 50000000, // ~$50M estimated P2P volume
    
    ltvMin: 0,
    ltvMax: 70,
    loanMin: 100,
    loanMax: 1000000,
    interestRateMin: 8,
    interestRateMax: 20,
    
    custodyType: 'non-custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: true,
    communityRating: 75,
    
    kycRequired: false,
    kycLevel: 'none',
    
    usAvailable: true,
    availableRegions: ['Global'],
    
    loanDurations: ['Flexible (P2P negotiated)'],
    liquidationThreshold: 0,
    autoLiquidation: false,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    
    pros: ['Non-custodial (multisig escrow)', 'No KYC required', 'P2P - negotiate your terms', 'Global availability'],
    cons: ['Rates vary by lender', 'Less liquidity than centralized', 'Requires finding a counterparty', 'More complex process']
  },
  
  {
    id: 'debifi',
    name: 'Debifi',
    logo: '⚡',
    tagline: 'DLC-Powered Non-Custodial Loans',
    description: 'Uses Discreet Log Contracts (DLCs) for trustless Bitcoin collateral. Cutting-edge technology for maximum sovereignty.',
    website: 'https://debifi.com',
    
    yearFounded: 2022,
    aumOrVolume: null, // Undisclosed - newer platform
    
    ltvMin: 0,
    ltvMax: 50,
    loanMin: 1000,
    loanMax: 500000,
    interestRateMin: 10,
    interestRateMax: 18,
    
    custodyType: 'non-custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: true,
    communityRating: 70,
    
    kycRequired: false,
    kycLevel: 'minimal',
    
    usAvailable: true,
    availableRegions: ['Global'],
    
    loanDurations: ['3 months', '6 months', '12 months'],
    liquidationThreshold: 75,
    autoLiquidation: true,
    canAddCollateral: false,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    
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
    communityRating: 80,
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: false,
    availableRegions: ['Global (excl. US)'],
    
    loanDurations: ['Open-ended'],
    liquidationThreshold: 65,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    
    pros: ['Swiss banking license & regulation', 'Full banking services', 'Professional custody standards', 'USD bank account included'],
    cons: ['High minimums ($10k)', 'Membership/account fees', 'Not available in US', 'Conservative LTV']
  },
  
  {
    id: 'arch',
    name: 'Arch',
    logo: '🏛️',
    tagline: 'Modern Bitcoin-Backed Lending',
    description: 'Newer entrant focused on competitive rates and user experience. Transparent terms with no hidden fees.',
    website: 'https://arch.finance',
    
    yearFounded: 2023,
    aumOrVolume: null, // Undisclosed - newer platform
    
    ltvMin: 0,
    ltvMax: 60,
    loanMin: 1000,
    loanMax: 5000000,
    interestRateMin: 9.5,
    interestRateMax: 15,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: true,
    communityRating: 75,
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: true,
    availableRegions: ['United States', 'Select countries'],
    
    loanDurations: ['6 months', '12 months', '24 months'],
    liquidationThreshold: 85,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    
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
    interestRateMin: 8,
    interestRateMax: 12,
    
    custodyType: 'custodial',
    bitcoinHandling: 'wrapped',
    hasProofOfReserves: true,
    communityRating: 82,
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: true,
    availableRegions: ['United States (select states)'],
    
    loanDurations: ['Open-ended'],
    liquidationThreshold: 70,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    
    pros: ['Publicly traded company (NASDAQ)', 'Institutional-grade custody', 'US availability', 'Low minimum ($100)'],
    cons: ['Bitcoin is wrapped (cbBTC)', 'Limited to select US states', 'Conservative LTV (40%)', 'Custodial platform', 'Account required']
  },
  
  {
    id: 'youhodler',
    name: 'YouHodler',
    logo: '💰',
    tagline: 'High LTV Crypto Loans',
    description: 'Swiss-based platform offering some of the highest LTV ratios in the industry. Known for aggressive loan terms and crypto-friendly features.',
    website: 'https://youhodler.com',
    
    yearFounded: 2018,
    aumOrVolume: 200000000, // ~$200M estimated
    
    ltvMin: 50,
    ltvMax: 90,
    loanMin: 100,
    loanMax: 1500000,
    interestRateMin: 12,
    interestRateMax: 26,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: false,
    communityRating: 58,
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: false,
    availableRegions: ['EU', 'UK', 'Global (excl. US)'],
    
    loanDurations: ['30 days', '60 days', '90 days'],
    liquidationThreshold: 95,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    
    pros: ['Highest LTV in industry (up to 90%)', 'Low minimum ($100)', 'Fast loan approval', 'Multiple fiat currencies'],
    cons: ['Not available in US', 'High interest rates', 'High liquidation risk at 90% LTV', 'No proof of reserves']
  },
  
  {
    id: 'coinloan',
    name: 'CoinLoan',
    logo: '🪙',
    tagline: 'European Crypto Lending',
    description: 'Estonian-licensed crypto lending platform. Regulated in the EU with focus on security and transparency.',
    website: 'https://coinloan.io',
    
    yearFounded: 2017,
    aumOrVolume: 150000000, // ~$150M estimated
    
    ltvMin: 20,
    ltvMax: 70,
    loanMin: 100,
    loanMax: 500000,
    interestRateMin: 9.9,
    interestRateMax: 16,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: true,
    communityRating: 65,
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: false,
    availableRegions: ['EU', 'Global (excl. US)'],
    
    loanDurations: ['1 month', '3 months', '6 months', '12 months'],
    liquidationThreshold: 85,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    
    pros: ['EU regulated (Estonian license)', 'Proof of reserves', 'Flexible LTV options', 'Multiple loan durations'],
    cons: ['Not available in US', 'Custodial only', 'Full KYC required', 'European focus']
  },
  
  {
    id: 'wirex',
    name: 'Wirex',
    logo: '🔶',
    tagline: 'Crypto-Backed Credit Line',
    description: 'UK-based fintech offering crypto credit lines. Combines traditional banking with crypto features, including a Mastercard debit card.',
    website: 'https://wirex.com',
    
    yearFounded: 2014,
    aumOrVolume: 3000000000, // ~$3B+ transaction volume
    
    ltvMin: 0,
    ltvMax: 50,
    loanMin: 50,
    loanMax: 200000,
    interestRateMin: 11,
    interestRateMax: 18,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: false,
    communityRating: 65,
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: false,
    availableRegions: ['UK', 'EU', 'APAC'],
    
    loanDurations: ['Open-ended'],
    liquidationThreshold: 75,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    
    pros: ['Integrated debit card', 'UK/EU regulated', 'Low minimum ($50)', 'All-in-one platform'],
    cons: ['Not available in US', 'No proof of reserves', 'Lower max loan ($200k)', 'Higher rates']
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
    communityRating: 50,
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: true,
    availableRegions: ['United States'],
    
    loanDurations: ['12 months', '24 months', '30 years (mortgage)'],
    liquidationThreshold: 75,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    
    pros: ['Bitcoin mortgages available', 'US focused', 'Large loan amounts', 'Long-term options'],
    cons: ['High minimum ($50k)', 'Custodial', 'Full KYC required', 'Limited to US']
  },
  
  {
    id: 'celsius-successor',
    name: 'Ionic Digital',
    logo: '❄️',
    tagline: 'Reformed Crypto Lending',
    description: 'Post-Celsius restructured lending platform focused on transparency and sustainable yields. Emerged from Celsius bankruptcy with reformed practices.',
    website: 'https://ionic.digital',
    
    yearFounded: 2023,
    aumOrVolume: 2000000000, // ~$2B+ from Celsius restructuring
    
    ltvMin: 0,
    ltvMax: 45,
    loanMin: 1000,
    loanMax: 500000,
    interestRateMin: 11,
    interestRateMax: 15,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: true,
    communityRating: 40,
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: false,
    availableRegions: ['Select jurisdictions'],
    
    loanDurations: ['6 months', '12 months'],
    liquidationThreshold: 75,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    
    pros: ['Reformed with transparency focus', 'Proof of reserves', 'Conservative approach', 'Regulated structure'],
    cons: ['Limited availability', 'Lower LTV due to caution', 'Newer entity', 'Reputation concerns from predecessor']
  },
  
  {
    id: 'binance',
    name: 'Binance Loans',
    logo: '🟡',
    tagline: 'World\'s Largest Exchange Loans',
    description: 'Crypto loans from the world\'s largest exchange. Wide range of collateral options and competitive rates for high-volume traders.',
    website: 'https://binance.com',
    
    yearFounded: 2017,
    aumOrVolume: 50000000000, // ~$50B+ platform AUM
    
    ltvMin: 0,
    ltvMax: 65,
    loanMin: 20,
    loanMax: 10000000,
    interestRateMin: 5.5,
    interestRateMax: 12,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: true,
    communityRating: 45,
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: false,
    availableRegions: ['Global (excl. US)'],
    
    loanDurations: ['7 days', '14 days', '30 days', '90 days', '180 days'],
    liquidationThreshold: 83,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    
    pros: ['Very low minimum ($20)', 'Competitive rates', 'Massive liquidity', 'Proof of reserves'],
    cons: ['Not available in US', 'Custodial', 'Regulatory uncertainty', 'Complex tiered system']
  },
  
  {
    id: 'btcpop',
    name: 'BTCPOP',
    logo: '🎈',
    tagline: 'P2P Bitcoin Lending',
    description: 'Peer-to-peer Bitcoin lending platform. Match with individual lenders for customized loan terms. One of the OG P2P crypto lending platforms.',
    website: 'https://btcpop.co',
    
    yearFounded: 2014,
    aumOrVolume: 10000000, // ~$10M estimated P2P volume
    
    ltvMin: 0,
    ltvMax: 60,
    loanMin: 50,
    loanMax: 100000,
    interestRateMin: 10,
    interestRateMax: 30,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: false,
    communityRating: 55,
    
    kycRequired: false,
    kycLevel: 'optional',
    
    usAvailable: true,
    availableRegions: ['Global'],
    
    loanDurations: ['Flexible (P2P negotiated)'],
    liquidationThreshold: 80,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    
    pros: ['No KYC required', 'P2P flexibility', 'Global availability', 'Low minimum'],
    cons: ['Variable rates', 'Smaller liquidity', 'Less regulatory oversight', 'Counterparty risk']
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
    communityRating: 65,
    
    kycRequired: true,
    kycLevel: 'basic',
    
    usAvailable: true,
    availableRegions: ['US', 'Canada', 'EU'],
    
    loanDurations: ['6 months', '12 months'],
    liquidationThreshold: 75,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    
    pros: ['Simple application', 'Quick approval', 'Basic KYC only', 'US available'],
    cons: ['Smaller max loan', 'Custodial', 'No proof of reserves', 'Newer platform']
  },
  
  {
    id: 'seba',
    name: 'SEBA Bank',
    logo: '🏛️',
    tagline: 'Swiss Crypto Bank',
    description: 'FINMA-licensed Swiss crypto bank offering institutional-grade Bitcoin-backed credit. Premium service for high-net-worth individuals.',
    website: 'https://seba.swiss',
    
    yearFounded: 2018,
    aumOrVolume: 1500000000, // ~$1.5B+ AUM
    
    ltvMin: 0,
    ltvMax: 50,
    loanMin: 100000,
    loanMax: 50000000,
    interestRateMin: 6,
    interestRateMax: 10,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: true,
    communityRating: 85,
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: false,
    availableRegions: ['Switzerland', 'Singapore', 'Hong Kong'],
    
    loanDurations: ['12 months', '24 months', 'Custom'],
    liquidationThreshold: 70,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    
    pros: ['Swiss banking license (FINMA)', 'Institutional grade', 'Low interest rates', 'Very high max loan'],
    cons: ['Very high minimum ($100k)', 'Not available in US', 'Premium/exclusive service', 'Complex onboarding']
  },
  
  {
    id: 'firefish',
    name: 'Firefish',
    logo: '🐟',
    tagline: 'Non-Custodial Bitcoin Loans',
    description: 'Next-generation non-custodial Bitcoin lending using smart contracts. Keep your keys while accessing liquidity.',
    website: 'https://firefish.io',
    
    yearFounded: 2023,
    aumOrVolume: null, // Undisclosed - newer platform
    
    ltvMin: 0,
    ltvMax: 50,
    loanMin: 200,
    loanMax: 300000,
    interestRateMin: 9,
    interestRateMax: 15,
    
    custodyType: 'non-custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: true,
    communityRating: 65,
    
    kycRequired: false,
    kycLevel: 'minimal',
    
    usAvailable: true,
    availableRegions: ['Global'],
    
    loanDurations: ['3 months', '6 months', '12 months'],
    liquidationThreshold: 75,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    
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
    interestRateMax: 12,
    
    custodyType: 'custodial',
    bitcoinHandling: 'native',
    hasProofOfReserves: true,
    communityRating: 88,
    
    kycRequired: true,
    kycLevel: 'full',
    
    usAvailable: true,
    availableRegions: ['United States (select states)'],
    
    loanDurations: ['12 months'],
    liquidationThreshold: 75,
    autoLiquidation: true,
    canAddCollateral: true,
    earlyRepayment: true,
    earlyRepaymentFee: false,
    
    pros: ['No origination fees', 'Competitive interest rates', 'Instant funding', 'No credit check required', 'US available'],
    cons: ['Limited to select US states', 'Custodial platform', 'Higher minimum ($10k)', 'Full KYC required']
  }
];

// Scoring weights
const WEIGHTS = {
  interestRate: 0.28,    // Lower is better (increased from 0.25)
  ltvMax: 0.22,          // Higher is better (increased from 0.20)
  custodyType: 0.15,     // Non-custodial > Collaborative > Custodial
  kycRequired: 0.10,     // No KYC is better
  proofOfReserves: 0.10, // Yes is better
  nativeBtc: 0.05,       // Native is better
  earlyRepayment: 0.05,  // No fee is better
  communityRating: 0.05  // Higher is better (X sentiment)
};

// Apply generous curve to boost scores by ~15-20%
function applyGenerousCurve(score) {
  // Power curve: score^0.85 * 100 gives ~15-20% boost on average
  // Also add a small baseline boost of 8 points
  const curved = Math.pow(score / 100, 0.85) * 100;
  const boosted = curved + 8;
  return Math.min(Math.round(boosted), 100);
}

// Calculate normalized score (0-100) for each attribute
function normalizeScore(value, min, max, higherIsBetter = true) {
  if (max === min) return 50;
  const normalized = (value - min) / (max - min);
  return higherIsBetter ? normalized * 100 : (1 - normalized) * 100;
}

// Calculate composite score for a lender
export function calculateCompositeScore(lender, allLenders) {
  // Get min/max values for normalization
  const rates = allLenders.map(l => l.interestRateMin);
  const ltvs = allLenders.map(l => l.ltvMax);
  const communityRatings = allLenders.map(l => l.communityRating || 50);
  
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
  
  // KYC Required (no = 100, yes = 0)
  score += WEIGHTS.kycRequired * (lender.kycRequired ? 0 : 100);
  
  // Proof of Reserves (yes = 100, no = 0)
  score += WEIGHTS.proofOfReserves * (lender.hasProofOfReserves ? 100 : 0);
  
  // Native BTC (native = 100, wrapped = 0)
  score += WEIGHTS.nativeBtc * (lender.bitcoinHandling === 'native' ? 100 : 0);
  
  // Early Repayment (no fee = 100, fee = 50, no = 0)
  const earlyScore = lender.earlyRepayment ? (lender.earlyRepaymentFee ? 50 : 100) : 0;
  score += WEIGHTS.earlyRepayment * earlyScore;
  
  // Community Rating (X sentiment) - higher is better
  score += WEIGHTS.communityRating * normalizeScore(
    lender.communityRating || 50,
    Math.min(...communityRatings),
    Math.max(...communityRatings),
    true
  );
  
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
  const sorted = [...lenders].sort((a, b) => {
    const aVal = a[attribute];
    const bVal = b[attribute];
    if (typeof aVal === 'boolean') {
      return ascending ? (aVal ? -1 : 1) : (aVal ? 1 : -1);
    }
    if (typeof aVal === 'string') {
      const order = { 'non-custodial': 1, 'collaborative': 2, 'custodial': 3 };
      return ascending ? order[aVal] - order[bVal] : order[bVal] - order[aVal];
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
    format: (v) => v || 'N/A',
    sortAsc: false,
    description: 'X (Twitter) sentiment and community reputation score (1-100)',
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
