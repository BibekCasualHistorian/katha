import React from "react";

const LoginPage = () => {
  return (
    <form>
      <h1>Login</h1>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="email">Password:</label>
        <input type="password" name="password" id="password" />
      </div>
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
