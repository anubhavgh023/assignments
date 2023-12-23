/*
## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/

import { writeFile } from 'node:fs';
import { readFile } from 'node:fs/promises';

// Function to remove extra spaces between words
function removeExtraSpaces(str) {
    let lettersArr = str.split(' ');
    let finalArr = lettersArr.filter((word) => word.trim() !== '');

    return finalArr.join(' ');
}


// Asynchronous function to read, clean, and write a file
async function fileCleaner(filePath) {
    try {
        const response = await readFile(filePath, { encoding: 'utf-8' });
        const cleanedRes = removeExtraSpaces(response);        
        
        writeFile(filePath, cleanedRes, 'utf-8', (err) => {
            if (err) {
                console.error(err);
            }
            else {
                console.log('File successfully cleaned and written.');
            }
        });

    } catch (error) {
       console.error(error); 
    }
}

let filePath = 'a.txt';

fileCleaner(filePath);


