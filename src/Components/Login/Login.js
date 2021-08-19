import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../config/Config'

import "./Login.css"

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            props.history.push('/');
        }).catch(err => setError(err.message));
    }

    return (
        
        <div className="">
            <div className='wrapper'>
            <div className="title">Login</div>
            
            <form autoComplete="off" className='' onSubmit={login}>
            <div className="field">
                <label >Email</label>
                <input type="email"  required 
                onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
                
            <div className="field">
                <label htmlFor="password">Password</label>
                <input type="password" required
                onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div className="content">
                <div className="checkbox    ">
                    <label for="remember-me">Remember me</label>
                    <input type="checkbox" id="remember-me"/>
                </div>
            <div class="pass-link">
                <a href="#">Forgot password?</a>
            </div>            
            </div>
            <div class="field">
               <input type="submit" value="Login"/>
            </div>
            </form>
            {error && <span className='error-msg'>{error}</span>}
            <div className="signup-link">
             Don't have an account? Register <Link to="signup"> Here</Link>            
            </div>
            
        </div>
            







        </div>
    )
}
