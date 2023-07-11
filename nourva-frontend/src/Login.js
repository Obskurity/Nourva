import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <>
            <div class="container">
                <h2>Login</h2>
                <form>
                    <input type="text" name="username" placeholder="Username" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit" value="Login">Login</button>
                </form>

            </div>
            <div class="container2">
                <label>Don't have an account? &nbsp</label>
                <a href="https://www.google.com/"> Sign Up</a>
        </div>
        </>
    )
}
