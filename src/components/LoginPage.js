
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  //client_id Client ID: C117400

  const redirectToAngelBroking = () => {
    
    const angelBrokingLoginUrl = 'https://smartapi.angelbroking.com/publisher-login?api_key=Z5TVST9k';
    
    window.location.href = angelBrokingLoginUrl;
  };

  return (
    <div className='flex justify-center items-center bg-slate-500' >
        <div>

      <h1>Login with Brokers</h1>
      <button onClick={redirectToAngelBroking}>Login with Angel Broking</button>
        </div>
    </div>
  );
};

export default LoginPage;
