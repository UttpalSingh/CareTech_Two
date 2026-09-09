import React, { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [input, setInput] = useState("")
    const [msg, setMsg] = useState()
    const navigate = useNavigate()

    function formSubmit(e){
        e.preventDefault()
        console.log(input);
        
        if(!input){
            setMsg("Please enter aadhar number.")
            return
        }
        
        if(input && input.length !== 12){
            setMsg("Aadhar number should be 12 digit.")
            return
        }
        navigate("/Otp")
        setInput("")
    }
    

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center  from-[#e9f5f6] via-white to-[#dff3f4] px-4">
      {/* Login Card */}
      <div className="w-full max-w-md rounded-3xl border border-[#0a9396]/30 bg-white p-8 shadow-2xl">
        <div className="mb-8 flex items-center justify-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-[#005f73]">
            CareTech
          </h1>

          <BiPlusMedical className="text-2xl text-[#0a9396]" />
        </div>

        <div className="mb-7 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome Back</h2>

          <p className="mt-2 text-sm text-gray-500">
            Enter your Aadhaar number to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={formSubmit}  className="flex flex-col gap-5">
          {/* Aadhaar Input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="aadhar"
              className="text-sm font-semibold text-gray-700"
            >
              Aadhaar Number
            </label>

            <input
              name="aadhar"
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              type="text"
              maxLength="12"
              placeholder="Enter your Aadhaar number"
              className="h-12 w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#0a9396] focus:bg-white focus:ring-4 focus:ring-[#0a9396]/10"
            />

            <p className="text-xs text-gray-400">
              Enter your 12-digit Aadhaar number
            </p>
            <p className="text-xs text-red-700">
              {msg}
            </p>
          </div>

          {/* Generate OTP Button */}
          <button
            type="submit"
            className="mt-2 h-12 w-full rounded-xl bg-[#0a9396] font-semibold text-white shadow-lg shadow-[#0a9396]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#087f82] hover:shadow-xl active:translate-y-0"
          >
            Generate OTP
          </button>
        </form>

        {/* Footer */}
        <p className="mt-7 text-center text-xs text-gray-400">
          Your information is securely protected
        </p>
      </div>
    </div>
  );
};

export default Login;
