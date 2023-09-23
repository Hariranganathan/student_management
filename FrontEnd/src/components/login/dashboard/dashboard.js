import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import "./dashboard.css"

export function Dashboard() {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3050/getall')
      .then((response) => { setData(response.data) })
      .catch((error) => console.log(error))
  })


  const handleDelete = async (student_id) =>{
    try {
      const response = await axios.delete(
        "http://localhost:3050/delete/"+student_id
      );

      if (response.data.code == 200) {
        alert(response.data.message)
      }
    } catch (error) {
      console.error(error);
    }
  }
 

  return (
    <>
      <div>
        <div className="justify-content-center align-items-center bg-info-subtle" style={{ width: '100%' }}>
          <nav class="navbar bg-info">
            <div class="container-fluid justify-content-center">
              <span class="navbar-brand mb-0 h1 text-white">
                Welcome to Student Management
              </span>
            </div>
          </nav>
          <marquee>
            <h2 className="text-dark">
              Dr.G.R.D College of Technology (Student Details)
            </h2>
          </marquee>
        </div>


        <div className="row content   p-3">
          <h2 className="text-center" >Student's List</h2>
          <div className="d-flex justify-content-end mb-2">
            <Link to={'/createstudent'} className='btn btn-success'>Add Student +</Link>
          </div>
              
          <table className="line">
            <thead className="thead"  >
            <tr>
                <th>Student_id</th>
                <th>Name</th>
                <th>Mobile_No</th>
                <th>Email</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Marks</th>
                <th>Result</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            
            <tbody>
              {data.map((student, index) => {
                return (
                  <tr key={index}>
                    <td>{student.student_id}</td>
                    <td>{student.name}</td>
                    <td>{student.phone}</td>
                    <td>{student.email}</td>
                    <td>{student.gender}</td>
                    <td>{student.dob}</td>
                    <td>{student.mark}</td>
                    <td>{student.result}</td>
                    <td>{student.location}</td>

                    <Link to={`/updateStudent/${student.student_id}`} className="btn btn-sm btn-primary">Edit</Link>

                    <button onClick={() => {handleDelete(student.student_id)}} className="btn btn-sm btn-danger mx-2">Delete</button>
                  </tr>
                  
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;