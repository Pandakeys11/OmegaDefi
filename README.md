# Omega DeFi Hub

A comprehensive DeFi platform with token creation, staking, swapping, and more.

## Features

- **Token Creator**: Create and deploy custom tokens
- **Token Swap**: Swap tokens with ease
- **Staking Pool**: Stake tokens and earn rewards
- **Staking Creator**: Create custom staking pools
- **Airdrop**: Distribute tokens to multiple addresses
- **Activity Tracker**: Monitor your DeFi activities

## Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd OmegaDefi
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open automatically in your default browser at `http://localhost:3000`.

## Development

- **Development server**: `npm run dev` - Starts live-server with auto-reload
- **Production serve**: `npm run serve` - Serves files without auto-reload
- **Build**: `npm run build` - No build step required (static HTML)

## Project Structure

```
OmegaDefi/
├── index.html              # Main landing page
├── token-creator.html      # Token creation interface
├── token-swap.html         # Token swapping interface
├── staking-pool.html       # Staking pool interface
├── staking-creator.html    # Staking pool creation
├── airdrop.html           # Token airdrop interface
├── activity-tracker.html  # Activity monitoring
├── tokenfactory.sol       # Token factory smart contract
├── stakingfactory.sol     # Staking factory smart contract
├── DB_Leaderboard.sol     # Leaderboard smart contract
└── package.json           # Project configuration
```

## Smart Contracts

The project includes Solidity smart contracts for:
- Token Factory: Deploy new tokens
- Staking Factory: Create staking pools
- Leaderboard: Track user activities

## Contributing

1. Make your changes to the HTML files
2. The development server will automatically reload
3. Test your changes in the browser
4. Commit and push your changes

## License

MIT License 