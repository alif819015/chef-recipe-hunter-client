/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
  }

const login = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
        setUser(loggedUser)
    })
    return ()=>{
        unsubscribe();
    }
},[])

const logOut =()=>{
    return signOut(auth)
}

  const userInfo = {
    user,
    createUser,
    login,
    logOut
  };

  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
