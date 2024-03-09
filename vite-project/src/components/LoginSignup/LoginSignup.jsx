import React from 'react';
import './LoginSignup.css';
import userIcon from "../assets/person.png";
import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/password.png";

const LoginSignup = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>SIGN UP</div>
          <img src={userIcon} alt='User Icon' />
          <img src={emailIcon} alt='Email Icon' />
          <img src={passwordIcon} alt='Password Icon' />
        
      </div>
    </div>
  );
};

export default LoginSignup;
