import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './LoginSignup.css';
import userIcon from "../assets/person.png";
import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/password.png";

const LoginSignup = () => {
  const navigate = useNavigate(); // Hook to navigate 

  const handleSignUp = (event) => {
    event.preventDefault(); 
   
    navigate('/login'); // Redirect to login page when sign up function is pressed
  };

  return (
    <div className='container'>
      {/* Header */}
      <header className="header">
        <h1>Raksha</h1>
        <h4>Lets Save Lives!</h4>
      </header>
      
      {/* Signup Form */}
      <div className='signup-form'>
        <div className='text'>SIGN UP</div>
        <form onSubmit={handleSignUp}> {/* Call handleSignUp function on form submission defined aboveee */}
          <div className='form-group'>
            <label htmlFor='username'>Aadhar Number:</label>
            <input type='text' id='username' name='username' placeholder='Enter your Aadhar Number' />
            <img src={userIcon} alt='User Icon' />
          </div>
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
          
          <button type='submit'>Sign Up</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 RUSHHOURS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LoginSignup;
