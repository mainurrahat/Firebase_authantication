import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateCurrentUser,
} from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const name = "patato alu miya";
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current USer", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) {
  //     console.log("currently logged user", currentUser.name);
  //     setUser(currentUser);
  //   } else {
  //     console.log("no user log in");
  //     setUser(null);
  //   }
  // });

  const authInfo = {
    name,
    createUser,
    signInUser,
    user,
    signOutUser,
    loading,
    signInWithGoogle,
  };
  return (
    // const name = "patato alu miya";
    <AuthContext.Provider value={authInfo}>
      {/* main part who will have access to this context */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
