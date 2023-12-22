let count = 1;

let timer = setInterval(() => {
    console.log(`${count}s`);
    count++;

    if (count === 1000) {
        clearInterval(timer)
        console.log(`Timer Stopped`);
    }

}, 1000);