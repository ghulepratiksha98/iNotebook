import React, { useState } from 'react';
import { useHistory, useNavigate } from "react-router-dom";

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name:"" , email: "", password: "" , cpassword:""})
    const navigate = useNavigate() 
    const handleSubmit =  async(e) => {
        e.preventDefault();
        const{name,email,password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:credentials.name, email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
           navigate("/");
           props.showAlert("Account created successfully", "success")

        }
        else{
            props.showAlert("Invalid credencials", "danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div>
      Signup
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp"  onChange={onChange} value={credentials.name}/>

        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"  onChange={onChange} value={credentials.email}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name='password' aria-describedby="emailHelp" onChange={onChange}  value={credentials.password} minLength={5} required/>

        </div>
        <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="cpassword" name='cpassword' aria-describedby="emailHelp" onChange={onChange}  value={credentials.cpassword} minLength={5} required/>

        </div>
        


        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  );
}

export default Signup;
