const {readFileSync, writeFileSync}=require('fs'); //here we are directly destructuring them
console.log('Start');
//  const fs=require('fs');
//  fs.readFileSync;

const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

console.log(first,second);

writeFileSync('./content/result-sync.txt',`Here is the result : ${first},${second}`,{flag:'a'});    //flag a =append i.e jo txt hai uske saath aage connect krdo vrna we are over writing.

console.log('Done with the task');
console.log('Starting the next one');
