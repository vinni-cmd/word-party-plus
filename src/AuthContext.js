import { createContext, useContext, useEffect, useState } from "react";
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
  const [userId, setUserId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

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

  const authenticateUser = () => {
    // Detects if user is already logged in
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid)
        setUserEmail(user.email);
        setLoggedIn(true);
      } else {
        setUserId(null)
        setUserEmail(null);
      }
    })
  }

  useEffect(() => {
    authenticateUser();
  }, [loggedIn])

  return (
    <UserContext.Provider value={{
      createUser, logOut, signIn, loggedIn, setLoggedIn, userEmail, resetPassword, userId
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext);
};

