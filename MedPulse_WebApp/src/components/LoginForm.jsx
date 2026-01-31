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
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={login} className="space-y-4">
      <div className="flex items-center border rounded px-3 py-2">
        <FaEnvelope className="text-gray-400" />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="ml-2 w-full bg-transparent focus:outline-none"
        />
      </div>
      <div className="flex items-center border rounded px-3 py-2">
        <FaLock className="text-gray-400" />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="ml-2 w-full bg-transparent focus:outline-none"
        />
      </div>
      <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Log In
      </button>
      <button 
        type="button" 
        onClick={onForgotPassword} 
        className="w-full text-center text-gray-500 hover:text-blue-500"
      >
        Forgot Password?
      </button>
    </form>
  );
}