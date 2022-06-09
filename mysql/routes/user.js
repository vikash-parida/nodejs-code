const express = require('express');
const router = express.Router();
const user = require('../controller/user');
const {userValidate} = require('../validation/user')

router.get('/',user.getUsers);

router.post('/',user.addUsers);

router.put('/:id',user.updateuser);

router.get('/:id',user.getById);

router.delete('/:id',user.deleteusers);
 
module.exports = router ;
