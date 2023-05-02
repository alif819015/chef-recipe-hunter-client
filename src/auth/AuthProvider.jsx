/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const gitHubProvider = new GithubAuthProvider();

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser =(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

const login = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut =()=>{
    setLoading(true);
    return signOut(auth)
}

const google = ()=>{
   return signInWithPopup(auth, googleProvider)
}

const gitHub = () =>{
    return signInWithPopup(auth, gitHubProvider)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
        setUser(loggedUser)
        setLoading(false);
    })
    return ()=>{
        unsubscribe();
    }
},[])


  const userInfo = {
    user,
    loading,
    createUser,
    login,
    google,
    gitHub,
    logOut
  };

  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
