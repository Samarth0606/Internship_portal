import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

const AuthContext = createContext();

// axios.defaults.baseURL = "https://projectappbackend.onrender.com";

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  });

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    loadUser();
  }, []);

  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("http://localhost:8080/api/v1/user/");
      console.log(res , "resp")
      setAuthState((prevState) => ({
        ...prevState,
        isAuthenticated: true, 
        loading: false,
        user: res.data,
      }));
    } catch (err) {
      setAuthState((prevState) => ({
        ...prevState,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: err.response.data.msg,
      }));
    }
  };

  const register = async (formData) => {
    try {
      const res = await axios.post("http://localhost:8080/api/v1/user/register", formData);
      setAuthState((prevState) => ({
        ...prevState,
        token: res.data.token,
        isAuthenticated: true,
        loading: false,
      }));
      localStorage.setItem("token", res.data.token);
      loadUser();
    } catch (err) {
      setAuthState((prevState) => ({
        ...prevState,
        error: err.response.data.msg,
      }));
    }
  };

  const login = async (formData) => {
    try {
      const res = await axios.post("http://localhost:8080/api/v1/user/login", formData);
      setAuthState((prevState) => ({
        ...prevState,
        token: res.data.token,
        isAuthenticated: true,
        loading: false,
      }));
      localStorage.setItem("token", res.data.token);
      loadUser();
    } catch (err) {
      setAuthState((prevState) => ({
        ...prevState,
        error: err.response.data.msg,
      }));
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthToken(null);
    setAuthState({
      token: null,
      isAuthenticated: false,
      loading: false,
      user: null,
      error: null,
    });
  };

  const clearError = () => {
    setAuthState((prevState) => ({
      ...prevState,
      error: null,
    }));
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        register,
        login,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
