const path=require('path');
console.log(path.sep);

// we will always get a normalized file path, i.e it ignores any forward or backwars slashes.
const filePath=path.join('/content','//subfolder','test.txt');
console.log(filePath);

const base=path.basename(filePath);
console.log(base);

const absolute= path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);