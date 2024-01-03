// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog,TextField,Button } from '@mui/material';

const BrokerForm = () => {
  const navigate = useNavigate();

  const [clientCode, setClientCode] = useState('');
  const [userData,setUserData] = useState('');
  const [password, setPassword] = useState('');
  const [totp, setTotp] = useState('');
  const [open, setOpen] = useState(false); 

  const handleLogin = async () => {
    try {
      const response = await fetch(
        'https://apiconnect.angelbroking.com/rest/auth/angelbroking/user/v1/loginByPassword',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-UserType': 'USER',
            'X-SourceID': 'WEB',
            'X-ClientLocalIP': 'CLIENT_LOCAL_IP',
            'X-ClientPublicIP': 'CLIENT_PUBLIC_IP',
            'X-MACAddress': 'MAC_ADDRESS',
            'X-PrivateKey': 'API_KEY',
          },
          body: JSON.stringify({
            clientCode: clientCode,
            password: password,
            totp: totp,
          }),
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        const jwtToken = data.jwtToken;
  
        localStorage.setItem('jwtToken', jwtToken);
        // navigate('/landing-page');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  

  console.log(userData)



  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='p-8'>
      <Button type='contain' onClick={handleOpen}>Add A Broker</Button>

      <Dialog open={open} onClose={handleClose} sx={{padding:'12'}}>
        <div className='flex flex-col'>
          <label htmlFor="clientCode">Client Code:</label>
          <TextField
            type="text"
            id="clientCode"
            value={clientCode}
            onChange={(e) => setClientCode(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="password">Password:</label>
          <TextField
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="totp">TOTP:</label>
          <TextField
            type="text"
            id="totp"
            value={totp}
            onChange={(e) => setTotp(e.target.value)}
          />
        </div>
        <Button onClick={handleLogin}>Submit</Button>
      </Dialog>
    </div>
  );
};

export default BrokerForm;
