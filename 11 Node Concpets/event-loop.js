//timers -> pending callbacks -> idle, prepared -> poll -> check -> close callbacks 

const fs = require('fs');
const crypto = require("crypto");

console.log("1. script start (Syncronous)") 

setTimeout(() => {
    console.log("2. 0 second call back (macrotask)")
}, 0)

setTimeout(()=>{
    console.log("3. 0 second call back (macrotask)")
}, 0)

setImmediate(() => {
    console.log("4. setImmediate callback (check)");
})

Promise.resolve().then(() => {
    console.log('5. promise resolved (microtask)')
})

process.nextTick(()=> {
    console.log("6. this is processTick callback (microtask)");
})

fs.readFile(__filename, ()=> {
    console.log("7. File read operation (I/O callback)")
})

crypto.pbkdf2('secret', 'salt', 10000, 64, 'sha512', (err, key)=>{
    if(err) throw err
    console.log('8. pbkdf2 operation completed (CPU intensive operation)');
})

console.log("9. Script ends (Syncronous)");


//Now when you will execute this you will understand the concept of macro and microtasks, this will help you to get priority that which task is going to get execute first, the microtasks are high priority tasks so they are going to get executed first and macrotasks are going to get executed after that
