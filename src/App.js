import React from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Account from "./components/Account";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="bg-slate-800 py-2">
      <img className="w-28 ml-4 " src="\weblab.png" alt="WebLab Logo" />
      <AuthContextProvider>
        <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route
            path="/private_route"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
