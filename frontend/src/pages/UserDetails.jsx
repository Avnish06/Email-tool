import React from "react";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { AppUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const UserDetailsForm = () => {
   
  const navigate = useNavigate()
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState()
  const [role, setRole] = useState()
  const [companyName, setcompanyName] = useState()
  const [address, setAddress] = useState()
  const [state, setState] = useState()
  const [city, setCity] = useState()
  const [postcode, setPostcode] = useState()
  const [contactsize, setContactsize] = useState()
  const [industrytype, setIndustrytype] = useState()
const [Loading, setLoading] = useState(false)

   const submitForm = async()=>{
       try {
          setLoading(true)
       const response = await axios.post(AppUrl + "/userinfo/userdetails",{ fullName, role,
         companyName, address, state, city, postcode,contactsize, industrytype},{withCredentials: true})
       console.log(response.data)
       toast.success(response.data.message)
        navigate("/")
       } catch (error) {
        toast.error(error.response.data.message)
       }
   }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 relative overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-20 pointer-events-none" />

      <div className="w-full max-w-xl bg-card border border-border shadow-xl rounded-2xl p-8 relative z-10 backdrop-blur-sm">


        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
          Complete Your Profile
        </h2>


        {/* Progress */}
        <div className="flex justify-center mb-6">

          <div className="flex gap-3">

             <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all
              ${step === 1 ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-muted text-muted-foreground"}`}
            >
              1
            </div>

            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all
              ${step === 2 ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-muted text-muted-foreground"}`}
            >
              2
            </div>

          </div>

        </div>


        <form className="space-y-5">


          {/* ================= STEP 1 ================= */}
          {step === 1 && (

            <>

               {/* Full Name */}
              <div>
                <label className="block text-sm font-medium mb-1 text-muted-foreground">
                  Full Name
                </label>

                 <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner"
                  value={fullName}
                  onChange={(e)=>setFullName(e.target.value)}

                />
              </div>


               {/* Role */}
              <div>
                <label className="block text-sm font-medium mb-1 text-muted-foreground">
                  Role
                </label>

                 <select
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner"
                  value={role}
                  onChange={(e)=>setRole(e.target.value)}
                >
                  <option>Select Role</option>
                  <option>CEO</option>
                  <option>CMO</option>
                  <option>Content-Contributor</option>
                  <option>Designer</option>
                  <option>Marketer</option>
                  <option>Market Analysis</option>
                </select>
              </div>


               {/* Company */}
              <div>
                <label className="block text-sm font-medium mb-1 text-muted-foreground">
                  Company Name
                </label>

                 <input
                  type="text"
                  placeholder="Enter company name"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner"
                  value={companyName}
                  onChange={(e)=>setcompanyName(e.target.value)}

                />
              </div>


               {/* Next */}
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg
                           font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
              >
                Next →
              </button>

            </>
          )}


          {/* ================= STEP 2 ================= */}
          {step === 2 && (

            <>

               {/* Address */}
              <div>
                <label className="block text-sm font-medium mb-1 text-muted-foreground">
                  Address
                </label>

                 <input
                  type="text"
                  placeholder="Enter address"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner"
                  value={address}
                  onChange={(e)=> setAddress(e.target.value)}
                />
              </div>


               {/* State */}
              <div>
                <label className="block text-sm font-medium mb-1 text-muted-foreground">
                  State
                </label>

                 <input
                  type="text"
                  placeholder="Enter state"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner"
                  value={state}
                  onChange={(e)=>setState(e.target.value)}
                />
              </div>


               {/* City */}
              <div>
                <label className="block text-sm font-medium mb-1 text-muted-foreground">
                  City
                </label>

                 <input
                  type="text"
                  placeholder="Enter city"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner"
                  value={city}
                  onChange={(e)=>setCity(e.target.value)}
                />
              </div>


               {/* Postcode */}
              <div>
                <label className="block text-sm font-medium mb-1 text-muted-foreground">
                  Postcode
                </label>

                 <input
                  type="Number"
                  placeholder="Enter postcode"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner"
                  value={postcode}
                  onChange={(e)=>setPostcode(e.target.value)}
                />
              </div>


               {/* Contact Size */}
              <div>
                <label className="block text-sm font-medium mb-1 text-muted-foreground">
                  Contact Size
                </label>

                 <input
                  type="number"
                  placeholder="Enter contact size"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner"
                  value={contactsize}
                  onChange={(e)=>setContactsize(e.target.value)}
                />
              </div>


               {/* Industry */}
              <div>
                <label className="block text-sm font-medium mb-1 text-muted-foreground">
                  Industry Type
                </label>

                 <input
                  type="text"
                  placeholder="Enter industry type"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner"
                  value={industrytype}
                  onChange={(e)=>setIndustrytype(e.target.value)}
                />
              </div>


              {/* Buttons */}
               <div className="flex gap-4">

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/2 bg-muted text-muted-foreground py-3 rounded-lg font-bold
                             hover:bg-muted/80 transition-all border border-border"
                >
                  ← Back
                </button>

                <button
                  type="button"
                  className="w-1/2 bg-primary text-primary-foreground py-3 rounded-lg
                             font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
                             onClick={submitForm}
                >
                  Submit 
                </button>

              </div>

            </>
          )}

        </form>

      </div>

    </div>
  );
};

export default UserDetailsForm;
