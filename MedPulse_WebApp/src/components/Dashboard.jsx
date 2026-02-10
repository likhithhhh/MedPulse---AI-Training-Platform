import { User, Play, Bot, TrendingUp, Trophy, Clock, Star, MessageCircle, BarChart3, Activity, Target, Zap, Award, CalendarDays } from "lucide-react";
// ProjectInfoCard removed — duplicate content is kept inline in this file
import useAuthUser from "../hooks/useAuthUser";
import { isAdminEmail } from "../constants/admin";

const AnimatedStatCard = ({ icon: Icon, label, value, trend, bgGradient, iconBg }) => (
  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${bgGradient} p-6 shadow-lg backdrop-blur-xl border border-white/20 hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}>
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.5),transparent_50%)]"></div>
    <div className="relative">
      <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
        <Icon size={24} className="text-white" />
      </div>
      <div className="text-white/80 text-sm font-medium mb-2">{label}</div>
      <div className="flex items-baseline gap-3">
        <div className="text-3xl font-bold text-white">{value}</div>
        {trend && <div className="text-xs text-emerald-300 flex items-center gap-1"><TrendingUp size={14} />{trend}</div>}
      </div>
    </div>
  </div>
);

const CircularProgress = ({ percentage, label, color }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-28 h-28 mb-3">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="4" />
        <circle cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="4" strokeDasharray={`${(percentage / 100) * 283} 283`} className="transition-all duration-500" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{percentage}%</div>
        </div>
      </div>
    </div>
    <div className="text-sm font-medium text-gray-600">{label}</div>
  </div>
);

