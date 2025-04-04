import React, { useState } from 'react';
import './login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setErrorMessage('Both email and password are required');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;