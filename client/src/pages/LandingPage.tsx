
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div  className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 sm:px-8 md:px-16 pt-24">

      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 px-10 text-white">
          <h1 className="text-2xl font-bold">FlowMancer</h1> {" "}
        <Link
          to="/auth"
          className="text-blue-400 hover:text-blue-500 transition"
        >
              Login  {" "}
        </Link>
      </nav>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Automate Your Workflow. Save Hours Every Day.
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl mb-8 text-gray-300">
          FlowMancer connects your email to powerful AI tools to extract data,
          summarize, and send it wherever you need.
        </p>
        <Link to="/auth" className="mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-lg font-medium transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
