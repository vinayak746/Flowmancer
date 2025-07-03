import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <SignUp path="/signup" routing="path" afterSignUpUrl={'/dashboard'} />   {" "}
    </div>
  );
};

export default SignUpPage;
