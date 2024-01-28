import React, {useState} from "react";
import "../assets/styles/join.css";
import logo from "../assets/img/logo 1.png";
import search from "../assets/img/./search.png";
import SignUp from "./SignUp";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/users/opreations";
import { clearErrorsAction } from "../redux/users/actions";
const initalState={
  email:"",
  password:""
}
function Join() {
  const [credentials , setCredentials] = useState(initalState)
  const {email, password} = credentials
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e)=>{
  setCredentials({...credentials, [e.target.name]:e.target.value})
   console.log(credentials)
  }

  const handleSignIn = (e)=>{
    e.preventDefault()
    if(!email || !password){
      return null;
    }
    dispatch(signIn(credentials, navigate, ()=>{
      dispatch(clearErrorsAction())
    }))
  }
  return (
    <>
      

      <div className="wrapper">
        <div className="form-box login">
          <h2>Login</h2>
          <form onSubmit={(e)=>handleSignIn(e)}>
            <div className="input-box">
              <span className="icon"></span>
              <ion-icon name="mail"></ion-icon>
              <input type="email" required placeholder="Email" name="email" value={email}  onChange={(e)=>handleChange(e)} />
             
            </div>
            <br />

            <div className="input-box">
              <span className="icon"></span>
              <ion-icon name="lock-closed"></ion-icon>
              <input type="password" required placeholder="Password" name="password" value={password}  onChange={(e)=>handleChange(e)} />
             
            </div>
            <div className="remember-forgot"> 
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <Link to="#">Forgot Password?</Link>
            </div>

            <button type="Submit" className="btn">
              Login
            </button>
            <div className="login-register">
              <p>
                Don't have an account?
                <Link to="/SignUp" className="register-link">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
     
    </>
  );
}

export default Join;
