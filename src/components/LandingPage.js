// LandingPage.js
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';
import BrokerForm from './BrokerForm';
import Navbar from './Navbar';

const LandingPage = () => {
  const location = useLocation();

  const [showBrokerForm,setShowBrokerForm] = useState(false);
  const [accessToken,setAccessToken]=useState('');

  useEffect(() => {
    // Extract the access token from the query parameters
    const accessToken = new URLSearchParams(location.search).get('token');
    setAccessToken(accessToken)

    // Make additional requests or set up your application with the obtained access token
    // For example, you might want to fetch user data using the token
    // axios.get('http://your-server-url/fetch-user-data', {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // })
    //   .then(response => {
    //     // Handle user data
    //   })
    //   .catch(error => {
    //     // Handle error
    //   });
  }, [location.search]);

  console.log(accessToken);

  return (
    <div >
        
        </div>
  );
};

export default LandingPage;
