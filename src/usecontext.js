import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged,signOut,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // ✅ استيراد الـ auth من ملفك
import React from "react";

// إنشاء Context
const Context = createContext();

// AuthProvider Component
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // دالة التسجيل
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
    const  logout=()=>{
     return signOut(auth);
    }
    const login=(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password)
    }
  // متابعة حالة المستخدم
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // القيم اللي هتتبعت لكل الكومبوننتس
  const value = {
    currentUser,
    signup,
    logout,
    login
  };

  return (
    <Context.Provider value={value}>
      {!loading && children}
    </Context.Provider>
  );
}

 
export function useAuth() {
  return useContext(Context);
}
