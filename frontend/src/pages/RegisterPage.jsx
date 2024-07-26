import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import "../styles/RegisterPage.css"

const RegisterPage = () => {
  const { register, authState } = useContext(AuthContext);
  const { isAuthenticated, error } = authState;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/opportunities');
    }
  }, [isAuthenticated, navigate]);


  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <div className='register-page'>
    <Navbar />
    <div className='register-container'>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Name</label>
          <input type="text" name="name" value={name} onChange={onChange} required />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={onChange} required />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={onChange} required />
        </div>
        {error && <p className='error-message'>{error}</p>}
        <button type="submit">Register</button>
      </form>
      </div>
    </div>
  );
};

export default RegisterPage;