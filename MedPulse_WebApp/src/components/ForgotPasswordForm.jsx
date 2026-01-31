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
        className="flex items-center text-gray-500 hover:text-blue-500 mb-4"
      >
        <FaArrowLeft className="mr-2" />
        Back to Login
      </button>
      
      <form onSubmit={handlePasswordReset} className="space-y-4">
        <div className="text-sm text-gray-600 mb-4">
          Enter your email address and we'll send you a link to reset your password.
        </div>
        
        <div className="flex items-center border rounded px-3 py-2">
          <FaEnvelope className="text-gray-400" />
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="ml-2 w-full bg-transparent focus:outline-none"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isLoading ? "Sending..." : "Send Reset Email"}
        </button>
      </form>
    </div>
  );
}


