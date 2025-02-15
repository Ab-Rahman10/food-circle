import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext();
export const ThemeContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  console.log(isDarkMode);

  // Dark mode toggle
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("isDarkMode", JSON.stringify(newMode));
  };

  // Load theme from localStorage
  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));
    if (savedDarkMode !== null) {
      setIsDarkMode(savedDarkMode);
    }
  }, []);

  //   create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   update profile
  const userProfileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //   login
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   user logout
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      // console.log("Current user-->", currentUser);
      // Generate a token-----------------------------------
      if (currentUser?.email) {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          {
            email: currentUser?.email,
          },
          {
            withCredentials: true,
          }
        );
        setUser(currentUser);
      } else {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/logout`,
          { withCredentials: true }
        );
        setUser(currentUser);
      }

      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  //   google sign in
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    user,
    loading,
    setUser,
    createUser,
    loginUser,
    logoutUser,
    googleSignIn,
    userProfileUpdate,
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default AuthProvider;
