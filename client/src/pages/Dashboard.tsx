// import Sidebar from "../components/Sidebar";
// import HeaderStats from "../components/HeaderStats";

// const Dashboard = () => {
//   return (
//     <div className="flex">
//             <Sidebar />     {" "}
//       <main className="flex-1 p-6 bg-gray-50">
//                 <HeaderStats />       {" "}
//         {/* Next: Add Workflow Cards and RecentActivity */}     {" "}
//       </main>
//          {" "}
//     </div>
//   );
// };

// export default Dashboard;
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useNavigate } from 'react-router-dom'
import type { User } from '@supabase/supabase-js'
import Sidebar from "../components/Sidebar"
import HeaderStats from "../components/HeaderStats"

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        navigate('/login')
      } else {
        setUser(data.user)
      }
    })
  }, [navigate])

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    )
  }

  // Try to get a display name, fallback to email
  const displayName = user.user_metadata?.full_name || user.user_metadata?.name || user.email

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <HeaderStats />
        <div className="mt-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome, {displayName}!</h1>
          {/* Next: Add Workflow Cards and RecentActivity */}
        </div>
      </main>
    </div>
  )
}

export default Dashboard
