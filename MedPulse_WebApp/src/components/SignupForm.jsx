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
      <div className="flex items-center border rounded px-3 py-2">
        <FaUser className="text-gray-400" />
        <input
          type="text"
          placeholder="Username"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          className="ml-2 w-full bg-transparent focus:outline-none"
        />
      </div>
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
      <button type="submit" className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Sign Up
      </button>
    </form>
  );
}