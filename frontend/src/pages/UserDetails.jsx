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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">


        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Complete Your Profile
        </h2>


        {/* Progress */}
        <div className="flex justify-center mb-6">

          <div className="flex gap-3">

            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center
              ${step === 1 ? "bg-indigo-600 text-white" : "bg-gray-300"}`}
            >
              1
            </div>

            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center
              ${step === 2 ? "bg-indigo-600 text-white" : "bg-gray-300"}`}
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
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={fullName}
                  onChange={(e)=>setFullName(e.target.value)}

                />
              </div>


              {/* Role */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Role
                </label>

                <select
                  className="w-full px-4 py-2 border rounded-lg"
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
                <label className="block text-sm font-medium mb-1">
                  Company Name
                </label>

                <input
                  type="text"
                  placeholder="Enter company name"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={companyName}
                  onChange={(e)=>setcompanyName(e.target.value)}

                />
              </div>


              {/* Next */}
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg
                           font-semibold hover:bg-indigo-700"
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
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>

                <input
                  type="text"
                  placeholder="Enter address"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={address}
                  onChange={(e)=> setAddress(e.target.value)}
                />
              </div>


              {/* State */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  State
                </label>

                <input
                  type="text"
                  placeholder="Enter state"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={state}
                  onChange={(e)=>setState(e.target.value)}
                />
              </div>


              {/* City */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  City
                </label>

                <input
                  type="text"
                  placeholder="Enter city"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={city}
                  onChange={(e)=>setCity(e.target.value)}
                />
              </div>


              {/* Postcode */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Postcode
                </label>

                <input
                  type="Number"
                  placeholder="Enter postcode"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={postcode}
                  onChange={(e)=>setPostcode(e.target.value)}
                />
              </div>


              {/* Contact Size */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Contact Size
                </label>

                <input
                  type="number"
                  placeholder="Enter contact size"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={contactsize}
                  onChange={(e)=>setContactsize(e.target.value)}
                />
              </div>


              {/* Industry */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Industry Type
                </label>

                <input
                  type="text"
                  placeholder="Enter industry type"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={industrytype}
                  onChange={(e)=>setIndustrytype(e.target.value)}
                />
              </div>


              {/* Buttons */}
              <div className="flex gap-4">

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/2 bg-gray-400 text-white py-2 rounded-lg
                             hover:bg-gray-500"
                >
                  ← Back
                </button>

                <button
                  type="button"
                  className="w-1/2 bg-green-600 text-white py-2 rounded-lg
                             font-semibold hover:bg-green-700"
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
