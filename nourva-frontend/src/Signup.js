import './Login.css'
import { useState, useRef } from 'react'


export default function Signup() {
    const password1 = useRef()
    const password2 = useRef()
    const btnSubmit = useRef()
    const notMatching = useRef()
    function checkPass(e) {

        const p1 = password1.current.value
        const p2 = password2.current.value
    
        if (p1 !== p2){
            notMatching.current.value = "Passwords do not match!"
        }
        else{

        }
        
    }
    return (
        <>

            <div id="userInfo" class="container">
                <h2>Sign Up</h2>
                <form>
                    <input  type="text" name="username" placeholder="Username" required />
                    <br></br>
                    <input ref={password1} type="password" name="password1" placeholder="Password" required />
                    <br></br>
                    <input ref={password2} type="password" name="password2" placeholder="Confirm Password" required />
                    <br></br>
                    <button ref={btnSubmit} id="btnSubmit"  value="Login" onClick={checkPass}>Create Account</button>
                    <br></br>
                    <label ref={notMatching}></label>
                </form>
            </div>
            <br></br>
            <div class="container2">
                <label>Already have an account? &nbsp;</label>
                <a href="/login">Login</a>
            </div>
        </>

    )
}