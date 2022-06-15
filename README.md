# Web3 in TN: Building Blocks & Code Review

## Agenda
x. Introduction
  a. Who I Am
    1. Background & Creds - Why me?
      a. LinkedIn: Eng & JavaScript Lead (Patents)
      b. Addepar: VP, Product Development
      c. Exeq: CTO, CEO
      d. Bunches: Founder, CEO
    2. Github (https://github.com/derekbrown)
    3. Twitter (https://twitter.com/derekbrown)
    4. LinkedIn (https://linkedin.com/in/derekbrownjr)
  b. Who Bunches Is
    1. What We're Up To
    2. TestFlight Link
  c. Who You Are
    1. Familiarities
      - Code (JavaScript)
      - Crypto
      - Ethereum vs EVM
      - Fungible vs. Non-Fungible
      - OpenSea vs LooksRare vs Gem vs Tofu
      - Chain IDs
      - HD Wallets
      - Transactions
      - Smart Contracts (Solidity)
    2. What You Want
      - How Does All This Work?
      - Show Me the Code?
      - Something Else?
xx. Caveats
  a. EVM World
  b. Working on Ethereum Layer 1
I. Building Blocks
  a. Chains
    1. Layer 1
    2. Sidechains
    3. Layer 2
  b. What is a wallet, *really*?
    1. Public-Private Key Relationship
    2. HD Wallets
  c. Using a Browser Wallet
    1. [Console] Injected Provider
      - window.ethereum
      - [BONUS] phantom
      - [BONUS] stacks
    2. [Code] Using Ethers / Wagmi / RainbowKit
  d. Using a Mobile Wallet
    1. Handshake via WalletConnect or WalletLink
    2. Signatures Happen on Device
  e. Signing Transactions
    1. Gasless Transactions
  f. Smart Contracts
    x. EVM
    1. What is a Smart Contract?
    2. Gas & Gas Codes
    3. [BONUS] [Github] Contract Review

## Getting Started
1. Ensure that you have Node & NPM or Yarn.
2. Run Create React App: `npx create-react-app my-app`
3. Install Ethers & Wagmi into the project: `npm install ethers wagmi`

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Learn More

[React documentation](https://reactjs.org/)
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
[Ethers documentation](https://docs.ethers.io/v5/)
[Wagmi documentation](https://wagmi.sh/docs/)