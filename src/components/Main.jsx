import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function SimpleContainer() {
  const [commit, setCommit] = useState([]);

  const fetchData = async () => {
    const res = await fetch('http://localhost:5000/api/github/commitinfo/gmujica/github-node-api');
    const json = await res.json();
    console.log('JSON RESP:', json);

    setCommit(json)
    
  }
  console.log('STATE:', commit);
  
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Message</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {commit.map((co, i) => (
            <TableRow
            key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {co.commit.message}
              </TableCell>
              <TableCell align="right">{co.commit.author.name}</TableCell>
              <TableCell align="right">{co.commit.author.date}</TableCell>
              <TableCell align="right">{co.commit.author.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
