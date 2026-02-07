import { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import AuthButtons from "./components/AuthButtons";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import Dashboard from "./components/Dashboard";
import SimulationSelector, { SimulationView } from "./components/SimulationSelector";
import AdminDashboard from "./pages/AdminDashboard";
import ChatbotPage from "./components/ChatbotPage";
import { auth, googleProvider, facebookProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";
import { isAdminEmail } from "./constants/admin";
import authVisual from "./assets/vr-surgical.png";

export default function App() {
  const [selectedSimulation, setSelectedSimulation] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [currentPage, setCurrentPage] = useState('auth'); // 'auth', 'dashboard', 'simulation', 'simulationView', 'admin', 'assistant'

  useEffect(() => {
    const applyPath = () => {
      if (window.location.pathname === "/admin") {
        setCurrentPage("admin");
        return;
      }

      if (window.location.pathname === "/assistant") {
        setCurrentPage("assistant");
      }
    };

    applyPath();
    window.addEventListener("popstate", applyPath);
    return () => window.removeEventListener("popstate", applyPath);
  }, []);

  const goToDashboard = (user) => {
    const email = user?.email || auth.currentUser?.email || "";
    if (isAdminEmail(email)) {
      window.history.pushState({}, "", "/admin");
      setCurrentPage("admin");
      return;
    }
    window.history.pushState({}, "", "/");
    setCurrentPage("dashboard");
  };

  const handleProviderLogin = async (provider) => {
    try {
      const cred = await signInWithPopup(auth, provider);
      alert("Logged in successfully!");
      goToDashboard(cred?.user || auth.currentUser);
    } catch (err) {
      alert(err.message);
    }
  };
  const handleSimulationSelect = (simulation) => {
  setSelectedSimulation(simulation);
  setCurrentPage('simulationView');
};
const handleBackToSelector = () => {
  setCurrentPage('simulation');
  setSelectedSimulation(null);
};
  const handleLogout = async () => {
  try {
    await signOut(auth);
    alert("Logged out successfully!");
    window.history.pushState({}, "", "/");
    setCurrentPage('auth'); // Return to auth page
  } catch (error) {
    alert("Error logging out: " + error.message);
  }
};

  const handleGuestAccess = () => {
    goToDashboard();
  };

  const handleSignupSuccess = () => {
    goToDashboard(); // Auto-login: go straight to dashboard
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setShowForgotPassword(false);
    setIsLogin(true);
  };

  const handleStartSimulation = () => {
    setCurrentPage('simulation');
  };

  const handleBackToDashboard = () => {
    goToDashboard();
  };

  const handleOpenAdmin = () => {
    window.history.pushState({}, "", "/admin");
    setCurrentPage("admin");
  };

  const handleOpenAssistant = () => {
    window.history.pushState({}, "", "/assistant");
    setCurrentPage("assistant");
  };

  // Render based on current page
  if (currentPage === 'simulation') {
  return (
    <SimulationSelector 
      onBackToDashboard={handleBackToDashboard} 
      onSelectSimulation={handleSimulationSelect}
      onLogout={handleLogout} 
    />
  );
}

if (currentPage === 'simulationView') {
  return (
    <SimulationView 
      simulation={selectedSimulation} 
      onBackToSelector={handleBackToSelector}
    />
  );
}

if (currentPage === 'admin') {
  return (
    <AdminDashboard onBackToDashboard={handleBackToDashboard} />
  );
}

if (currentPage === 'assistant') {
  return (
    <ChatbotPage onBackToDashboard={handleBackToDashboard} />
  );
}
  
  if (currentPage === 'dashboard') {
  return (
    <Dashboard 
      onStartSimulation={handleStartSimulation} 
      onLogout={handleLogout} 
      onOpenAdmin={handleOpenAdmin}
      onOpenAssistant={handleOpenAssistant}
    />
  );
}

  // Default auth page
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-amber-50 via-slate-50 to-teal-50 p-6 flex items-center justify-center font-['Space_Grotesk']">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-teal-200 to-cyan-200 opacity-60 blur-2xl animate-[floatSoft_10s_ease-in-out_infinite]"></div>
      <div className="absolute -bottom-28 -left-16 w-80 h-80 rounded-full bg-gradient-to-br from-orange-200 to-amber-200 opacity-70 blur-2xl animate-[floatSoft_12s_ease-in-out_infinite]"></div>

      <div className="relative flex flex-col md:flex-row w-full max-w-6xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)] border border-white/70 overflow-hidden animate-[fadeUp_0.6s_ease]">
        
        {/* Left Panel */}
        <div
          className="md:w-1/2 relative text-white flex flex-col justify-between p-12 overflow-hidden"
          style={{ backgroundImage: `url(${authVisual})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-700/85 via-cyan-700/80 to-sky-600/80"></div>
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_55%)]"></div>
          <div className="absolute -right-20 top-10 h-52 w-52 rounded-full bg-white/20 blur-2xl"></div>
          <div className="relative">
            <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-1 text-xs uppercase tracking-widest mb-6">
              MedPulse Platform
            </div>
            <h1 className="text-4xl md:text-5xl font-['Fraunces'] font-bold mb-4 leading-tight">
            {showForgotPassword ? "Reset Password" : "Welcome Back!"}
          </h1>
          <p className="text-lg text-white/90">
            {showForgotPassword ? "Enter your email to reset" : "Access your"}
          </p>
          <p className="text-lg font-semibold text-white/90">
            {showForgotPassword ? "your password" : "Medical Simulation and Progress"}
          </p>
          </div>
          
          {!showForgotPassword && (
            <div className="relative mt-10 flex flex-wrap gap-3">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  isLogin
                    ? 'bg-white text-slate-900 shadow-lg'
                    : 'bg-white/15 text-white hover:bg-white/25'
                }`}
              >
                Log in
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  !isLogin
                    ? 'bg-white text-slate-900 shadow-lg'
                    : 'bg-white/15 text-white hover:bg-white/25'
                }`}
              >
                Sign up
              </button>
            </div>
          )}
          <div className="relative mt-10 text-sm text-white/80">
            Train with high‑fidelity cases, adaptive feedback, and patient‑safe practice.
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            {showForgotPassword ? "Forgot Password" : isLogin ? "Log In" : "Sign Up"}
          </h2>
            <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Secure access
            </div>
          </div>

          {showForgotPassword ? (
            <ForgotPasswordForm onBackToLogin={handleBackToLogin} />
          ) : (
            <>
              {isLogin && (
                <>
                  <AuthButtons
                    handleGoogle={() => handleProviderLogin(googleProvider)}
                    handleFacebook={() => handleProviderLogin(facebookProvider)}
                    handleGuest={handleGuestAccess}
                  />
                  <div className="flex items-center gap-4 my-6 text-slate-400 text-sm">
                    <div className="h-px flex-1 bg-slate-200"></div>
                    or
                    <div className="h-px flex-1 bg-slate-200"></div>
                  </div>
                </>
              )}

              {isLogin ? (
                <LoginForm 
                  onForgotPassword={handleForgotPassword} 
                  onLoginSuccess={goToDashboard}
                />
              ) : (
                <SignupForm onSignupSuccess={handleSignupSuccess} />
              )}

              <div className="text-center mt-6 text-sm text-slate-600">
                {isLogin ? (
                  <>
                    Don't have an account?{" "}
                    <button onClick={() => setIsLogin(false)} className="text-teal-600 hover:text-teal-700 font-semibold">
                      Sign up.
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button onClick={() => setIsLogin(true)} className="text-teal-600 hover:text-teal-700 font-semibold">
                      Log in.
                    </button>
                  </>
                )}

              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
