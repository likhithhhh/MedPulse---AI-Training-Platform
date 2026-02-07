import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function LoginForm({ onForgotPassword, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
      if (onLoginSuccess) {
        onLoginSuccess(cred?.user || auth.currentUser);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={login} className="space-y-4">
      <div className="flex items-center border border-slate-200 rounded-xl px-3 py-2.5 bg-white/80 focus-within:ring-2 focus-within:ring-teal-500/40 focus-within:border-teal-400 transition">
        <FaEnvelope className="text-slate-400" />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="ml-2 w-full bg-transparent focus:outline-none text-slate-700 placeholder:text-slate-400"
        />
      </div>
      <div className="flex items-center border border-slate-200 rounded-xl px-3 py-2.5 bg-white/80 focus-within:ring-2 focus-within:ring-teal-500/40 focus-within:border-teal-400 transition">
        <FaLock className="text-slate-400" />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="ml-2 w-full bg-transparent focus:outline-none text-slate-700 placeholder:text-slate-400"
        />
      </div>
      <button type="submit" className="w-full py-2.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold shadow-sm hover:shadow-md hover:from-teal-700 hover:to-cyan-700 transition">
        Log In
      </button>
      <button 
        type="button" 
        onClick={onForgotPassword} 
        className="w-full text-center text-slate-500 hover:text-teal-600 font-medium"
      >
        Forgot Password?
      </button>
    </form>
  );
}
