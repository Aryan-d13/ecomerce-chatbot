import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebaseConfig';
import './Login.css';

const Login = ({ onLogin }) => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      onLogin(result.user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to E-commerce Chatbot</h1>
      <button className="google-login-btn" onClick={handleGoogleLogin}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
