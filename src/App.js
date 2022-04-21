import Header from './components/Header';
import Options from './components/Options';
import Main from './components/Main';

import { useState, useEffect } from 'react';
import { getUserData, getCommitsData, getRepositoryData } from './services';

function App() {
  const [userData, setUserData] = useState();
        
  return (
    <div className="App">
      <Header />
      <Options />
      <Main />
    </div>
  );
}

export default App;
