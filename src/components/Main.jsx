import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { getUserData, getCommitsData } from '../services';
import { useState } from 'react';
import Data from '../data.json';
import Paper from '@mui/material/Paper';

export default function SimpleContainer() {
  const [commitsData, setCommitsData] = useState([]);

    useState(() => {
      setCommitsData(getCommitsData);
    }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <div>
          {commitsData.map( commit => (
            <p>{commit.comments_url}</p>
          ))}
        </div>
      </Container>
    </>
  );
}
