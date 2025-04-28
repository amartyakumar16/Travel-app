import React from 'react';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="page-background">
      <div className="signin-container">
        <div className="signin-form-wrapper">
          <h2>Welcome Back!</h2>
          <p>Please sign in to your account</p>
          <form className="signin-form">
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
