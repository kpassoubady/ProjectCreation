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
5. create a source folder `mkdir src` 
6. create person.ts file with the below code
```typescript:
export class Person {
  lastName!: String;
  firstName!: String;
}
let foo = new Person();
foo.firstName = "test";
```
7. create `src/index.ts` witht the below code
   
```typescript:
import {Person} from './person';

let foo = new Person();
foo.firstName = 'Foo';
foo.lastName = 'Bar';
console.log(foo.firstName + " " + foo.lastName);
```
10. Install dependencies
```bash:
# Locally in your project.
npm install -D typescript
npm install -D ts-node

# Or globally with TypeScript.
npm install -g typescript
npm install -g ts-node

# Depending on configuration, you may also need these
npm install -D tslib @types/node
```

1. Install dependencies: `npm install`
2. In the package.json file at the script add a start command as shown below:
  ```json:
    "scripts": {
    "start": "ts-node src/index.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
    },
  ```
3. Start the project: `npm start` 
4. Assume you want to add `lodash` as one of your dependencies for the existing project
```bash:
  npm i -D lodash
  npm i --save-dev @types/lodash
  ```
