
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import React from "react";

import { AppUrl } from "../App";
import { useDetails } from "../Context/userContext";

const SignupForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState(""); 
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { setUser } = useDetails();
  const navigate = useNavigate();

  const handleSignup = async (e) => {

    e.preventDefault();

    // Validation
    if (!name || !email || !phonenumber || !password) {
      toast.error("All fields are required");
      return;
    }

    if (phonenumber.length !== 10) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {

      const res = await axios.post(
        `${AppUrl}/auth/signup`,
        {
          name,
          email,
          phonenumber, 
          password,
        },
        {
          withCredentials: true,
        }
      );

      toast.success("Signed up successfully 🎉");

      // Save user in context
      setUser(res.data.user);

      navigate("/userdetails");

    } catch (error) {

      console.error("Signup error:", error);

      toast.error("Signup failed")
    
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 relative overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-20 pointer-events-none" />

      <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-xl p-8 relative z-10 backdrop-blur-sm">

        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-foreground mb-6">
          Create an Account
        </h2>


        {/* Form */}
        <form className="space-y-5" onSubmit={handleSignup}>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Username
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground
                         focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner"
            />
          </div>


          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground
                         focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner"
            />
          </div>


          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Phone Number
            </label>

            <input
              type="tel"
              value={phonenumber}
              onChange={(e) =>
                setPhonenumber(e.target.value.replace(/\D/g, ""))
              }
              placeholder="Enter your phone number"
              maxLength={10}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground
                         focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner"
            />
          </div>


          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 pr-10 bg-background border border-border rounded-lg text-foreground
                           focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2
                           cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
              >
              </span>

            </div>
          </div>


          {/* Button */}
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg
                       font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Sign Up
          </button>

        </form>


        {/* Footer */}
        <p className="text-sm text-center text-muted-foreground mt-6">

          Already have an account?

          <span
            className="text-primary font-bold cursor-pointer ml-1 hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>

        </p>

      </div>

    </div>
  );
};

export default SignupForm;
