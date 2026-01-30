import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

//create context
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading,setLoading]=useState(true)
 // console.log(user);
  //create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }
  //singOut user
  const LogOut = () => {
    setLoading(true)
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
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //update user 
  const upDateUserData = (data) => {
    return updateProfile(auth.currentUser,data)
  }

  //reset password send email
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth,email)
  }

  const authData = {
    user,
    setUser,
    createUser,
    LogOut,
    Login,
    loading,
    setLoading,
    upDateUserData,
    forgetPassword,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;