import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDetails } from "../Context/userContext";

const Login = () => {

  const navigate = useNavigate();
  const { setUser } = useDetails();

  /* ================= STATES ================= */

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= SUBMIT ================= */

  const handleLogin = async (e) => {

    e.preventDefault();

    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    try {

      setLoading(true);

      // 👉 Later you will replace this with API call
      // const res = await axios.post("/login", { email, password });

      // Temporary mock login
      const fakeUser = {
        name: "User",
        email: email,
      };

      // Save in context + localStorage
      setUser(fakeUser);

      alert("Login successful ✅");

      navigate("/");

    } catch (err) {

      alert("Login failed ❌");
      console.log(err)

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eafff4] via-[#d6fff0] to-[#b8ffe6] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8">

        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Login to your Hatbaliya Technology account
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

          </div>

          {/* Password */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

          </div>

          {/* Forgot */}
          <div className="text-right">

            <span
              className="text-sm text-teal-600 hover:underline cursor-pointer"
            >
              Forgot password?
            </span>

          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition shadow-md disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?

          <span
            className="text-teal-600 font-medium cursor-pointer ml-1"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>

        </p>

      </div>

    </div>
  );
};

export default Login;
