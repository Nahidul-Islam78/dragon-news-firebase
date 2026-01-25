import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

//create context
export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  console.log(user);
  //create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  //singOut user
  const LogOut = () => {
    return signOut(auth);
  }

  //singIn user
  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  //set observer
  useEffect(() => {
    const unSubscribe=onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    LogOut,
    Login,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;