import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//import { useState } from 'react';
import { getUserData, getCommitsData, getRepositoryData } from '../services';

export default function ButtonSizes() {
  //const [userData, setUserData] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);

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
};
