

import React, { useEffect, useState } from 'react';
import './App.css';
import InputCountainer from './components/input/InputCountainer';
import Users from './components/display/Users';

function App() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then((response) => response.json())
      .then((data) => {
        setUsersData(data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  const addDataHandler = (data) => {
    console.log(data);
  };

  return (
    <div className='App'>
      <InputCountainer onAddData={addDataHandler} />
      <Users usersData={usersData} />
    </div>
  );
}

export default App;