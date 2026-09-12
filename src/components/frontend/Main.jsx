import React  from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate()

  function handleLogin(){
    navigate("/login")
  }

  return (
    <main>
      {/* SECTION 1  */}
      <section
        id="hero"
        className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#f4fbfb]"
      >
        {/* Background decoration */}
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#0a9396]/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#94d2bd]/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-6 py-16 md:px-8">
          {/* VIDEO / ANIMATION */}
          <div className="hidden w-1/2 pr-10 md:block">
            <div className="relative">
              {/* Main video container */}
              <div className="relative overflow-hidden rounded-[3vh] border border-white bg-white shadow-[0_25px_70px_rgba(7,59,76,0.12)]">
                {/* Replace this div with your video */}
                <div className="flex aspect-4/3 asp items-center justify-center bg-[#dff5f4]">
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="/videos/CareTech.mp4"
                  ></video>
                </div>
              </div>
            </div>
          </div>

         {/* text content */}
          <div className="w-full md:w-1/2 md:pl-8">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0a9396]/10 bg-[#0a9396]/10 px-4 py-2 text-sm font-medium text-[#087f82]">
              <span className="h-2 w-2 rounded-full bg-[#0a9396]" />
              Your Health, Our Care
            </span>

            <h1 className="font-['Valley_Sans'] text-5xl font-semibold leading-[1.05] tracking-tight text-[#073b4c] sm:text-6xl md:text-7xl">
              Understand
              <br />
              <span className="text-[#0a9396]">your health.</span>
              <br />
              Own your future.
            </h1>

            <div className="mt-9 flex items-center gap-5">
              <button
                onClick={handleLogin}
                className="group relative overflow-hidden rounded-full
    bg-[#073b4c] px-7 py-3.5 text-sm font-semibold text-white
    transition-all duration-300 hover:bg-[#0a9396]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Started
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Main;
