import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { isSignedIn, user } = useUser();
const { openSignIn } = useClerk();

  if (!isSignedIn) return <p>User not signed in</p>;

  return (
    <div>
      <h1>Welcome {user?.firstName}</h1>
      <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
 {!user ? (
          <button
            onClick={() => openSignIn()}
            className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
          >
            Login
          </button>
        ) : (
          <UserButton>
            <div className="flex items-center">
              <img
                src={user.imageUrl}
                alt={user.firstName || "User"}
                className="w-10 h-10 rounded-full mr-2"
              />
              <span className="text-lg">{user.firstName}</span>
            </div>
          </UserButton>
        )}
    </div>
  );
};

export default Dashboard;
