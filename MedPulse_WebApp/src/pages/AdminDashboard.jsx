import { useEffect, useState } from "react";
import {
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  UserPlus,
  Users,
} from "lucide-react";
import { collection, limit, onSnapshot, orderBy, query, where } from "firebase/firestore";
import useAuthUser from "../hooks/useAuthUser";
import { db } from "../firebase";
import { isAdminEmail } from "../constants/admin";

export default function AdminDashboard({ onBackToDashboard, onLogout }) {
  const { user, isLoading } = useAuthUser();
  const isAdmin = isAdminEmail(user?.email);

  const [counts, setCounts] = useState({
    users: 0,
    simulations: 0,
    newRegistrationsToday: 0,
  });
  const [recentUsers, setRecentUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [isSigningOut, setIsSigningOut] = useState(false);

  useEffect(() => {
    const unsubscribers = [];

    const usersRef = collection(db, "users");
    const simulationsRef = collection(db, "simulations");

    // Total users count
    unsubscribers.push(
      onSnapshot(
        usersRef,
        (snapshot) => {
          setCounts((prev) => ({ ...prev, users: snapshot.size }));
          setIsFetching(false);
        },
        () => setIsFetching(false)
      )
    );

    // New registrations today - filter by createdAt = today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const newRegistrationsQuery = query(
      usersRef,
      where("createdAt", ">=", today),
      where("createdAt", "<", tomorrow)
    );

    unsubscribers.push(
      onSnapshot(
        newRegistrationsQuery,
        (snapshot) => {
          setCounts((prev) => ({ ...prev, newRegistrationsToday: snapshot.size }));
        },
        () => {}
      )
    );

    // Simulations count
    unsubscribers.push(
      onSnapshot(
        simulationsRef,
        (snapshot) => {
          setCounts((prev) => ({ ...prev, simulations: snapshot.size }));
        },
        () => {}
      )
    );

    // Recent users
    const recentUsersQuery = query(usersRef, orderBy("createdAt", "desc"), limit(5));
    unsubscribers.push(
      onSnapshot(
        recentUsersQuery,
        (snapshot) => {
          const rows = snapshot.docs.map((doc) => {
            const data = doc.data() || {};
            return {
              email: data.email || "unknown@medpulse.ai",
              uid: doc.id,
              createdAtLabel: data.createdAt?.toDate
                ? data.createdAt.toDate().toLocaleString()
                : "Recently",
            };
          });
          setRecentUsers(rows);
        },
        () => {}
      )
    );

    return () => {
      unsubscribers.forEach((unsubscribe) => unsubscribe());
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="text-slate-600 text-lg">Loading admin analytics...</div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="bg-white/80 border border-white/70 rounded-3xl p-10 shadow-xl text-center max-w-xl">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center">
            <ShieldCheck className="text-rose-600" size={26} />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mt-6">Access Denied</h1>
          <p className="text-slate-600 mt-3">Admin only. Please log in with the authorized account.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm z-50">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <ShieldCheck className="text-white" size={20} />
            </div>
            <div>
              <div className="text-gray-900 text-xl font-bold">Medical Simulation</div>
              <div className="text-gray-500 text-sm">Admin Control Center</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl px-6 py-3 shadow-sm">
              <div className="text-sm text-gray-500">Signed in as</div>
              <div className="text-gray-900 font-semibold">
                {user?.displayName || user?.email || "Admin"}
              </div>
              <div className="text-xs text-gray-400">UID: {user?.uid || "Not available"}</div>
            </div>
            <button
              onClick={async () => {
                setIsSigningOut(true);
                try {
                  if (onLogout) {
                    await onLogout();
                  }
                } finally {
                  setIsSigningOut(false);
                }
              }}
              className="group bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white font-medium py-2 px-4 rounded-xl shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              disabled={isSigningOut}
            >
              <span className="text-sm">{isSigningOut ? "Logging out..." : "Logout"}</span>
              <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:animate-pulse"></div>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-36 px-8 pb-12">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Admin Analytics Overview</h1>
            <p className="text-lg text-gray-600">
              Real-time insights across platform users and medical simulations.
            </p>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Total Users",
                value: counts.users,
                icon: Users,
                gradient: "from-blue-500 to-indigo-600",
                accent: "bg-blue-500/20",
              },
              {
                title: "New Registrations Today",
                value: counts.newRegistrationsToday,
                icon: UserPlus,
                gradient: "from-emerald-500 to-cyan-600",
                accent: "bg-emerald-500/20",
                subtitle: "Users joined today",
              },
              {
                title: "Completed Simulations",
                value: 24,
                icon: CheckCircle2,
                gradient: "from-orange-500 to-amber-600",
                accent: "bg-orange-500/20",
              },
              {
                title: "Total Simulations",
                value: 42,
                icon: BarChart3,
                gradient: "from-violet-500 to-pink-600",
                accent: "bg-violet-500/20",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/70 backdrop-blur-xl p-6 shadow-[0_20px_40px_-24px_rgba(15,23,42,0.35)]"
              >
                <div className={`absolute inset-0 opacity-80 bg-gradient-to-br ${card.gradient}`}></div>
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/25 blur-2xl"></div>
                <div className="relative text-white">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm uppercase tracking-wide text-white/80">{card.title}</div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${card.accent}`}>
                      <card.icon size={22} />
                    </div>
                  </div>
                  <div className="text-4xl font-bold">{card.value}</div>
                  <p className="text-sm text-white/80 mt-2">
                    {card.subtitle || (isFetching ? "Fetching live data..." : "Updated moments ago")}
                  </p>
                </div>
              </div>
            ))}
          </section>

          <section className="grid grid-cols-1 gap-6">
            <div className="bg-white/80 border border-gray-200 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Recent Registered Users</h2>
                  <p className="text-sm text-gray-500">Latest accounts onboarded</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
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
                      <th className="py-3">Registered</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="py-6 text-center text-sm text-gray-500">
                          No users found yet.
                        </td>
                      </tr>
                    ) : (
                      recentUsers.map((row) => (
                        <tr key={row.uid} className="border-b last:border-none">
                          <td className="py-4 text-sm text-gray-800">{row.email}</td>
                          <td className="py-4 text-sm text-gray-500">{row.uid}</td>
                          <td className="py-4 text-sm text-gray-600">{row.createdAtLabel}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
