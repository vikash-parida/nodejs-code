const express = require('express');
const router = express.Router();
const profile =require('../controller/profile');



router.get('/',profile.getprofile);

router.post('/',profile.addprofile);

router.put('/:id',profile.updateprofile);

router.get('/:id',profile.findprofile);

router.delete('/:id',profile.deleteprofile);
 

module.exports = router ;
