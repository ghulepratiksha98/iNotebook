const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'Subhankarisab$oy';
// Route 1 :Create a User using: POST "/api/auth/createUser". Doesn't require Auth
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
    const salt = await bcrypt.genSalt(10);
    secPass = await bcrypt.hash(req.body.password,salt)
    //create a new user
     user = await User.create({
        name: req.body.name,
        password: secPass,
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
    const data = {
        user:{
          id: user.id
        }
      }
    const authtoken = jwt.sign(data, JWT_SECRET);
    // console.log(jwtData);
    // res.json (user)
    res.json({authtoken})
} catch (error) {
    console.log(error.message);
    res.status(500).send("some error occured");
        
}
})

//Route 2:  Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [ 
    body('email', 'Enter a valid email').isEmail(), 
    body('password', 'Password cannot be blank').exists(), 
  ], async (req, res) => {
  
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const {email, password} = req.body;
   
    try {
      let user = await User.findOne({email});
      console.log(user);
      
      if(!user){
        return res.status(400).json({error: "Please try to login with correct credentials  "});
      }
      
      const passwordCompare = await bcrypt.compare(password, user.password);
     
      if(!passwordCompare){
        return res.status(400).json({error: "Please try to login with correct credentials password"});
      }
  
      const data = {
        user:{
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({authtoken})
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  
  
  })
  


//Route 3:  Get logging User details  using: POST "/api/auth/login".  login required
router.post('/getuser', fetchuser,  async (req, res) => {

    try {
      userId = req.user.id;
      const user = await User.findById(userId).select("-password")
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })
  module.exports = router
module.exports = router
