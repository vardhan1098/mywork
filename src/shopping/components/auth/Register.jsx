import React, { useState } from "react";
import Modal from "./Modal";
import Login from "./Login";

const Register = ({ closeModal }) => {
  const [isRegister, setIsRegister] = useState(true); 
  const [details, setDetails] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    erroruserName: "",
    erroremail: "",
    errorpassword: "",
  });

  // Handle input changes for Register & Login
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
    setError({ ...error, [`error${name}`]: "" });
  };

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignIn({ ...signIn, [name]: value });
  };

  // Register Validation
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    let newErrors = { erroruserName: "", erroremail: "", errorpassword: "" };

    if (!details.userName.trim()) {
      newErrors.erroruserName = "Please enter a username";
      hasError = true;
    }
    if (!details.email.trim()) {
      newErrors.erroremail = "Please enter an email";
      hasError = true;
    }
    if (!details.password.trim()) {
      newErrors.errorpassword = "Please enter a password";
      hasError = true;
    }

    setError(newErrors);
    if (hasError) return;

    console.log("Registered Successfully:", details);
    closeModal();
  };

  // Login Validation
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Details:", signIn);
    closeModal();
  };

  return (
    <Modal isOpen={true} handleClose={closeModal}>
      {isRegister ? (
        <div>
          <h2>Register</h2>
          <form onSubmit={handleRegisterSubmit}>
            <dl>
              <dt>UserName:</dt>
              <dd>
                <input
                  type="text"
                  placeholder="Enter a UserName.."
                  value={details.userName}
                  name="userName"
                  onChange={handleChange}
                />
                {error.erroruserName && (
                  <p style={{ color: "red" }}>{error.erroruserName}</p>
                )}
              </dd>

              <dt>Email:</dt>
              <dd>
                <input
                  type="email"
                  placeholder="Enter an Email"
                  onChange={handleChange}
                  value={details.email}
                  name="email"
                />
                {error.erroremail && (
                  <p style={{ color: "red" }}>{error.erroremail}</p>
                )}
              </dd>

              <dt>Password:</dt>
              <dd>
                <input
                  type="password"
                  placeholder="Enter a password"
                  value={details.password}
                  name="password"
                  onChange={handleChange}
                />
                {error.errorpassword && (
                  <p style={{ color: "red" }}>{error.errorpassword}</p>
                )}
              </dd>
            </dl>

            <button type="submit">Register</button>
          </form>
          <p>
            Already Registered?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setIsRegister(false)}
            >
              Sign In
            </span>
          </p>
        </div>
      ) : (
        <div>
          <h2>Sign In</h2>
          <div>
            <Login />
          </div>
          <p>
            Don't have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setIsRegister(true)}
            >
              Register
            </span>
          </p>
        </div>
      )}
    </Modal>
  );
};

export default Register;
