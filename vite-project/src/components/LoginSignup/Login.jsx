import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './LoginSignup.css';
import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/password.png";

const Login = () => {
    const navigate = useNavigate(); 

  const handleLogin = (event) => {
    event.preventDefault();
  
    navigate('/HomePage');
  };

  return (
    <div className='container'>
      {/* Header */}
      <header className="header">
        <h1>Raksha</h1>
        <h4>Lets Save Lives!</h4>
      </header>
      
      {/* Login Form */}
      <div className='signup-form'>
        <div className='text'>LOGIN</div>
        <form onSubmit={handleLogin}>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' placeholder='Enter your email' />
            <img src={emailIcon} alt='Email Icon' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' placeholder='Enter your password' />
            <img src={passwordIcon} alt='Password Icon' />
          </div>
          
          <button type='submit'>Login</button>
          
        </form>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Raksha. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
