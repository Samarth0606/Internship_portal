import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import "../styles/LoginPage.css"

const LoginPage = () => {
  const { login, authState, clearError } = useContext(AuthContext);
  const { isAuthenticated, error } = authState;
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/opportunities');
    }
    clearError();
  }, [isAuthenticated, navigate]);

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    clearError();
    login(formData);
  };

  return (
    <div className='login-page'>
    <Navbar />
    <div className='login-container'>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={onChange} required />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={onChange} required />
        </div>
        {error && <p className='error-message'>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
    </div>
  );
  
};

export default LoginPage;