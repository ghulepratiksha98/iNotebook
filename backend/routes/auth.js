const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();
// Create a User using: POST "/api/auth/createUser". Doesn't require Auth
router.post('/createuser', [
body('name', 'Enter a valid name').isLength({ min: 3 }),
body('email', 'Enter a valid email').isEmail(),
body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),],
async(req, res)=>{ 
    //If there are errors return bad errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check whether the user wih his email exist already
    try {
        
   
    let user = await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error: "sorry a user with his email already exist"});
    }
     user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      })
    //   .then(user => res.json(user)) //cant use the same mail
    //   .catch(err=> {console.log(err)
    //   res.json({error: 'Please enter a uniue value for email', message: err.message})})
    //  console.log(req.body);
    // const user = User(req.body);
    // user.save()
    // res.send(req.body);
    // res.json({"Nice": "nice"})
    res.json (user)
} catch (error) {
    console.log(error.message);
    res.status(500).send("some error occured");
        
}
})


module.exports = router 


