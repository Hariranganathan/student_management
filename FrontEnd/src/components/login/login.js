import axios from "axios";
import React from "react";
import { Link, useNavigate } from 'react-router-dom'



export function Login() {

    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault()
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value

        var key = {
            email: username,
            password: password
        }

        if (username == '') {
            alert("please enter the username ")
        }

        else if (password == '') {
            alert("please enter the password")
        }
        else {
            axios.post("http://localhost:3050/login",key)
                .then((res) => {
                     if (res.data.code == '200') {
                        alert("user login successfully") 
                        window.location.href='/dashboard'   
                    }
                    
                    else{
                        alert("invalid_user")
                    }
                })
        }
    }

    <></>
    return (
        <>

            <form onSubmit={handleLogin}>
                <div className="loginMain d-flex justify-content-center align-items-center bg-primary vh-100">
                    <div className="bg-warning p-3  rounded w-25">
                        <h1 className="m-3 text-center">Admin Log In</h1>
                        <div class="form-group ">
                            <label for="firstName">User Name:</label>
                            <input type="text" class="form-control" id="username" name="username" required />
                        </div>
                        <div class="form-group ">
                            <label for="firstName">Password:</label>
                            <input type="password" class="form-control" id="password" name="password" required />
                        </div>
                        <button type="submit" class="btn btn-primary m-2">Log In</button>

                        <Link to ="/" ><button type="submit" class="btn btn-primary m-2">Create Account</button></Link>
                    </div>
                </div>
            </form>
        </>
    )
}