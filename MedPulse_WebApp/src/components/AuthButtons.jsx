import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaUserFriends } from "react-icons/fa";

export default function AuthButtons({ handleGoogle, handleFacebook, handleGuest }) {
  return (
    <div className="space-y-3">
      <button onClick={handleGoogle} className="w-full flex items-center justify-center gap-3 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:bg-slate-50 transition">
        <FcGoogle size={20} />
        <span className="text-slate-700 font-medium">Continue with Google</span>
      </button>
      <button onClick={handleFacebook} className="w-full flex items-center justify-center gap-3 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl shadow-sm hover:shadow-md hover:from-blue-700 hover:to-cyan-700 transition">
        <FaFacebook size={20} />
        <span className="font-medium">Continue with Facebook</span>
      </button>
      <button onClick={handleGuest} className="w-full flex items-center justify-center gap-3 py-2.5 bg-slate-900 text-white rounded-xl shadow-sm hover:shadow-md hover:bg-slate-800 transition">
        <FaUserFriends size={20} />
        <span className="font-medium">Open as Guest</span>
      </button>
    </div>
  );
}
