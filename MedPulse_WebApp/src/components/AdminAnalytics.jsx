import { ArrowLeft, ShieldCheck, Users, UserCheck, BarChart3, Activity } from "lucide-react";
import useAuthUser from "../hooks/useAuthUser";

export default function AdminAnalytics({ onBackToDashboard }) {
  const { user } = useAuthUser();

  const mockUsers = [
    { email: "alex.taylor@medsim.edu", uid: "uid_1a2b3c", completed: true },
    { email: "priya.shah@medsim.edu", uid: "uid_4d5e6f", completed: true },
    { email: "sam.chen@medsim.edu", uid: "uid_7g8h9i", completed: false },
    { email: "maria.gomez@medsim.edu", uid: "uid_0j1k2l", completed: true },
    { email: "jamie.park@medsim.edu", uid: "uid_3m4n5o", completed: false }
  ];

  const totalUsers = mockUsers.length;
  const completedUsers = mockUsers.filter((u) => u.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm z-50">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-6">
            <button
              onClick={onBackToDashboard}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to User Analytics</span>
            </button>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <ShieldCheck className="text-white" size={20} />
              </div>
              <div>
                <div className="text-gray-900 text-xl font-bold">Medical </div>
                <div className="text-gray-500 text-sm">Admin Analytics</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl px-6 py-3 shadow-sm">
            <div className="text-sm text-gray-500">Signed in as</div>
            <div className="text-gray-900 font-semibold">
              {user?.displayName || user?.email || "Admin"}
            </div>
            <div className="text-xs text-gray-400">UID: {user?.uid || "Not available"}</div>
          </div>
        </div>
      </header>

      <main className="pt-36 px-8 pb-10">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Platform Analytics Overview</h1>
            <p className="text-lg text-gray-600">Operational insights across all users and simulations</p>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 border border-gray-200 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">Total Users</p>
                  <p className="text-3xl font-bold text-gray-900">{totalUsers}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Users className="text-blue-600" size={22} />
                </div>
              </div>
              <p className="text-sm text-gray-500">Registered learners on the platform</p>
            </div>

            <div className="bg-white/80 border border-gray-200 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">Completed Simulations</p>
                  <p className="text-3xl font-bold text-gray-900">{completedUsers}</p>
                </div>
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <UserCheck className="text-emerald-600" size={22} />
                </div>
              </div>
              <p className="text-sm text-gray-500">Users who completed at least one module</p>
            </div>

            <div className="bg-white/80 border border-gray-200 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">Active Sessions</p>
                  <p className="text-3xl font-bold text-gray-900">128</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <Activity className="text-purple-600" size={22} />
                </div>
              </div>
              <p className="text-sm text-gray-500">Live sessions in the last 24 hours</p>
            </div>
          </section>

          <section className="bg-white/80 border border-gray-200 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">User Directory</h2>
                <p className="text-sm text-gray-500">Email and UID overview (mock data)</p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <BarChart3 size={16} />
                <span>Updated today</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-xs uppercase tracking-wide text-gray-500 border-b">
                    <th className="py-3">Email</th>
                    <th className="py-3">UID</th>
                    <th className="py-3">Completed</th>
                  </tr>
                </thead>
                <tbody>
                  {mockUsers.map((userItem) => (
                    <tr key={userItem.uid} className="border-b last:border-none">
                      <td className="py-4 text-sm text-gray-800">{userItem.email}</td>
                      <td className="py-4 text-sm text-gray-500">{userItem.uid}</td>
                      <td className="py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            userItem.completed
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {userItem.completed ? "Yes" : "No"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
