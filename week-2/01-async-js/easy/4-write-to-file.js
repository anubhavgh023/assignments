/*
## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/

import { writeFile } from 'node:fs/promises';

// let dataToAppend = "Appended Data";
// await writeFile('a.txt', dataToAppend, { flag: 'a' }); //{flag:'a'} append the data

let dataToWrite = "Written Data";

async function writeDataToFile() {
    try {
        await writeFile('a.txt', dataToWrite,{flag:'r+'}); // r+ check if file exits or not.
        console.log("Data written successfully");
    } catch (error) {
        console.log(error);
    }
}

writeDataToFile();


