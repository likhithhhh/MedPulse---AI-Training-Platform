import { useState } from "react";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";

export default function ForgotPasswordForm({ onBackToLogin }) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address");
      return;
    }

    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent successfully! Please check your inbox.");
      // Optionally go back to login after successful email send
      setTimeout(() => {
        onBackToLogin();
      }, 2000);
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <button 
        onClick={onBackToLogin}
        className="flex items-center text-slate-500 hover:text-teal-600 mb-4 font-medium"
      >
        <FaArrowLeft className="mr-2" />
        Back to Login
      </button>
      
      <form onSubmit={handlePasswordReset} className="space-y-4">
        <div className="text-sm text-slate-600 mb-4">
          Enter your email address and we'll send you a link to reset your password.
        </div>
        
        <div className="flex items-center border border-slate-200 rounded-xl px-3 py-2.5 bg-white/80 focus-within:ring-2 focus-within:ring-teal-500/40 focus-within:border-teal-400 transition">
          <FaEnvelope className="text-slate-400" />
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="ml-2 w-full bg-transparent focus:outline-none text-slate-700 placeholder:text-slate-400"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full py-2.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold shadow-sm hover:shadow-md hover:from-teal-700 hover:to-cyan-700 disabled:from-slate-300 disabled:to-slate-300 disabled:text-slate-500 transition"
        >
          {isLoading ? "Sending..." : "Send Reset Email"}
        </button>
      </form>
    </div>
  );
}

