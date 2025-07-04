import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { error } = isSignup
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600">
          {isSignup ? "Sign Up" : "Login to FlowMancer"}
        </h2>
        <div className="flex items-center">
          <FaUser className="absolute left-3 top-3" />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your@email.com"
            className="pl-10"
          />
        </div>

        <div className="flex items-center">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="pl-3"
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          {isSignup ? "Create Account" : "Login"}
        </Button>

        <p
          onClick={() => setIsSignup(!isSignup)}
          className="text-sm text-center text-blue-600 cursor-pointer hover:underline"
        >
          {isSignup ? "Already have an account? Log in" : "No account? Sign up"}
        </p>
      </form>
    </div>
  );
}
