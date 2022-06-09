const express = require('express');
const cron = require('node-cron');
const shell = require('shelljs');
const app = express();


app.get('/api/',(req,res)=>{
 res.send("This is a example of  cron package")
});
        
cron.schedule(`${1} * * * * *`,()=>{
 console.log("hello world")
 })

app.listen(3080,(error)=>{
console.log('server is start on 3000')
});