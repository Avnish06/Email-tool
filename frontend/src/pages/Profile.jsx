import { useNavigate } from "react-router-dom";
import { useDetails } from "../Context/userContext";

const Profile = () => {

  const navigate = useNavigate();
  const { user, setUser } = useDetails();
  const handleLogout = () => {

    const confirm = window.confirm("Logout from your account?");

    if (!confirm) return;

    setUser(null);

    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="pt-28 min-h-screen bg-gray-50 flex justify-center px-4">

      <div className="bg-white max-w-lg w-full p-8 rounded-xl shadow space-y-6">

        <h1 className="text-2xl font-bold text-center">
          My Profile 👤
        </h1>

        {/* Avatar */}
        <div className="flex justify-center">

          <div className="w-24 h-24 rounded-full bg-teal-500 flex items-center justify-center text-white text-3xl font-bold">
            {user?.name?.charAt(0) || "U"}
          </div>

        </div>

        {/* Info */}
        <div className="space-y-4">

          {/* Name */}
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-semibold text-gray-800">
              {user?.name || "Not Available"}
            </p>
          </div>

          {/* Email */}
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold text-gray-800">
              {user?.email || "Not Available"}
            </p>
          </div>

          {/* Role */}
          <div>
            <p className="text-sm text-gray-500">Account Type</p>
            <p className="font-semibold text-gray-800">
              {user?.role || "User"}
            </p>
          </div>

          {/* Joined */}
          <div>
            <p className="text-sm text-gray-500">Joined On</p>
            <p className="font-semibold text-gray-800">
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "Recently"}
            </p>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">

          <button
            onClick={() => navigate("/campaigns")}
            className="flex-1 border px-4 py-2 rounded hover:bg-gray-100"
          >
            Dashboard
          </button>

          <button
            onClick={handleLogout}
            className="flex-1 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Profile;
