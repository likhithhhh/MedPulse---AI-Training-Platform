import { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import AuthButtons from "./components/AuthButtons";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import Dashboard from "./components/Dashboard";
import SimulationSelector from "./components/SimulationSelector";
import { auth, googleProvider, facebookProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";

export default function App() {
  const [selectedSimulation, setSelectedSimulation] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [currentPage, setCurrentPage] = useState('auth'); // 'auth', 'dashboard', 'simulation'

  const handleProviderLogin = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      alert("Logged in successfully!");
      setCurrentPage('dashboard');
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
    setCurrentPage('auth'); // Return to auth page
  } catch (error) {
    alert("Error logging out: " + error.message);
  }
};

  const handleGuestAccess = () => {
    setCurrentPage('dashboard');
  };

  const handleSignupSuccess = () => {
    setIsLogin(true); // Switch to login form after successful signup
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
    setCurrentPage('dashboard');
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
      onLogout={handleLogout}
    />
  );
}

  
  if (currentPage === 'dashboard') {
  return (
    <Dashboard 
      onStartSimulation={handleStartSimulation} 
      onLogout={handleLogout} 
    />
  );
}

  // Default auth page
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Left Panel */}
        <div className="md:w-1/2 bg-blue-50 flex flex-col justify-center items-start p-12">
          <h1 className="text-4xl font-bold mb-4">
            {showForgotPassword ? "Reset Password" : "Welcome Back!"}
          </h1>
          <p className="text-lg">
            {showForgotPassword ? "Enter your email to reset" : "Access your"}
          </p>
          <p className="text-lg font-semibold">
            {showForgotPassword ? "your password" : "Medical Simulation and Progress"}
          </p>
          
          {!showForgotPassword && (
            <div className="mt-8 flex space-x-4">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-4 py-2 rounded-full ${isLogin ? 'bg-white text-black' : 'bg-blue-500 text-white'}`}
              >
                Log in
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-4 py-2 rounded-full ${!isLogin ? 'bg-white text-black' : 'bg-blue-500 text-white'}`}
              >
                Sign up
              </button>
            </div>
          )}
        </div>

        {/* Right Panel */}
        <div className="md:w-1/2 p-8 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            {showForgotPassword ? "Forgot Password" : isLogin ? "Log In" : "Sign Up"}
          </h2>

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
                  <div className="text-center text-gray-400 my-4">or</div>
                </>
              )}

              {isLogin ? (
                <LoginForm 
                  onForgotPassword={handleForgotPassword} 
                  onLoginSuccess={() => setCurrentPage('dashboard')}
                />
              ) : (
                <SignupForm onSignupSuccess={handleSignupSuccess} />
              )}

              <div className="text-center mt-4 text-sm text-gray-600">
                {isLogin ? (
                  <>
                    Don't have an account?{" "}
                    <button onClick={() => setIsLogin(false)} className="text-blue-500 hover:underline">
                      Sign up.
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button onClick={() => setIsLogin(true)} className="text-blue-500 hover:underline">
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