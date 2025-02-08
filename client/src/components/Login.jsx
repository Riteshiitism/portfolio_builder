import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import baseURL from "../services/config";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  let [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setloading(true);
    var payload = {
      email: email,
      password: password,
    };
    axios({
      url: `${baseURL}/auth/login`,
      method: "POST",
      data: payload,
    })
      .then((response) => {
        localStorage.setItem("userid",response.data._id);
        navigate('/');
      })
      .catch((error) => {
        setloading(false);
        console.log(error);
        console.log("Error occured");
      });
  };


  return (
    <>

      <div style={{ display: "flex" }}>
        <form className="Box-1 login">
          <h1>Log in</h1>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email id"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" className="submit" onClick={handleLogin}>
            {loading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="sr-only">Loading...</span>
              </>
            ) : (
              <>Submit</>
            )}
          </button>
          <p style={{ color: "white" }}>
            Don't have an account?{" "}
            <a style={{ color: "black" }} href="/signup">
              Click here
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
