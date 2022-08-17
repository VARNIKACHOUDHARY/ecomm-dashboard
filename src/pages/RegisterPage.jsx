import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const auth = getAuth();
   


    const register=()=>{

        try {
            
            createUserWithEmailAndPassword(auth,email, password)
            
            alert('Registration success')
            
        } catch (error) {
            console.log(error)
            alert('Registration failed')
            
            
        }
    }

    return (

        <div className="register-parent">
            <div className="register-top">

            </div>
            <div className="row justify-content-center">

                <div className="col-md-5">
                    <lottie-player 
                     src="https://assets9.lottiefiles.com/packages/lf20_yr6zz3wv.json"
                     background="transparent" 
                     speed="1"  
                     loop  
                     autoplay
                     ></lottie-player>

                </div>

                <div className="col-md-4 z1">

                    <div className="register-form">
                        <h2>Register</h2>
                        <hr></hr>

                        <input type="text" className="form-control" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        <input type="text" className="form-control" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                        <input type="text" className="form-control" placeholder="C-Password" value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}} />

                        <button className="my-3" onClick={register}>REGISTER</button>

                        <hr />
                        <Link to='/login'>Click Here To Login</Link> 

                    </div>

                </div>
            </div>
        </div>

    );
}

export default RegisterPage