import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';

export default function ButtonSizes() {
  const [userData, setUserData] = useState();
  //const [isLoading, setIsLoading] = useState(true);
  const getUserData = () => {
    axios.get('http://localhost:5000/api/github/userinfo/gmujica')
      .then(res => {
        //setIsLoading(false)
        setUserData(res.data);  
        console.log(userData);
      }).catch(err => {
        console.log(err);
    })
  }

  const getCommitsData = () => {
    axios.get('http://localhost:5000/api/github/commitinfo/gmujica/github-node-api')
    .then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  }

  const getRepositoryData = () => {
    axios.get('http://localhost:5000/api/github/repoinfo/gmujica/github-node-api')
    .then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  }
  return (
    <Box sx={{ '& button': { m:1 } }}>
      <div style={{ textAlign: 'center' }}>
        <Button variant="outlined" size="large" onClick={getUserData}>
            User Info
        </Button>
        <Button variant="outlined" size="large" onClick={getRepositoryData}>
            Repository Data
        </Button>
        <Button variant="outlined" size="large" onClick={getCommitsData}>
            Commits History
        </Button>
      </div>
    </Box>
  );
}
