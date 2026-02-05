import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function SignupForm({ onSignupSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCred.user, { displayName: name });
      alert("Account created successfully!");
      
      // Call the success callback to switch to login form
      if (onSignupSuccess) {
        setTimeout(() => {
          onSignupSuccess();
        }, 1000); // Give user time to see the success message
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={signup} className="space-y-4">
      <div className="flex items-center border border-slate-200 rounded-xl px-3 py-2.5 bg-white/80 focus-within:ring-2 focus-within:ring-teal-500/40 focus-within:border-teal-400 transition">
        <FaUser className="text-slate-400" />
        <input
          type="text"
          placeholder="Username"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          className="ml-2 w-full bg-transparent focus:outline-none text-slate-700 placeholder:text-slate-400"
        />
      </div>
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
      <button type="submit" className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold shadow-sm hover:shadow-md hover:from-emerald-600 hover:to-teal-600 transition">
        Sign Up
      </button>
    </form>
  );
}
