import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  
  //create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //set observer
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log(user);
      } else {
        console.log('not user');
      }
    });
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;