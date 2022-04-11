const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();
// Create a User using: POST "/api/auth/". Doesn't require Auth
router.post('/', [
body('name', 'Enter a valid name').isLength({ min: 3 }),
body('email', 'Enter a valid email').isEmail(),
body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),],
(req, res)=>{ 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      }).then(user => res.json(user)) //cant use the same mail
      .catch(err=> {console.log(err)
      res.json({error: 'Please enter a unique value for email', message: err.message})})
    //  console.log(req.body);
    // const user = User(req.body);
    // user.save()
    // res.send(req.body);
})


module.exports = router 


