import React, { useState } from "react";
import "../assets/styles/sign-up.css";
import { useNavigate, useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../redux/users/selectors"
import logo from "../assets/img/logo 1.png";
import { Link } from "react-router-dom";
import { clearErrorsAction, signUpError } from "../redux/users/actions";
import {signUp} from "../redux/users/opreations"
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
//import Join from "./SignIn";


export default function SignUp(){
  const history = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state)=>state);
  const errors = getUser(selector).errors;
  const {search} = useLocation();
  
  const initialValues = {
    user_name: "",
    email: "",
    password: "",
    // password_confirmation: "",
  };
  
  const [values, setValues] = useState(initialValues);
  const {user_name, email, password} = values
  const [isLoading, setIsLoading] = useState();

  const navigate = useNavigate()

  const handleInputChange = (e) => {
      const {name, value} =e.target;

      setValues({
           ...values,
           [name]:value,
      })
  }
  
  const onSubmitSignUp = (e) =>{
    e.preventDefault()
      setIsLoading(true);
      dispatch(
        signUp(values,navigate, ()=>{
          dispatch(clearErrorsAction())
        })
      );
      setIsLoading(false);
  };

  return(
    <>
      <div className="wrapper">
          <div className="form-box login">
           <h2>SignUp</h2>
           <form onSubmit={(e)=>onSubmitSignUp(e)}>
             <div className="input-box">
               <span className="icon"></span>
               <ion-icon name="profile"></ion-icon>
               <input
                 type="user_name"
                 required
                 placeholder="user_name"
                 name="user_name"
                 value={user_name}
                 onChange={(e) => handleInputChange(e)}
               />
             </div>
             <br />

             <div className="input-box">
               <span className="icon"></span>
               <ion-icon name="mail"></ion-icon>
               <input
                 type="email"
                 required
                 placeholder="Email"
                 name="email"
                 value={email}
                 onChange={(e) => handleInputChange(e)}
               />
             </div>
             <br />

             <div className="input-box">
               <span className="icon"></span>
               <ion-icon name="lock-closed"></ion-icon>
               <input
                 type="password"
                 required
                 placeholder="Password"
                 name="password"
                 value={password}
                 onChange={(e) => handleInputChange(e)}
               />
             </div>

             <button type="submit" className="btn">
               SignUp
             </button>
             <div className="login-register">
               <p>
                 Have an account?
                 <Link to="join" className="register-link">
                   Login
                 </Link>
               </p>
             </div>
           </form>
         </div>
       </div>
     </>
   );
 } 













// function SignUp() {
//   const [credentials, setCredentials] = useState(initalState);
//   const { user_name, email, password, password_confirmation } = credentials;
//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.user_name]: e.target.value });
//     console.log(credentials);
//   };
//   return (
//     <>
//       <div className="wrapper">
//         <div className="form-box login">
//           <h2>SignUp</h2>
//           <form action="#">
//             <div className="input-box">
//               <span className="icon"></span>
//               <ion-icon name="profile"></ion-icon>
//               <input
//                 type="user_name"
//                 required
//                 placeholder="user_name"
//                 name="user_name"
//                 value={user_name}
//                 onChange={(e) => handleChange(e)}
//               />
//             </div>
//             <br />

//             <div className="input-box">
//               <span className="icon"></span>
//               <ion-icon name="mail"></ion-icon>
//               <input
//                 type="email"
//                 required
//                 placeholder="Email"
//                 name="email"
//                 value={email}
//                 onChange={(e) => handleChange(e)}
//               />
//             </div>
//             <br />

//             <div className="input-box">
//               <span className="icon"></span>
//               <ion-icon name="lock-closed"></ion-icon>
//               <input
//                 type="password"
//                 required
//                 placeholder="Password"
//                 name="password"
//                 value={password}
//                 onChange={(e) => handleChange(e)}
//               />
//             </div>

//             <button type="Submit" className="btn">
//               SignUp
//             </button>
//             <div className="login-register">
//               <p>
//                 Have an account?
//                 <Link to="join" className="register-link">
//                   Login
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignUp;
