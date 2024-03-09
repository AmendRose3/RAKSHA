import React from 'react';
import './LoginSignup.css';

const HomePage = () => {
  return (
    <div className='container'>
      {/* Header */}
      <header className="header">
        <h1>Raksha</h1>
        <h4>Lets Save Lives!</h4>
      </header>
      
      {/* Main Content */}
      <div className='content'>
        <div className='text'>What would you like to do?</div>
        <div className='buttons'>
          <button className='emergency-btn'>Emergency Call</button><br></br>
          <br></br>
          <button className='appointment-btn'>Make an Appointment</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Raksha. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
