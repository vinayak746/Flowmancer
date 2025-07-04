import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Logs from "./pages/Logs";
import WorkflowBuilder from "./pages/WorkflowBuilder";
import { supabase } from "./lib/supabase";
import Auth from "./pages/Auth";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session);
      setLoading(false);
    };

    checkAuth();

    // Optional: Listen for login/logout events
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => listener?.subscription.unsubscribe();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    <Route path="/auth" element={<Auth />} />

      <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/logs"
        element={isAuthenticated ? <Logs /> : <Navigate to="/login" />}
      />
      <Route
        path="/workflow-builder"
        element={isAuthenticated ? <WorkflowBuilder /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default App;
