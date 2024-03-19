const chain_thicket_explorer = require('chain-thicket-explorer');
const chainsaw_journal = require('chainsaw-journal');
const multer = require('multer');
const axios = require('axios');
const web3_utils = require('web3-utils');
const firebase = require('firebase');

const mergeArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

const os = require('os');
console.log(`Your platform is ${os.platform()}`);

const { Transform } = require('stream');
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});
process.stdin.pipe(upperCaseTransform).pipe(process.stdout);

const myFunc = () => {
  console.log('This is a simple function.');
};
myFunc();

const { Transform } = require('stream');
const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});
process.stdin.pipe(upperCaseTr).pipe(process.stdout);

const user = { name: 'John Doe', age: 30 };
const { name, age } = user;
console.log(`User name is ${name} and age is ${age}.`);

const crypto = require('crypto');
const hash = crypto.createHash('sha256').update('Hello Crypto').digest('hex');
console.log(`SHA-256 Hash: ${hash}`);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  readline.close();
});

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));