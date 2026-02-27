import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDetails } from "../Context/userContext";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

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

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const userData = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      };

      // Save in context + localStorage
      setUser(userData);
      alert("Google Login successful ✅");
      navigate("/");
    } catch (err) {
      console.error("Google Login error:", err);
      alert("Google Login failed ❌");
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

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-background border border-border py-2.5 rounded-lg font-medium hover:bg-muted/50 transition-all shadow-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Sign in with Google
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
