import React, { useState } from "react";

const Login = () => {
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });
  const [ErrorFields, setErrorFields] = useState({
    errorEmail: "",
    errorPassword: "",
  });
  const { errorEmail, errorPassword } = ErrorFields;
  const { email, password } = signIn;

  const handleSignIn = (e) => {
    const { name, value } = e.target;
    setSignIn({ ...signIn, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    let newError = {
      errorEmail: "",
      errorPassword: "",
    };

    if (!email) {
      newError.errorEmail = "Please Enter a Email..";
      hasError = true;
    }
    if (!password) {
      newError.errorPassword = "Please Enter a Password..";
      hasError = true;
    }

    setErrorFields(newError);
    console.log(signIn);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <dl>
          <dt>Email</dt>
          <dd>
            <input
              type="email"
              placeholder="Enter a email"
              name="email"
              onChange={handleSignIn}
              value={email}
            />
          </dd>
          {errorEmail && <p style={{ color: "red" }}>{errorEmail}</p>}
          <dt>Password</dt>
          <dd>
            <input
              type="password"
              placeholder="Enter a password"
              value={password}
              onChange={handleSignIn}
              name="password"
            />
          </dd>
          {errorPassword && <p style={{ color: "red" }}>{errorPassword}</p>}
        </dl>
        <button>SignIn</button>
      </form>
    </>
  );
};

export default Login;
