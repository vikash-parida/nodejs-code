console.log('start');

setImmediate(()=>{
    console.log('setimmediate' + 5+5);
})




setTimeout(()=>{
    console.log('setTimeout' + 4 + 5);
})


process.nextTick(()=>{
    console.log('process.nextTick' + 5 + 12);
}) 

setInterval(()=>{
    console.log('setInterval' + 55555555)
},0)