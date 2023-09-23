import React  from "react";
import axios from 'axios'
import './grooming.css';
import { Link } from 'react-router-dom'

export function Grooming() {

    function handlelogin (event){
        event.preventDefault()
        var username = document.getElementById("username").value
        var lastname = document.getElementById("lastname").value
        var phone = document.getElementById("phone").value
        var email = document.getElementById("email").value
        var city = document.getElementById("city").value
        var state = document.getElementById("state").value
        var password = document.getElementById("password").value

        var key = {
            username: username,
            lastname: lastname,
            phone: phone,
            email: email,
            city: city,
            state: state,
            password: password
        };


        if (username === '') {
            alert("please enter the username ")
        }

        else if (lastname === '') {
            alert("please enter the Lastname")
        }

        else if (phone === '') {
            alert("please enter the Phone Number")
        }

        else if (email === '') {
            alert("please enter the Email")
        }

        else if (city === '') {
            alert("please enter the City")
        }

        else if (state === '') {
            alert("please enter the State")
        }

        else if (password === '') {
            alert("please enter the password")
        }
        else {
            axios.post("http://localhost:3050/register",key)
            .then((res)=>{
                if(res.data.status==="error"){
                    alert("data are not inserted")
                    window.location.reload()
                }
                else if(res.data.status==="Success"){
                    alert("data are inserted successfully")
                    window.location.href='/Login'
                }
            })

        }
    }


        return (
            <>
                <div>

                    <div class="d-flex justify-content-center align-items-center bg-warning vh-100">
                    
                        <form onSubmit={handlelogin}>
                        <div className="bg-primary text-light p-3 rounded ">
                            <h2 className="text-light m-3"> Admin Registration </h2>
                            <div class="form-group ">
                                <label for="firstName">User Name : </label>
                                <input type="text" class="form-control" id="username" name="username" required />
                            </div>
                            <div class="form-group">
                                <label for="lastName">Last Name : </label>
                                <input type="text" class="form-control" id="lastname" name="lastname" required />
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone : </label>
                                <input type="tel" class="form-control" id="phone" name="phone" required />
                            </div>
                            <div class="form-group">
                                <label for="email">Email : </label>
                                <input type="email" class="form-control" id="email" name="email" required />
                            </div>
                            <div class="form-group">
                                <label for="city">City :</label>
                                <input type="text" class="form-control" id="city" name="city" required />
                            </div>
                            <div class="form-group">
                                <label for="state">State : </label>
                                <input type="text" class="form-control" id="state" name="state" required />
                            </div>
                            <div class="form-group">
                                <label for="password">Password : </label>
                                <input type="password" class="form-control" id="password" name="password" required />
                            </div>
                            <button type="submit" class="btn btn-warning m-2">Register</button> 

                            <h5>Already Have a Account ? Please Log In </h5>

                            <Link to ="/login" ><button type="submit" class="btn btn-warning m-2">Log In</button></Link>
                        </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }

