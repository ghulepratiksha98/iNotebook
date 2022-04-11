const express = require('express');
const User = require('../models/User');
const router = express.Router();


//create a user using post: '/api/auth'. doesnt require auth


router.post('/', (req, res)=>{
    // obj = {
    //     a: 'thios',
    //     number: 34
    // }
    // res.json(obj)
    console.log(req.body);
    // res.send("Hello");
   const user = User(req.body);
   user.save()
    res.send(req.body);
} )

module.exports = router