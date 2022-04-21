import React, { useState, useEffect } from 'react';


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
      <div>
        {commit.map((co, i) => {
          return 
            <div key={i}>{co.commit.message}</div>
        })}
      </div>
    
  );
}
