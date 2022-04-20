import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getUserData = () => {
    axios.get('http://localhost:5000/api/github/userinfo/gmujica')
    .then(res => {
      //setIsLoading(false)
      setUser(res.data);
      
      console.log(user);
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

  const getCommitsData = () => {
    axios.get('http://localhost:5000/api/github/commitinfo/gmujica/github-node-api')
    .then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getUserData}>
          Get User Data
        </button>
        <button onClick={getRepositoryData}>
          Get Repository Data
        </button>
        <button onClick={getCommitsData}>
          Get Commits Data
        </button>
      </header>
      {isLoading && <p>Loading Items...</p>}
    </div>
  );
}

export default App;