export default function Dashboard({ onStartSimulation, onLogout, onOpenAdmin, onOpenAssistant }) {
  const { user } = useAuthUser();
  const isAdmin = isAdminEmail(user?.email);

  const handleLogoutClick = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* HEADER - CLEAN AND MINIMAL */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-slate-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
              <Activity className="text-white" size={22} />
            </div>
            <div>
              <div className="text-slate-900 font-bold text-lg">Medical Simulation</div>
              <div className="text-slate-500 text-xs">Analytics Dashboard</div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {isAdmin && onOpenAdmin && (
              <button onClick={onOpenAdmin} className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium transition-all">
                Admin Panel
              </button>
            )}
            
            <div className="h-10 w-px bg-slate-200"></div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <User size={18} className="text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-slate-900 text-sm font-medium">{user?.displayName || user?.email?.split('@')[0] || 'User'}</div>
                <div className="text-slate-500 text-xs">{user?.email}</div>
              </div>
            </div>

            <button onClick={handleLogoutClick} className="px-4 py-2 rounded-lg bg-red-500/80 hover:bg-red-600 text-white text-sm font-medium transition-all shadow-lg">
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* ANALYTICS HERO SECTION */}
      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">User Analytics Dashboard</h1>
          <p className="text-slate-600">Track your performance, sessions, and medical simulation progress in real time.</p>
        </div>

        {/* WELCOME SECTION */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, {user?.displayName || user?.email?.split('@')[0] || 'there'}! 👋</h2>
          <p className="text-slate-600">Here's your analytics snapshot for today.</p>
        </div>

        {/* ABOUT PLATFORM SECTION */}
        <section className="bg-slate-100 rounded-3xl border border-slate-200 p-8 shadow-lg mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <BarChart3 size={28} className="text-blue-500" />
              About Medical Simulation Platform
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Medical Simulation is an AI-powered medical training and surgical simulation platform built to help students practice procedures, improve clinical decisions, and gain real-world experience in a safe virtual environment. The platform combines intelligent AI guidance, immersive simulations, and performance analytics to create next-generation healthcare training.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-slate-200 rounded-2xl p-6 border border-slate-300">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                  <Zap className="text-blue-600" size={20} />
                </div>
                <h3 className="text-slate-900 font-semibold mb-2">AI Medical Assistant</h3>
                <p className="text-slate-600 text-sm">Get intelligent guidance for surgeries, cases, and medical queries.</p>
              </div>
              
              <div className="bg-slate-200 rounded-2xl p-6 border border-slate-300">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3">
                  <Activity className="text-purple-600" size={20} />
                </div>
                <h3 className="text-slate-900 font-semibold mb-2">VR Surgery Practice</h3>
                <p className="text-slate-600 text-sm">Practice procedures safely in immersive virtual simulations.</p>
              </div>
              
              <div className="bg-slate-200 rounded-2xl p-6 border border-slate-300">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-3">
                  <TrendingUp className="text-emerald-600" size={20} />
                </div>
                <h3 className="text-slate-900 font-semibold mb-2">Performance Tracking</h3>
                <p className="text-slate-600 text-sm">Monitor progress, strengths, and improvement areas in real-time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ProjectInfoCard removed — inline About section above already provides this content */}

        {/* ANIMATED STAT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <AnimatedStatCard 
            icon={Clock} 
            label="Total Sessions" 
            value="45" 
            trend="+12 this month"
            bgGradient="from-blue-600 to-cyan-600"
            iconBg="bg-blue-700"
          />
          <AnimatedStatCard 
            icon={Star} 
            label="Average Score" 
            value="9.7" 
            trend="+0.5 avg"
            bgGradient="from-purple-600 to-pink-600"
            iconBg="bg-purple-700"
          />
          <AnimatedStatCard 
            icon={Trophy} 
            label="Your Rank" 
            value="#9" 
            trend="Top 5%"
            bgGradient="from-amber-600 to-orange-600"
            iconBg="bg-amber-700"
          />
          <AnimatedStatCard 
            icon={Zap} 
            label="Active Days" 
            value="28" 
            trend="+5 this month"
            bgGradient="from-emerald-600 to-teal-600"
            iconBg="bg-emerald-700"
          />
        </div>

        {/* DATA VISUALIZATION ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Performance Progress */}
          <div className="rounded-2xl bg-slate-100 border border-slate-300 p-8 shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-slate-900 font-semibold mb-6 flex items-center gap-2">
              <TrendingUp size={18} /> Performance Progress
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Cardiac Surgery', percent: 85, color: 'bg-blue-500' },
                { label: 'Neuro Surgery', percent: 72, color: 'bg-purple-500' },
                { label: 'Orthopedics', percent: 68, color: 'bg-pink-500' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-700">{item.label}</span>
                    <span className="text-slate-900 font-bold">{item.percent}%</span>
                  </div>
                  <div className="h-2 bg-slate-300 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} transition-all duration-500`} style={{ width: `${item.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Score Circular Progress */}
          <div className="rounded-2xl bg-slate-100 border border-slate-300 p-8 shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center">
            <h3 className="text-slate-900 font-semibold mb-6 w-full text-center flex items-center justify-center gap-2">
              <Award size={18} /> Overall Score
            </h3>
            <CircularProgress percentage={82} label="Competency Level" color="#a855f7" />
          </div>

          {/* Activity Timeline */}
          <div className="rounded-2xl bg-slate-100 border border-slate-300 p-8 shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-slate-900 font-semibold mb-6 flex items-center gap-2">
              <CalendarDays size={18} /> Activity Timeline
            </h3>
            <div className="space-y-3">
              {[
                { day: 'Today', activity: 'Completed Cardiothoracic Module', color: 'text-emerald-600' },
                { day: 'Yesterday', activity: 'Practiced Anastomosis Technique', color: 'text-blue-600' },
                { day: '2 days ago', activity: 'Achieved 4.8★ on Heart Bypass', color: 'text-purple-600' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-sm pb-3 border-b border-slate-300 last:border-0">
                  <div className="text-slate-600 w-20 flex-shrink-0">{item.day}</div>
                  <div className={`${item.color} text-xs font-medium truncate`}>{item.activity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS SECTION */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Continue Your Training</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <button 
              onClick={onStartSimulation}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.5),transparent_50%)]"></div>
              <div className="relative flex items-center gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Play size={32} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-white">Start New Simulation</div>
                  <div className="text-blue-100">Launch VR Surgery Module</div>
                </div>
              </div>
            </button>

            <button
              onClick={onOpenAssistant}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 p-8 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.5),transparent_50%)]"></div>
              <div className="relative flex items-center gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Bot size={32} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-white">AI Study Assistant</div>
                  <div className="text-purple-100">Get personalized guidance & help</div>
                </div>
              </div>
            </button>
          </div>
        </section>

        {/* STATUS INDICATOR */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-slate-100 border border-slate-300 rounded-full px-6 py-3 shadow-lg">
            <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-slate-700 text-sm font-medium">System Status: All services operational</span>
          </div>
        </div>
      </section>

      {/* FOOTER PADDING */}
      <div className="h-8"></div>
    </div>
  );
}
