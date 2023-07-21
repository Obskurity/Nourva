import React from 'react'
import './Login.css'
import axios from "axios";

const reqLink = "http://127.0.0.1:5000/login";

export default function Login() {

    const LOCAL_STORAGE_KEY = "Nourva.AT";

    function handleOnClick(e){
        e.preventDefault();

        const uName = document.getElementById("username").value;
        const passW = document.getElementById("password").value;

        axios.post(reqLink, {
            username: uName,
            password: passW
        }).then((response) => {
            if(response.status === 200){
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(response.accessToken));
            }
            console.log(response);
        });  
    }

    return (
        <>
            <div class="container">
                <h2>Login</h2>
                <form> 
                    <input type="text" name="username" id="username" placeholder="Username" required />
                    <input type="password" name="password" id="password" placeholder="Password" required />
                    <button onClick={handleOnClick}type="submit" id="btn" value="Login">Login</button>
                </form>
            </div>
            <br></br>
            <div class="container2">
                <label>Don't have an account? &nbsp;</label>
                <a href="/signup">Sign Up</a>
        </div>
        </>
    ) 
}


