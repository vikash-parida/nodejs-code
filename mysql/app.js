const express = require('express');
const app = express();
const db = require('./models');
const indexRouter = require('./routes/index');


app.use(express.json());
app.use(express.urlencoded({ extended:true}))



app.use('/api',indexRouter);


db.sequelize.sync({force:false,alter:true})
.then(() => {console.log("db successfully synced")})
.catch(()=>{console.log("err while connecing to db")});

app.listen(3080,()=>{
    console.log("listening on port 3080");
})