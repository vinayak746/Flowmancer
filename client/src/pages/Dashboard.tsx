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
  }, [])

  return user ? <div>Welcome, {user.email}</div> : <div>Loading...</div>
}

export default Dashboard
