import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [msg,setMsg] = useState()
  const inputRefs = useRef([]);
  const navigate = useNavigate()

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if(!enteredOtp){
        setMsg("Please enter OTP.")
        return
    }
    if (enteredOtp.length !== 6) {
        setMsg("OTP should be 6 digit.")
      return;
    }
    // console.log("OTP:", enteredOtp);
    navigate("/language")
    setOtp("")
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center  from-[#e9f5f6] via-white to-[#dff3f4] px-4">
      {/* OTP Card */}
      <div className="w-full max-w-md rounded-3xl border border-[#0a9396]/30 bg-white p-8 shadow-2xl">
        {/* Heading */}
        <div className="m-5 flex justify-center">
          <h1 className="text-3xl font-bold text-[#0a9396]">Enter OTP</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-6"
        >
          {/* OTP Section */}
          <div className="flex w-full flex-col items-center gap-4">
            <p className="text-center text-sm text-gray-500">
              Enter the 6-digit OTP sent to your registered mobile number
            </p>

            {/* Six OTP Boxes */}
            <div className="flex justify-center gap-2 sm:gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="h-14 w-11 rounded-xl border-2 border-gray-200 bg-gray-50 text-center text-xl font-bold text-[#0a9396] outline-none transition-all duration-200 focus:border-[#0a9396] focus:bg-white focus:ring-4 focus:ring-[#0a9396]/10 sm:h-16 sm:w-13"
                  aria-label={`OTP digit ${index + 1}`}
                />
              ))}
            </div>

            {/* Resend OTP */}
            <p className="text-sm text-gray-500">
              Didn't receive the OTP?{" "}
              <button
                type="button"
                className="font-semibold text-[#0a9396] transition hover:text-[#005f73]"
              >
                Resend OTP
              </button>
            </p>
            {/*  OTP msg */}
            <p className="text-sm text-red-700">
              {msg}
            </p>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="h-14 w-40 rounded-xl bg-[#0a9396] font-semibold text-white shadow-lg shadow-[#0a9396]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#087f82] hover:shadow-xl active:translate-y-0"
          >
            Login
          </button>
        </form>

        {/* Security Message */}
        <p className="mt-6 text-center text-xs text-gray-400">
          🔒 Your verification is secure and encrypted
        </p>
      </div>
    </div>
  );
};

export default Otp;
