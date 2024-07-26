import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "../styles/OpportunitiesPage.css"

const OpportunitiesPage = () => {
  const [opportunities, setOpportunities] = useState([]);
  const { authState } = useContext(AuthContext);
  const { isAuthenticated } = authState;

  useEffect(() => {
    const fetchOpportunities = async () => {
      const res = await axios.get('http://localhost:8080/api/v1/opportunity/');
      setOpportunities(res.data);
    };
    fetchOpportunities();
  }, []);

  return (
    <div className='opportunities-page'>
    <Navbar />
    <div className='opportunities-container'>
      <h1>Opportunities</h1>
      <ul>
        {opportunities.map((opportunity) => (
          
          <li key={opportunity._id}>
            <h2>{opportunity.profileName}</h2>
            <p>{opportunity.companyName}</p>
            <p>{opportunity.stipend.salary} {opportunity.stipend.currency} {opportunity.stipend.salaryType}</p>
            <p>{opportunity.location.map((loc, index) => (
                <span key={index}>
                  {loc.string}
                  {index !== opportunity.location.length - 1 && ' | '}
                </span>
              ))}
            </p>
            <p>{opportunity.duration}</p>
            <p>{opportunity.startDate}</p>
            {isAuthenticated ? (
              <Link to={`/apply/${opportunity._id}`}>Apply</Link>
            ) : (
              <Link to="/login">Login to Apply</Link>
            )}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default OpportunitiesPage;