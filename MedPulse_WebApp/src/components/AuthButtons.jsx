import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaUserFriends } from "react-icons/fa";

export default function AuthButtons({ handleGoogle, handleFacebook, handleGuest }) {
  return (
    <div className="space-y-3">
      <button onClick={handleGoogle} className="w-full flex items-center justify-center gap-2 py-2 bg-white border rounded shadow-sm hover:bg-gray-100">
        <FcGoogle size={20} />
        Continue with Google
      </button>
      <button onClick={handleFacebook} className="w-full flex items-center justify-center gap-2 py-2 bg-blue-600 text-white rounded shadow-sm hover:bg-blue-700">
        <FaFacebook size={20} />
        Continue with Facebook
      </button>
      <button onClick={handleGuest} className="w-full flex items-center justify-center gap-2 py-2 bg-gray-600 text-white rounded shadow-sm hover:bg-gray-700">
        <FaUserFriends size={20} />
        Open as Guest
      </button>
    </div>
  );
}