// Lets imagine if arrays in JS were static

import { NumberArray } from './number-array';

const myNumberArr = new NumberArray(4);

myNumberArr.insert(10);
myNumberArr.insert(20);
myNumberArr.insert(30);
myNumberArr.insert(40);

myNumberArr.print();

myNumberArr.reverse();

myNumberArr.print();

console.log(`Intersection:`, myNumberArr.intersect([10, 20, 50, 70]));

console.log(`Max: ${myNumberArr.max()}`);

myNumberArr.reverse();
myNumberArr.removeAt(3);

myNumberArr.print();
console.log(`Max: ${myNumberArr.max()}`);
