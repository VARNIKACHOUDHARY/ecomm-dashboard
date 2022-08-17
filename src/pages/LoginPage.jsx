import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";


const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const auth = getAuth();


    const login= async()=>{

        try {
            
           const result =await signInWithEmailAndPassword(auth,email, password);
           localStorage.setItem('currentUser' ,JSON.stringify(result))
           window.location.href='/'
            alert('Login success');
            
        } catch (error) {
            console.log(error)
            alert('Login failed')
            
            
        }
    }



    return (

        <div className="login-parent">
            
            <div className="row justify-content-center">
            <div className="col-md-4 z1">

                    <div className="login-form">
                        <h2>Login</h2>
                        <hr></hr>

                        <input type="text" className="form-control" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        <input type="text" className="form-control" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                        

                        <button className="my-3" onClick={login}>LOGIN</button>
                        

                        <hr />
                        <Link to='/register'>Click Here To Register</Link> 
                    </div>

                </div>

                <div className="col-md-5 z1">
                    <lottie-player 
                     src="https://assets9.lottiefiles.com/packages/lf20_yr6zz3wv.json"
                     background="transparent" 
                     speed="1"  
                     loop  
                     autoplay
                     ></lottie-player>

                </div>

                
            </div>

            <div className="login-bottom">

            </div>
        </div>

    );
}

export default LoginPage