import { useState } from "react";
import { User, Play, Bot, TrendingUp, Trophy, Clock, Star, MessageCircle, BarChart3, Activity, Target ,LogOut} from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; 

export default function Dashboard({ onStartSimulation ,onLogout}) {
  const [user] = useState({
    name: "Siva",
    id: "102303792",
    progress: 38
  });

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      if (onLogout) {
        onLogout(); // This will trigger the parent to show LoginForm
      }
    } catch (error) {
      alert("Error logging out: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Modern Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm z-50">
        <div className="flex items-center justify-between px-8 py-4">
          {/* Left Side - Project Branding */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Activity className="text-white" size={20} />
              </div>
              <div>
                <div className="text-gray-900 text-xl font-bold">MedPulse</div>
                <div className="text-gray-500 text-sm">Advanced Medical Training Platform</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Enhanced User Profile */}
<div className="flex items-center space-x-8">
  {/* Quick Stats Pills */}
  <div className="hidden lg:flex items-center space-x-4">
    <div className="bg-blue-50 border border-blue-100 rounded-full px-4 py-2 flex items-center space-x-2">
      <BarChart3 className="text-blue-600" size={16} />
      <div className="text-sm">
        <span className="text-gray-600">Sessions:</span>
        <span className="font-bold text-blue-600 ml-1">12</span>
      </div>
    </div>
    <div className="bg-emerald-50 border border-emerald-100 rounded-full px-4 py-2 flex items-center space-x-2">
      <Star className="text-emerald-600" size={16} />
      <div className="text-sm">
        <span className="text-gray-600">Score:</span>
        <span className="font-bold text-emerald-600 ml-1">4.2</span>
      </div>
    </div>
    <div className="bg-amber-50 border border-amber-100 rounded-full px-4 py-2 flex items-center space-x-2">
      <Trophy className="text-amber-600" size={16} />
      <div className="text-sm">
        <span className="text-gray-600">Rank:</span>
        <span className="font-bold text-amber-600 ml-1">#15</span>
      </div>
    </div>
  </div>

           {/* Main User Profile Card */}
  <div className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl px-6 py-3 shadow-sm">
    <div className="flex items-center space-x-4">
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
          <User className="text-white" size={20} />
        </div>
        {/* Progress Ring */}
        <div className="absolute -inset-1">
          <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-gray-200"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-indigo-500"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray={`${user.progress}, 100`}
              strokeLinecap="round"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-sm">
          {user.progress}%
        </div>
      </div>
      <div>
        <div className="font-bold text-lg text-gray-900">{user.name}</div>
        <div className="text-gray-500 text-sm">Roll No - {user.id}</div>
        <div className="text-gray-400 text-xs flex items-center mt-1">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          Online • Medical Student
        </div>
      </div>
      <div className="hidden sm:block text-right">
        <div className="text-xs text-gray-400 mb-1">Progress</div>
        <div className="text-sm font-semibold text-gray-700">Course Completion</div>
        <div className="text-xs text-gray-400 mt-1">Active today</div>
      </div>
    </div>
  </div>

  {/* NEW: Logout Button */}
 <button 
    onClick={handleLogout} // Change from onLogout to handleLogout
    className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-2 px-4 rounded-xl shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
  >
    <span className="text-sm">Logout</span>
    <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:animate-pulse"></div>
  </button>
</div>
</div>
</header>

      {/* Main Content */}
      <main className="pt-40 px-8 pb-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Welcome Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome back, {user.name}! 👋</h1>
            <p className="text-xl text-gray-600">Ready to continue your medical training journey?</p>
          </div>

          {/* Progress Overview Section */}
          <section className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-sm border border-gray-200/50 p-8">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                <TrendingUp className="text-white" size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Progress Overview</h2>
                <p className="text-gray-500 text-sm">Track your learning achievements</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-8 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">Completion Rate</h3>
                  <div className="bg-white/20 rounded-xl p-3 group-hover:bg-white/30 transition-all">
                    <Target size={20} />
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-4xl font-bold">75%</p>
                  <p className="text-purple-100">Simulations completed</p>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white rounded-full h-2 w-3/4"></div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-8 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">Recent Modules</h3>
                  <div className="bg-white/20 rounded-xl p-3 group-hover:bg-white/30 transition-all">
                    <Play size={20} />
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-2xl font-bold">Neuro, Heart</p>
                  <p className="text-green-100">Latest completed</p>
                  <div className="flex space-x-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Neurology</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Cardiology</span>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">Best Performance</h3>
                  <div className="bg-white/20 rounded-xl p-3 group-hover:bg-white/30 transition-all">
                    <Trophy size={20} />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <p className="text-4xl font-bold">4.8</p>
                    <Star className="text-yellow-300" size={24} />
                  </div>
                  <p className="text-orange-100">Heart Bypass Surgery</p>
                  <div className="bg-white/20 px-3 py-1 rounded-full text-sm w-fit">Excellence Award</div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Stats Section */}
          <section className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-sm border border-gray-200/50 p-8">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <BarChart3 className="text-white" size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Weekly Statistics</h2>
                <p className="text-gray-500 text-sm">Your recent activity summary</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 hover:shadow-md transition-all w-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-gray-700">Practice Sessions</h3>
                  <div className="bg-blue-500 rounded-xl p-2">
                    <Clock className="text-white" size={18} />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-blue-600">12</p>
                  <p className="text-gray-600 text-sm">3 surgeries attempted</p>
                  <div className="text-xs text-green-600 font-medium">↗ +2 from last week</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100 hover:shadow-md transition-all w-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-gray-700">Average Rating</h3>
                  <div className="bg-purple-500 rounded-xl p-2">
                    <Star className="text-white" size={18} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <p className="text-3xl font-bold text-purple-600">4.2</p>
                    <div className="flex">
                      {[1,2,3,4].map(i => <Star key={i} className="text-yellow-400 fill-current" size={16} />)}
                      <Star className="text-gray-300" size={16} />
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">Across all procedures</p>
                  <div className="text-xs text-green-600 font-medium">↗ +0.3 improvement</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100 hover:shadow-md transition-all w-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-gray-700">Focus Area</h3>
                  <div className="bg-rose-500 rounded-xl p-2">
                    <MessageCircle className="text-white" size={18} />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-rose-600 font-bold text-lg">Tool Precision</p>
                  <p className="text-gray-600 text-sm">Neurosurgery procedures</p>
                  <div className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-xs w-fit">Practice Recommended</div>
                </div>
              </div>
            </div>
          </section>

          {/* Action Buttons Section */}
          <section className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-sm border border-gray-200/50 p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Continue Your Training</h2>
              <p className="text-gray-600">Choose your next learning experience</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
              <button 
                onClick={onStartSimulation}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-6 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-4 w-full lg:w-auto min-w-80"
              >
                <div className="bg-white/20 rounded-2xl p-4 group-hover:bg-white/30 transition-all">
                  <Play size={24} />
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold">Start New Simulation</div>
                  <div className="text-blue-100 text-sm">Launch Unity/WebGL environment</div>
                  <div className="text-blue-200 text-xs mt-1">Recommended: Cardiac Surgery Module</div>
                </div>
              </button>

              <a
  href="https://medimentor-two.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full lg:w-auto"
>
  <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-6 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-4 min-w-80">
    <div className="bg-white/20 rounded-2xl p-4 group-hover:bg-white/30 transition-all">
      <Bot size={24} />
    </div>
    <div className="text-left">
      <div className="text-xl font-bold">AI Study Assistant</div>
      <div className="text-purple-100 text-sm">Get personalized help & guidance</div>
      <div className="text-purple-200 text-xs mt-1">Ask questions, review concepts</div>
    </div>
  </button>
</a>

            </div>
          </section>

          {/* Status Note */}
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl px-6 py-3 text-green-800 shadow-sm">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium">System Status: All services operational • Guest access enabled</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}