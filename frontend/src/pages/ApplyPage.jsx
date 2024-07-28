import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "../styles/ApplyPage.css"

const ApplyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);
  const { isAuthenticated, loading } = authState;
  const [ error, setError ] = useState('');
console.log(authState , '111')
  useEffect(() => {
    if (!isAuthenticated && !loading) {
      navigate('/login');
    }
  }, [isAuthenticated, loading, navigate]);

  const applyForOpportunity = async () => {
    try {
      await axios.post(`http://localhost:8080/api/v1/opportunity/apply/${id}`);
      navigate('/opportunities');
    } catch (err) {
      setError('already applied')
      console.error(err);
    }
  };

  return (
    <div className='apply-page'>
    <Navbar />
    <div className='apply-container'>
      <h1>Apply for Opportunity</h1>
      <p>Are you sure you want to apply for this opportunity?</p>
      <button onClick={applyForOpportunity}>Apply</button>
      {error ? <h1>{error}</h1> : null }
    </div>
    </div>
  );
};

export default ApplyPage;