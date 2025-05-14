
import React, { useState } from 'react';
import './Counter.css'
function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(prev => !prev);
  };

  return (
    <div className='Counter'>
      <button onClick={handleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <p>{isLoggedIn ? 'You are logged in!' : 'Please log in.'}</p>
    </div>
  );
}

export default Login;
