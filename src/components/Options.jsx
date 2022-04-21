import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { getUserData, getCommitsData, getRepositoryData } from '../services';

export default function ButtonSizes() {
  const [userData, setUserData] = useState([]);
  const [repositoryrData, setRepositoryData] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);

  const handleClickUser = () => {
    //setUserData(getUserData)
    //console.log(userData)
  }

  const handleClickRepository = () => {
    //setRepositoryData(getCommitsData)
    //console.log(repositoryrData)
  }

  return (
    <Box sx={{ '& button': { m:1 } }}>
      <div style={{ textAlign: 'center' }}>
        <Button variant="outlined" size="large" onClick={handleClickUser}>
            User Info
        </Button>
        <Button variant="outlined" size="large" onClick={handleClickRepository}>
            Repository Data
        </Button>
        <Button variant="outlined" size="large" onClick={getCommitsData}>
            Commits History
        </Button>
      </div>
    </Box>
  );
};
