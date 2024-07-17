import _ from 'lodash';

let str = 'hello world';
const camelCased = _.camelCase(str);
console.log(camelCased); // "helloWorld"

str = 'hello world';
const capitalized = _.capitalize(str);
console.log(capitalized); // "Hello world"

str = 'Hello World';
const kebabCased = _.kebabCase(str);
console.log(kebabCased); // "hello-world"

str = 'Hello World';
const lowerCased = _.lowerCase(str);
console.log(lowerCased); // "hello world"

str = 'Hello';
const repeated = _.repeat(str, 3);
console.log(repeated); // "HelloHelloHello"

str = 'Hello World';
const snakeCased = _.snakeCase(str);
console.log(snakeCased); // "hello_world"

str = 'hello world';
const startCased = _.startCase(str);
console.log(startCased); // "Hello World"

//Truncates a string if it's longer than the specified length.
str = 'Hello world, this is a long string';
const truncated = _.truncate(str, { 'length': 14 });
console.log(truncated); // "Hello world..."

str = 'hello world';
const upperCased = _.upperCase(str);
console.log(upperCased); // "HELLO WORLD"

//Removes diacritical marks from a string.
str = 'déjà vu';
const deburred = _.deburr(str);
console.log(deburred); // "deja vu"

// Pads a string on both sides if it's shorter than the specified length.
str = 'Hello';
const padded = _.pad(str, 10);
console.log(padded); // "  Hello   "

// Generates a random string with the specified length.
const randomString = Math.random().toString(10).slice(2);
console.log(randomString);


