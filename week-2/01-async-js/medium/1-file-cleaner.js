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

import { readFile } from 'node:fs/promises';

function removeExtraSpaces(str) {
    let lettersArr = str.split(' ');
    let finalArr = lettersArr.filter((word) => word.trim());

    return finalArr.join(' ');
}

removeExtraSpaces('Hello     this     is.')

async function fileCleaner(filePath) {
    try {
        const response = await readFile(filePath, { encoding: 'utf-8' });
        const cleanedRes = removeExtraSpaces(response);        

        console.log(cleanedRes);

    } catch (error) {
       console.log(error); 
    }
}

let filePath = 'a.txt';

fileCleaner(filePath);


