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
    <div className="pt-28 min-h-screen bg-background flex justify-center px-4 relative overflow-hidden text-foreground">
      <div className="bg-grid absolute inset-0 opacity-20 pointer-events-none" />

      <div className="bg-card max-w-lg w-full p-8 rounded-xl border border-border shadow-2xl space-y-6 relative z-10 backdrop-blur-sm h-fit">

        <h1 className="text-2xl font-bold text-center">
          My Profile 👤
        </h1>

        {/* Avatar */}
        <div className="flex justify-center">

          <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-3xl font-bold shadow-lg shadow-primary/20">
            {user?.name?.charAt(0) || "U"}
          </div>

        </div>

        {/* Info */}
        <div className="space-y-4">

          {/* Name */}
          <div>
            <p className="text-sm text-muted-foreground">Full Name</p>
            <p className="font-semibold text-foreground">
              {user?.name || "Not Available"}
            </p>
          </div>

          {/* Email */}
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-semibold text-foreground">
              {user?.email || "Not Available"}
            </p>
          </div>

          {/* Role */}
          <div>
            <p className="text-sm text-muted-foreground">Account Type</p>
            <p className="font-semibold text-foreground">
              {user?.role || "User"}
            </p>
          </div>

          {/* Joined */}
          <div>
            <p className="text-sm text-muted-foreground">Joined On</p>
            <p className="font-semibold text-foreground">
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
            className="flex-1 border border-border px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-all font-medium"
          >
            Dashboard
          </button>

          <button
            onClick={handleLogout}
            className="flex-1 bg-destructive text-destructive-foreground px-4 py-2 rounded-lg font-semibold hover:bg-destructive/90 transition-all"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Profile;
