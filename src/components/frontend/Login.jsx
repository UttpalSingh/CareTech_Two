import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className=" h-[75vh] w-[60vh]  border-8 rounded-2xl p-4 shadow-2xl border-[#0a9396]">
        <div className="code-font flex items-center justify-center"><h1 className="text-3xl text-[#0a9396] font-bold">CareTech</h1></div>
        <div className="flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <input className="h-10 w-90 p-5 border-2 border-[#0a9396] rounded-xl " type="email" placeholder="Enter your email." />
        </div>
      </div>
    </div>
  );
};

export default Login;
