import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import baseURL from "../services/config";

const Signup = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const handleSubmit = () => {
    const payload = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      number: number,
      password: password,
      cpassword: cpassword,
    };
    console.log(payload);
    axios({
      url: `${baseURL}/auth/signup`,
      method: "POST",
      data: payload,
    })
      .then((response) => {
        console.log("Response is :", response.data._id);

        localStorage.setItem("userid",response.data._id);
        navigate('/');

      })
      .catch(() => {
        console.log("Error occured");
      });
  };

  return (
    <>
      <div>
        <form className="Box-1">
          <h1 className="name">Sign up</h1>
          <div className="row1">
            <input
              type="text"
              id="firstname"
              placeholder="First Name"
              required
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
            />
            <input
              type="text"
              id="lastname"
              placeholder="Last Name"
              required
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
            />
          </div>
          <div className="row1">
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="number"
              id="number"
              placeholder="Phone Number"
              required
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            />
          </div>
          <div className="row1">
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              id="cpassword"
              name="cpassword"
              required
              onChange={(e) => setCpassword(e.target.value)}
              value={cpassword}
            />
          </div>
          <button type="button" className="submit" onClick={handleSubmit}>
            Submit
          </button>
          <p style={{ color: "white" }}>
            Have an account?{" "}
            <a style={{ color: "black" }} href="/login">
              Click here
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
