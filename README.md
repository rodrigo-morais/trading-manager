# trading-manager

An application to realize trades in real-time with the goal to control the performance and all the trading steps as initiate an operation, change stop loss, register gains, losses and breakevens.

## Setup

### Install dependencies

```bash
npm install
```

## Running Tests

```bash
npm test            # Run all available tests + linting
npm run tdd         # Run only specific tests with watch task
npm run jest        # Run all the unit tests
```

## Application modes

### *Standalone* mode for webpack devserver

`APP_MODE=standalone`

Targeting webpack devserver builds that are created using `npm start` or `npm run build:standalone`

Start the webpack devserver at http://localhost:8080 by running

```
npm start
```

## Configuration

## JS Linter

```bash
npm run lint
```
