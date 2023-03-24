import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from './modules/firebase'

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null);

  const navigate = useNavigate();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      // sessionStorage.setItem('userID', user?.uid);
      if (user) {
        setLoggedIn(sessionStorage.getItem('userID'))
        sessionStorage.setItem('userID', user?.uid);
        sessionStorage.setItem('userEmail', user?.email);
      } else {
        sessionStorage.clear();
        // setLoggedIn(null);
        navigate("/");
      }
      unsubscribe();
    })
    return () => {
      unsubscribe();
    }
  }, [loggedIn])

  useEffect(() => {
    if (sessionStorage.getItem('userID')) {
      setLoggedIn(sessionStorage.getItem('userID'))
    } else {
      sessionStorage.clear();
      setLoggedIn(null);
    }
  }, [])


  return (
    <UserContext.Provider value={{
      createUser, logOut, signIn, loggedIn, setLoggedIn, resetPassword
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext);
};

