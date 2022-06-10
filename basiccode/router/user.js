const express = require('express');
const route = express.Router();
const user = require('../api/controller/user-contriller')
const errorHandel = require('../api/middelware/errorHandle')


route.post('/createUser',user.AddUser);
route.get('/:id',errorHandel,user.updateUser);















module.exports = route;