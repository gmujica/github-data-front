import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
    const [userData, setUserData] = useState([]);
  
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000/api/github/userinfo/gmujica');
      const json = await res.json();
      console.log('JSON RESP:', json);
  
      setUserData(json)
      
    }
    console.log('STATE:', userData);
    
    useEffect(() => {
      fetchData()
    }, [])

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          User Info
        </Typography>
            <Typography variant="h5" component="div">
              {userData.login}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {userData.bio}
            </Typography>
            <Typography variant="body2">
              {userData.name}
            </Typography> 
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
