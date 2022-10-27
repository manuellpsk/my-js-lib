import { differenceBetweenTwoDates, round } from '../index.js';

const dateA = new Date(2022, 10, 15)
const dateB = new Date(2022, 10, 16)
console.log(differenceBetweenTwoDates(dateA, dateB))

const numA = 123.445
const numB = 1.005
console.log(round(numA, 1));
console.log(round(numB, 2));