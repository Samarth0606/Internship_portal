import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import OpportunitiesPage from "./pages/OpportunitiesPage";
import ApplyPage from "./pages/ApplyPage";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <AuthProvider>
    <div className="primary">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/opportunities" element={<OpportunitiesPage />}
         />
        <Route
          path="/apply/:id"
          element={
            <PrivateRoute>
              <ApplyPage />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<HomePage />} />
      </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
