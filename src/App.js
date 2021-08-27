import React, { useEffect, useState } from 'react';
import fire from './Firebase';
import './App.css';
import Login from './Login';
import Home from './Home';

function App() {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInput = () => {
    setEmail('');
    setPassword('');
  }

  const handleLogin = () => {

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)

  }

  const handleSignup = () => {

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
  }
  const handleLogout = () => {
    fire.auth().signOut();
  }

  
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
      } else {
        setUser('');
      }
    })
  }




  useEffect(() => {
    authListener();
  }, [])

//User can signin or signup accordingly

  return (
    <div className="App">
      {user ?
        (
          <Home
            handleLogout={handleLogout}
            email={email}
          />)

        :

        (
          <Login
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
          />
        )}


    </div>

  );
}

export default App;
