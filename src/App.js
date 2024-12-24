import React, { useState } from 'react';
import Chatbot from './components/Chatbot';
import Login from './components/Login';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        <>
          <header className="app-header">
            <h2>Welcome, {user.displayName}</h2>
          </header>
          <Chatbot />
        </>
      ) : (
        <Login onLogin={(loggedInUser) => setUser(loggedInUser)} />
      )}
    </div>
  );
};

export default App;
