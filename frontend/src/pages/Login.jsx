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
    <div className="min-h-screen bg-background flex items-center justify-center px-6 relative overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-20 pointer-events-none" />

      <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-xl p-8 relative z-10 backdrop-blur-sm">

        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-foreground mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-muted-foreground mb-8 text-sm">
          Login to your Hatbaliya Technology account
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>

            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner"
            />

          </div>

          {/* Password */}
          <div>

            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner"
            />

          </div>

          {/* Forgot */}
          <div className="text-right">

            <span
              className="text-sm text-primary font-medium hover:underline cursor-pointer"
            >
              Forgot password?
            </span>

          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        {/* Footer */}
        <p className="text-sm text-center text-muted-foreground mt-6">
          Don’t have an account?

          <span
            className="text-primary font-bold cursor-pointer ml-1 hover:underline"
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
