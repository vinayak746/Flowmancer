import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
<SignIn  path="/login" routing="path" afterSignInUrl={'/dashboard'} />
    </div>
  );
};

export default Login;
