import React from "react";

const Main = () => {
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
              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_25px_70px_rgba(7,59,76,0.12)]">
                {/* Replace this div with your video */}
                <div className="flex aspect-[4/3] items-center justify-center bg-[#dff5f4]">
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="./public/videos/CareTech.mp4"
                  ></video>
                </div>
              </div>
            </div>
          </div>

          {/* ================= TEXT CONTENT ================= */}
          <div className="w-full md:w-1/2 md:pl-8">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0a9396]/10 bg-[#0a9396]/10 px-4 py-2 text-sm font-medium text-[#087f82]">
              <span className="h-2 w-2 rounded-full bg-[#0a9396]" />
              Your Health, Simplified
            </span>

            <h1 className="font-['Valley_Sans'] text-5xl font-semibold leading-[1.05] tracking-tight text-[#073b4c] sm:text-6xl md:text-7xl">
              Understand
              <br />
              <span className="text-[#0a9396]">your health.</span>
              <br />
              Own your future.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
              Turn complex medical reports into clear, easy-to-understand
              insights. Make informed decisions and take a more proactive
              approach to your health.
            </p>

            <div className="mt-9 flex items-center gap-5">
              <button
                className="group relative overflow-hidden rounded-full
    bg-[#073b4c] px-7 py-3.5 text-sm font-semibold text-white
    transition-all duration-300 hover:bg-[#0a9396]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Upload Your Report
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>

              <button
                className="group flex items-center gap-2 text-sm font-semibold
    text-[#073b4c]"
              >
                See how it works
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-[#0a9396]">✓</span>
                Easy to understand
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[#0a9396]">✓</span>
                Secure reports
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[#0a9396]">✓</span>
                Health insights
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2  */}

      <section id="process" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#0a9396]">
              Simple Process
            </span>

            <h2 className="mt-3 font-['Valley_Sans'] text-4xl font-semibold text-[#073b4c] md:text-5xl">
              Have a health concern? Just ask.
            </h2>

            <p className="mt-4 text-gray-600">
              Chat with CareTech AI and get easy-to-understand guidance for
              common health and wellness questions.
            </p>
          </div>

          <div className="h-[80vh] w-full bg-[#f4fbfb] px-4 py-6 md:px-10">
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-[#0a9396]/10 bg-white p-4 shadow-[0_20px_60px_rgba(7,59,76,0.08)] md:p-8">
              <img
                className="h-full w-full object-contain"
                src="/images/caretech1.png"
                alt="CareTech AI health assistant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="bg-white px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <h2 className="mt-3 font-['Valley_Sans'] text-4xl font-semibold text-[#073b4c] md:text-5xl">
              From report to insight.
            </h2>

            <p className="mt-4 text-gray-600">
              Understand your medical reports through a simple, guided process.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* 01 — Chat with AI */}
            <div className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] bg-[#dff5f4]">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="./public/videos/options.mp4"
                >
                  <source src="/videos/chat-ai.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-7 pt-24">
                  <h3 className="mt-2 font-['Valley_Sans'] text-3xl font-semibold text-white">
                    Choose Your Options
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
                    Get simple guidance for your everyday health concerns.
                  </p>
                </div>
              </div>
            </div>

            {/* 02 — Understand Report */}
            <div className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] bg-[#dff5f4]">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="./public/videos/upload.mp4"
                ></video>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-7 pt-24">
                  <h3 className="mt-2 font-['Valley_Sans'] text-3xl font-semibold text-white">
                    Upload Your Report
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
                    Upload your report. Understand the information. Take control
                    of your health.
                  </p>
                </div>
              </div>
            </div>

            {/* 03 — Consult Doctor */}
            <div className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] bg-[#dff5f4]">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="./public/videos/analyze.mp4"
                >
                  <source src="/videos/consult-doctor.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-7 pt-24">
                  <h3 className="mt-2 font-['Valley_Sans'] text-3xl font-semibold text-white">
                    Analyze Your Report
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
                    Analyze your report and connect with a healthcare
                    professional for expert guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* 04 — Know Your Health */}
            <div className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] bg-[#dff5f4]">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="./public/videos/understand.mp4"
                >
                  <source src="/videos/know-health.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-7 pt-24">
                  <h3 className="mt-2 font-['Valley_Sans'] text-3xl font-semibold text-white">
                    Know About Your Health
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
                    Stay informed and take a proactive approach to your
                    wellbeing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4  */}

      <section id="wellness" className="bg-[#f4fbfb] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#0a9396]">
                Knowledge
              </span>

              <h2 className="mt-3 font-['Valley_Sans'] text-4xl font-semibold text-[#073b4c] md:text-5xl">
                Wellness Reads
              </h2>

              <p className="mt-4 max-w-xl text-gray-600">
                Simple health information to help you make better, informed
                decisions.
              </p>
            </div>

            <button className="hidden rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-[#0a9396] hover:text-[#0a9396] md:block">
              View All
            </button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="h-56 overflow-hidden">
                <img
                  src="./public/images/health-report.png"
                  alt="Understanding health reports"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0a9396]">
                  Health
                </span>

                <h3 className="mt-3 font-['Valley_Sans'] text-2xl font-semibold text-[#073b4c]">
                  Understanding Your Health Reports
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Learn how to understand common health measurements and what
                  they mean.
                </p>

                <button className="mt-5 text-sm font-semibold text-[#0a9396]">
                  Read Article →
                </button>
              </div>
            </article>

            {/* Card 2 */}
            <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="h-56 overflow-hidden">
                <img
                  src="./public/images/healthy-habits.png"
                  alt="Healthy lifestyle habits"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0a9396]">
                  Wellness
                </span>

                <h3 className="mt-3 font-['Valley_Sans'] text-2xl font-semibold text-[#073b4c]">
                  Small Habits, Better Health
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Discover simple everyday habits that can support a healthier
                  lifestyle.
                </p>

                <button className="mt-5 text-sm font-semibold text-[#0a9396]">
                  Read Article →
                </button>
              </div>
            </article>

            {/* Card 3 */}
            <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="h-56 overflow-hidden">
                <img
                  src="./public/images/health-checkup.png"
                  alt="Regular health checkup"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0a9396]">
                  Prevention
                </span>

                <h3 className="mt-3 font-['Valley_Sans'] text-2xl font-semibold text-[#073b4c]">
                  Why Regular Health Checks Matter
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Understand why keeping track of your health can help you stay
                  proactive.
                </p>

                <button className="mt-5 text-sm font-semibold text-[#0a9396]">
                  Read Article →
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA */}
      <section id="contact" className="bg-[#073b4c] px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-['Valley_Sans'] text-4xl font-semibold md:text-6xl">
            Take control of your health.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Start understanding your medical reports today and make more
            informed decisions about your health.
          </p>

          <button className="mt-8 rounded-xl bg-[#0a9396] px-7 py-3.5 font-semibold transition hover:bg-[#0d7f82]">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;
