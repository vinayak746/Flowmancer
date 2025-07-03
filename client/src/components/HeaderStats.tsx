import { UserButton, useUser } from "@clerk/clerk-react";

const HeaderStats = () => {
  const { user } = useUser();
  return (
<div className="w-full mb-8 relative">
  {/* User Button at top right */}
  <div className="absolute top-0 right-0">
    <UserButton />
  </div>

  {/* Greeting */}
  <h1 className="text-2xl font-semibold mb-4">
    Hi{user?.firstName ? `, ${user.firstName}!` : " there!"}
  </h1>

  {/* Horizontal Stat Cards */}
  <div className="flex space-x-4">
    <div className="bg-white p-4 rounded-lg border shadow-sm w-48">
      <p className="text-sm text-gray-500">Workflows Created</p>
      <p className="text-2xl font-bold">4</p>
    </div>

    <div className="bg-white p-4 rounded-lg border shadow-sm w-48">
      <p className="text-sm text-gray-500">Runs Today</p>
      <p className="text-2xl font-bold">12</p>
    </div>

    <button className="w-48 border px-4 py-3 rounded-lg text-sm font-medium bg-white hover:bg-gray-100 shadow-sm">
      New Workflow
    </button>
  </div>
</div>
  );
};

export default HeaderStats;



{/* <h1 className="text-2xl font-semibold">Hi{user?.firstName ? `, ${user.firstName}` : ""}!</h1> */}