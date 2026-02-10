import { ArrowLeft, ShieldCheck, Users, UserCheck, BarChart3, Activity } from "lucide-react";
import useAuthUser from "../hooks/useAuthUser";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

export default function AdminAnalytics({ onBackToDashboard }) {
  const { user } = useAuthUser();
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersRef = collection(db, "users");
      const q = query(usersRef, orderBy("createdAt", "desc"), limit(100));

      try {
        const querySnapshot = await getDocs(q);
        const users = querySnapshot.docs.map((doc) => {
          const data = doc.data() || {};
          return {
            email: data.email || data.userEmail || "no-email"
          };
        });
        setRegisteredUsers(users);
      } catch (orderedErr) {
        try {
          const querySnapshot = await getDocs(usersRef);
          const users = querySnapshot.docs.map((doc) => {
            const data = doc.data() || {};
            return {
              email: data.email || data.userEmail || "no-email"
            };
          });
          setRegisteredUsers(users);
        } catch (unorderedErr) {
          console.error("Error fetching users:", unorderedErr);
          setRegisteredUsers([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const totalUsers = registeredUsers.length;
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

          {/* Debug panel (visible in admin UI) */}
          <div className="max-w-3xl mx-auto p-4 rounded-lg bg-yellow-50 border border-yellow-100">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold">Admin Debug</div>
              <div className="text-xs text-gray-500">Visible only to admins</div>
            </div>
            <div className="text-xs text-gray-700">
              <div>Loading: {String(loading)}</div>
              <div>Error: {error || "none"}</div>
              <div>Users fetched: {totalUsers}</div>
              <div className="mt-2">
                <div className="font-medium text-sm">Logs:</div>
                <div className="text-xs text-gray-600">
                  {debugLines.slice(-6).map((l, i) => (
                    <div key={i}>{l}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Debug panel (visible in admin UI) */}
          <div className="max-w-3xl mx-auto p-4 rounded-lg bg-yellow-50 border border-yellow-100">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold">Admin Debug</div>
              <div className="text-xs text-gray-500">Visible only to admins</div>
            </div>
            <div className="text-xs text-gray-700">
              <div>Loading: {String(loading)}</div>
              <div>Error: {error || "none"}</div>
              <div>Users fetched: {totalUsers}</div>
              <div className="mt-2">
                <div className="font-medium text-sm">Logs:</div>
                <div className="text-xs text-gray-600">
                  {debugLines.slice(-6).map((l, i) => (
                    <div key={i}>{l}</div>
                  ))}
                </div>
              </div>
            </div>
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
                  <p className="text-sm text-gray-500">Total Sessions</p>
                  <p className="text-3xl font-bold text-gray-900">—</p>
                </div>
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <UserCheck className="text-emerald-600" size={22} />
                </div>
              </div>
              <p className="text-sm text-gray-500">Active sessions tracked</p>
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
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Registered Users</h2>
              <p className="text-sm text-gray-500 mt-1">All registered email accounts</p>
            </div>

            {loading ? (
              <div className="py-8 text-center text-gray-500">Loading users...</div>
            ) : registeredUsers.length === 0 ? (
              <div className="py-8 text-center text-gray-500">No users registered yet.</div>
            ) : (
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {registeredUsers.map((userItem, idx) => (
                  <div key={idx} className="py-3 px-4 bg-gray-50 rounded-lg text-sm text-gray-700 border border-gray-100 hover:bg-blue-50 transition">
                    {userItem.email}
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
