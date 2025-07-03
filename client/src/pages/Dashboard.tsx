import Sidebar from "../components/SIdebar";
import HeaderStats from "../components/HeaderStats";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <HeaderStats />
        {/* Next: Add Workflow Cards and RecentActivity */}
      </main>
    </div>
  );
};

export default Dashboard;
