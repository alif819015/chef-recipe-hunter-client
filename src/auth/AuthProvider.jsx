/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
  }

const login = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}

  const userInfo = {
    user,
    createUser,
    login
  };

  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
