import axios from "axios";
import React from "react";
// import { useNavigate } from "react-router-dom";

function CreateStudent() {

  // const navigate = useNavigate();
  const handleSubmit = async () => {

    
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    let dob = document.getElementById("dob").value;
    let mark = document.getElementById("mark").value;
    let result = document.getElementById("result").value;
    let location = document.getElementById("location").value;

    

    const key = {
       
      name:name,
      phone: phone,
      email: email,
      gender: gender,
      dob: dob,
      mark: mark,
      result: result,
      location: location,
  };

    try {

      

      const response = await axios.post(
        "http://localhost:3050/createStudent",
        key
      );

      if (response.data.code == 200) {

        const timestamp = Date.now(); // You can use a timestamp as the ID
        const studentRecord = {
          id: timestamp,
          data: key,
        };
        

        alert(response.data.message);
         window.location.href='/dashboard'
        
      }
    } catch (error) {
      alert(JSON.stringify(error));
      console.error(error);
    }
  };

  return (
    <>
      <div className="d-flex bg-primary-subtle justify-content-center align-items-center">
        <div className="w-50 bg-secondary rounded p-3">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center ">Add Student</h2>
             
            <div className="mb-2">
              <label>
                <h4>Name</h4>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter the Name"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label>
                <h4>Phone</h4>
              </label>
              <input
                id="phone"
                type="text"
                placeholder="Enter the Phone Number"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label>
                <h4>Email</h4>
              </label>
              <input
                id="email"
                type="text"
                placeholder="Enter the Email"
                className="form-control"/>
            </div>
            <div className="mb-4">
              <label>
                <h4>Gender</h4>
              </label>
              <input
                id="gender"
                type="text"
                placeholder="Enter the Gender"
                className="form-control"
              />
            </div>
            <div className="mb-4">
              <label>
                <h4>Date Of Birth</h4>
              </label>
              <input
                id="dob"
                type="date"
                placeholder="year/month/date"
                className="form-control"
              />
            </div>
            <div className="mb-4">
              <label>
                <h4>Mark</h4>
              </label>
              <input
                id="mark"
                type="number"
                placeholder="Enter the Mark"
                className="form-control"
              />
            </div>
            <div className="mb-4">
              <label>
                <h4>Result</h4>
              </label>
              <input
                id="result"
                type="text"
                placeholder="Enter the Result"
                className="form-control"
              />
            </div>
            <div className="mb-4">
              <label>
                <h4>Location</h4>
              </label>
              <input
                id="location"
                type="text"
                placeholder="Enter the Location"
                className="form-control"
              />
            </div>

            <button className="btn btn-success justify-content-end" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}


export default CreateStudent;



