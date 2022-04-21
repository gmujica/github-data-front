import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { getUserData } from '../services';
import { useState } from 'react';

export default function SimpleContainer() {
  const [userData, setUserData] = useState([]);

    useState(() => {
        getUserData();
        setUserData(getUserData);

    }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        {/*<div key={userData.id}>
          {userData.map(user => {
            <div>{user}</div>
          })}
        </div>*/}
      </Container>
    </>
  );
}
