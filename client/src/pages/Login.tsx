import { SignIn } from "@clerk/clerk-react";
import { useEffect } from "react";

const Login = () => {
      useEffect(() => {
    console.log("Login component mounted");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
<SignIn
  path="/login"
  routing="path"
  afterSignInUrl="/dashboard"
/>

    </div>
  );
};

export default Login;
