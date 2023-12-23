/*
## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 
*/

import { readFile } from "node:fs";


//data will be printed at last
readFile("a.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
})


let a = 0;
while (a < 1e10) {
    a++;
}

console.log(`line 1`);

console.log(`line 2`);

a = 0;
while (a < 1e10) {
    a++;
}

console.log(`line 3`);