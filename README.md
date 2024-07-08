# ProjectCreation
NPM Project Creation Example

## Description

Setting up NPM Projects

## Installation

Follow these steps to install the project:

1. Create an empty folder e.g., `mkdir ProjectCreation`
2. Navigate into the project directory: `cd ProjectCreation`
3. Type `npm init -y` to initialize your project
4. Type `tsc --init` to create tsconfig.json
5. Install dependencies
```
# Locally in your project.
npm install -D typescript
npm install -D ts-node

# Or globally with TypeScript.
npm install -g typescript
npm install -g ts-node

# Depending on configuration, you may also need these
npm install -D tslib @types/node
```

6. Install dependencies: `npm install` or `yarn install` (if you're using Node.js)
7. Start the project: `npm start` or `yarn start` (if you're using Node.js)
