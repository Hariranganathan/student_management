import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateStudent() {
  const { student_id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [mark, setMark] = useState("");
  const [result, setResult] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const storageKey = `studentData_${student_id}`;
    const storedData = localStorage.getItem(storageKey);

    console.log("student_id:", student_id);
    console.log("storedData:", storedData);

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setName(parsedData.name);
      setPhone(parsedData.phone);
      setEmail(parsedData.email);
      setGender(parsedData.gender);
      setDob(parsedData.dob);
      setMark(parsedData.mark);
      setResult(parsedData.result);
      setLocation(parsedData.location);
    }
  }, [student_id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const key = {
      name: name,
      phone: phone,
      email: email,
      gender: gender,
      dob: dob,
      mark: mark,
      result: result,
      location: location,
    };

    if (name === "") {
      alert("Enter the name");
    } else if (phone === "") {
      alert("Enter the phone number");
    } else if (email === "") {
      alert("Enter the email");
    } else if (gender === "") {
      alert("Enter the gender");
    } else if (dob === "") {
      alert("Enter the dob");
    } else if (mark === "") {
      alert("Enter the mark");
    } else if (result === "") {
      alert("Enter the result");
    } else if (location === "") {
      alert("Enter the location");
    } else {
      const storageKey = `studentData_${student_id}`;

      localStorage.setItem(storageKey, JSON.stringify(key));
      axios
        .put("http://localhost:3050/updateStudent/" + student_id, key)
        .then((res) => {
          if (res.data.status == "error") {
            alert("Data is Not Updated ");
          } else if (res.data.status == "success") {
            alert("Successfully updated");
            navigate("/dashboard");
          }
        });
    }
  };

  return (
    <>
      <div className="d-flex vh-70 bg-secondary justify-content-center align-items-center">
        <div className="w-50 bg-primary-subtle rounded p-3">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center">Update Student</h2>

            <div className="mb-2">
              <label>
                <h4>Name</h4>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter the Name"
                className="form-control"
                value={name}
                onChange={(up) => setName(up.target.value)}
              />
              <br />
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
                value={phone}
                onChange={(up) => setPhone(up.target.value)}
              />
              <br />
            </div>

            <div className="mb-2">
              <label>
                <h4>Email</h4>
              </label>
              <input
                id="email"
                type="text"
                placeholder="Enter the Email"
                className="form-control"
                value={email} onChange={(up) => setEmail(up.target.value)}
              /><br />
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
                value={gender} onChange={(up) => setGender(up.target.value)}
              /><br />
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
                value={dob} onChange={(up) => setDob(up.target.value)}
              /><br />
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
                value={mark} onChange={(up) => setMark(up.target.value)}
              /><br />
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
                value={result} onChange={(up) => setResult(up.target.value)}
              /><br />
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
                value={location}
                onChange={(up) => setLocation(up.target.value)}
              />

            </div>

            <button className="btn btn-success justify-content-end" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateStudent;
