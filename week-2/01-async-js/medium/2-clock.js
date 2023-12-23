/*
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine currTime?

Can you make it so that it updates every second, and shows currTime in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/


function clock() {
    let currTime = new Date();
    let h = currTime.getHours()
    let m = currTime.getMinutes()
    let s = currTime.getSeconds()

    //checking fot AM/PM
    const ampm = h >= 12 ? 'PM' : 'AM';

    //coveting 24-hr to 12hr clock
    h = h % 12 || 12;

    // Ensuring two-digit formatting -> hh:mm:ss
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    console.log(`${h}:${m}::${s} ${ampm}`)
}

setInterval(clock, 1000);