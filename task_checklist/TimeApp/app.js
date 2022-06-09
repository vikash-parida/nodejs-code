const express = require('express');
const app = express();
const Port = 3080;

app.use(express.json());



app.get('/Time-zone', (req, res) => {
function calculateTimeZone(city,offset){
const D = new Date();
// console.log(D);
const utc = D.getTime()+(D.getTimezoneOffset() * 60000);
// console.log(uts);
const nd = new Date(utc +(3600000 * offset));
// console.log(nd);
return `The Local time n ${city} is ${nd.toLocaleString()}`;
}
cityTime = {
    mumbai:calculateTimeZone("mumbai",+5.5),
    Myanmar:calculateTimeZone("Myanmar",+6),
    tokyo:calculateTimeZone("tokyo",+9),
    LasVegas:calculateTimeZone("Las vegas",-7),
    Egypt:calculateTimeZone("Egypt",+2)
}
console.log(cityTime.mumbai);
res.json(cityTime);
})



app.listen(Port,(err)=>{
    console.log("listening server on port...."+ Port)
});