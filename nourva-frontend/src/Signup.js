import React, { useState } from 'react';
import './Login.css';
import axios from "axios";

export default function Signup() {
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handlePassword1Change = (e) => {
        setPassword1(e.target.value);
        setPasswordsMatch(e.target.value === password2);
    };

    const handlePassword2Change = (e) => {
        setPassword2(e.target.value);
        setPasswordsMatch(e.target.value === password1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password1 !== password2) {
            setPasswordsMatch(false);
            return;
        }
        const uName = document.getElementById("username").value;
        const passW = document.getElementById("password").value;

        axios.post("http://127.0.0.1:5000/register", {
            username: uName,
            password: passW
        }).then((response) => {
            if(response.status === 200){
                
            }
            console.log(response);
        });  
    };

    return (
        <>
            <div id="userInfo" className="container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        required
                    />
                    <br />
                    <input
                        type="password"
                        name="password1"
                        placeholder="Password"
                        id="password"
                        value={password1}
                        onChange={handlePassword1Change}
                        required
                    />
                    <br />

                    <input
                        type="password"
                        name="password2"
                        placeholder="Confirm Password"
                        value={password2}
                        onChange={handlePassword2Change}
                        required
                    />
        
                    {!passwordsMatch && (
                        <label style={{ color: 'red' }}>Passwords do not match! <br></br></label>
                    )}
                    <br></br>
                    <button type="submit" id="btnSubmit" disabled={!passwordsMatch}>
                        Create Account
                    </button>
                </form>
            </div>
            <br />
            <div className="container2">
                <label>Already have an account? &nbsp;</label>
                <a href="/login">Login</a>
            </div>
        </>
    );
}