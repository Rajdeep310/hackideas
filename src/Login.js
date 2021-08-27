import React from 'react'
import './App.css';

function Login({email ,password,setEmail ,setPassword ,handleLogin ,handleSignup ,hasAccount ,setHasAccount}) {
    return (
        <>
            <div className='header'><h2>HACK IDEAS</h2></div>
            <div className='log-head'>lOGIN</div>
            <div className='login'>
                <input placeholder="Email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input placeholder="Password" type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className='login-next'>
                {hasAccount ? 
                
                (
                    <>
                    <button className='log-btn' onClick={handleLogin}>Sign in</button>
                    <p className='log-p'>Dont have an account? <span className='log-span' onClick={()=>setHasAccount(!hasAccount)}> Sign Up</span></p>
                    </>
                )

                : 
                
                (
                    <>
                    <button className='log-btn'  onClick={handleSignup}>Sign Up</button>
                    <p className='log-p'>Already have an account? <span className='log-span' onClick={()=>setHasAccount(!hasAccount)}> Sign In</span></p>
                    </>
                )
                
                
                }
            </div>
        </>
    )
}

export default Login