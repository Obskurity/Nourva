import React, { useState } from 'react';
import './Login.css';

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
        // Passwords match, continue with form submission or other logic
        // ...
    };

    return (
        <>
            <div id="userInfo" className="container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                    />
                    <br />
                    <input
                        type="password"
                        name="password1"
                        placeholder="Password"
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