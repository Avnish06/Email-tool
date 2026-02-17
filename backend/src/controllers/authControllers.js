import { User } from "../Models/User.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import sendEmail from "../config/sendEmail.js";

const generateToken = (userId) => {
  return jwt.sign(
    { userId },
     process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};
const cookieOptions = {
  httpOnly: true,
  secure: false,      
};
export const signup = async (req, res) => {
  try {
    let { name, email, password, phonenumber} = req.body;

    console.log("REQ BODY ", req.body);

    if (!name || !email || !password || !phonenumber) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({
  $or: [
    { email: email },
    { phonenumber: phonenumber }
  ]
});

    console.log("EXISTING USER", existingUser);

    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("HASHED PASSWORD OK");

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phonenumber
    });
    console.log("USER CREATED", user._id);

    console.log("JWT_SECRET", process.env.JWT_SECRET);

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
    });

    return res.status(201).json({
      message: "Signup successful",
      user,
    });

  } catch (error) {
    console.error("SIGNUP ERROR:", error);
    return res.status(500).json({
      message: "Signup failed",
      error: error.message,
    });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User not found. Please signup first.",
      });
    }

    // Check password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    // Generate token
    const token = generateToken(user._id);

    // Set cookie
    res.cookie("token", token, cookieOptions);

    return res.status(200).json({
      message: "Login successful",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};
export const getCurrentUser = async(req, res)=> {
  let user = await User.findById(req.userId)
     return res.status(200).json({message:"User data fetching Successfully", user})
}
export const sendOtp = async(req, res)=>{
try {
    const {email} = req.body
     const user = await User.findOne({email}) 
     if(!user)
     {
      return res.status(400).json({message:"User doesnt exist"})
     }
     let otp=""
     for(let i=0;i<4;i++)
     {
        otp+= Math.floor((Math.random()*10))
     }
     user.Otp=otp
     await user.save()
      sendEmail(email, "Your otp is", user.Otp)
     res.status(200).json({message:"Otp sended successfully"})
} catch (error) {
  return res.status(500).json({message: "Something went wrong whike sending the otp"})
}
}
export const confirmOtp = async(req, res)=>{
try {
  const {Otp} = req.body
  if(!Otp)
  {
     return res.status(400).json({message:"please fill the otp there"})
  }
  const user = await User.findOne({Otp})
  
  if(!user)
  {
    return res.status(400).json({message:"User doesn't found"})
  }
  user.Otp = ""
  await user.save()
  return res.status(200).json({message:"Otp verified successfully"})
} catch (error) {
     return res.status(500).json({message:"Something went erong while verifying your otp"})
}
}
export const confirmPassword = async(req, res) => {
try {
  const {newPassword, confirmPassword, email} = req.body
  if(newPassword !== confirmPassword)
  {
     return res.status(400).json({message:"password is not matching"})
  }
  const user = await User.findOne({email})
  user.password = newPassword;
  user.save()
     return res.status(200).json({message:"Password reset successfully"})
} catch (error) {
  return res.status(500).json({message:"Something went wrong while resetting your password"})
}
}