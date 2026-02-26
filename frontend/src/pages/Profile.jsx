import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDetails } from "../Context/userContext";
import axios from "axios";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Edit2,
  LogOut,
  LayoutDashboard,
  Megaphone,
  BarChart2,
  FileText,
  Users as UsersIcon,
  CheckCircle,
  Shield,
} from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useDetails();

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phonenumber: user?.phonenumber || "",
    password: "",
  });

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/campaigns" },
    { icon: Megaphone, label: "Campaigns", path: "/campaigns" },
    { icon: BarChart2, label: "Analytics", path: "/analytics" },
    { icon: FileText, label: "Templates", path: "/campaign/templates" },
    { icon: UsersIcon, label: "Contacts", path: "/contacts" },
  ];

  const handleLogout = () => {
    const confirm = window.confirm("Logout from your account?");
    if (!confirm) return;
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleEdit = () => {
    setIsEditing(true);
    setError("");
    setSuccess("");
  };

  const handleCancel = () => {
    setIsEditing(false);
    setError("");
    setSuccess("");
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      phonenumber: user?.phonenumber || "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const updateData = {};
      if (formData.name !== user?.name) updateData.name = formData.name;
      if (formData.email !== user?.email) updateData.email = formData.email;
      if (formData.phonenumber !== user?.phonenumber)
        updateData.phonenumber = formData.phonenumber;
      if (formData.password) updateData.password = formData.password;

      if (Object.keys(updateData).length === 0) {
        setError("No changes to save");
        setLoading(false);
        return;
      }

      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/profile`,
        updateData,
        { withCredentials: true }
      );

      if (response.data.user) {
        setUser(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setSuccess("Profile updated successfully!");
        setIsEditing(false);
        setFormData({
          ...formData,
          password: "",
        });
      }
    } catch (err) {
      console.error("Update error:", err);
      setError(err.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Recently";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <nav className="w-64 bg-card border-r border-border flex flex-col flex-shrink-0">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Mail size={18} className="text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-primary">EmailSpark</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="py-4 px-3">
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* User Profile - Active */}
        <div className="mt-auto p-6 border-t border-border">
          <div className="flex items-center gap-3 p-2 rounded-lg bg-primary/10">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
              {user?.name?.charAt(0) || "U"}
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-sm text-foreground">
                {user?.name || "User"}
              </span>
              <span className="text-xs text-muted-foreground">My Profile</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-border bg-card px-8 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Home
            </button>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm font-medium text-foreground">Profile</span>
          </div>
          <button className="p-2 hover:bg-accent rounded-lg transition-colors">
            <Shield size={18} className="text-muted-foreground" />
          </button>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl">
            {/* Page Title */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-foreground">My Profile</h1>
                <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 rounded-full">
                  <CheckCircle size={14} className="text-primary" />
                  <span className="text-xs font-medium text-primary">Verified</span>
                </div>
              </div>
              {!isEditing && (
                <button
                  onClick={handleEdit}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium"
                >
                  <Edit2 size={16} />
                  Edit Profile
                </button>
              )}
            </div>

            {/* Profile Card */}
            <div className="bg-card border border-border rounded-xl p-8 mb-6">
              {/* Avatar and Basic Info */}
              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-border">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-3xl font-bold">
                  {formData.name?.charAt(0) || "U"}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-1">
                    {user?.name || "Unknown User"}
                  </h2>
                  <p className="text-sm text-muted-foreground">User Account</p>
                </div>
              </div>

              {/* Success/Error Messages */}
              {success && (
                <div className="mb-6 bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-green-600 text-sm">
                  {success}
                </div>
              )}
              {error && (
                <div className="mb-6 bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-600 text-sm">
                  {error}
                </div>
              )}

              {/* Personal Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
                      <User size={16} />
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="Enter your name"
                      />
                    ) : (
                      <p className="text-foreground font-medium">
                        {user?.name || (
                          <span className="italic text-muted-foreground">
                            Not Available
                          </span>
                        )}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
                      <Mail size={16} />
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="Enter your email"
                      />
                    ) : (
                      <p className="text-foreground font-medium">
                        {user?.email || (
                          <span className="italic text-muted-foreground">
                            Not Available
                          </span>
                        )}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
                      <Phone size={16} />
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phonenumber"
                        value={formData.phonenumber}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="Enter your phone number"
                      />
                    ) : (
                      <p className="text-foreground font-medium">
                        {user?.phonenumber || (
                          <span className="italic text-muted-foreground">
                            Not Available
                          </span>
                        )}
                      </p>
                    )}
                  </div>

                  {/* Joined On */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
                      <Calendar size={16} />
                      Joined On
                    </label>
                    <p className="text-foreground font-medium">
                      {formatDate(user?.createdAt)}
                    </p>
                  </div>

                  {/* Password (only in edit mode) */}
                  {isEditing && (
                    <div className="md:col-span-2">
                      <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
                        <Shield size={16} />
                        New Password (optional)
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="Leave blank to keep current password"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              {isEditing && (
                <div className="flex gap-3 pt-6 border-t border-border">
                  <button
                    onClick={handleCancel}
                    disabled={loading}
                    className="flex-1 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-accent transition-all font-medium disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={loading}
                    className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-50"
                  >
                    {loading ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              )}
            </div>

            {/* Sign Out Section */}
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-red-900 dark:text-red-400 mb-1">
                    Sign Out
                  </h3>
                  <p className="text-sm text-red-700 dark:text-red-500">
                    Securely log out of your account on this device.
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all font-medium"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
