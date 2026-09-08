import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BiPlusMedical } from "react-icons/bi";
import { RiLoginCircleFill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FiUser, FiMail, FiHelpCircle, FiLogOut } from "react-icons/fi";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function manageLogin() {
    navigate("/login");
  }

  return (
    <nav className="sticky top-0 z-50 h-16 bg-[#0a9396] text-white shadow-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <div>
          <a className="flex items-center gap-1 text-2xl font-bold tracking-tight">
            <span className="code-font">CareTech</span>

            <BiPlusMedical className="text-xl" />
          </a>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#process"
            className="text-sm font-medium transition hover:text-gray-200"
          >
            Our Process
          </a>

          <a
            href="#wellness"
            className="text-sm font-medium transition hover:text-gray-200"
          >
            Wellness Reads
          </a>

          {/* Login */}
          <button
            onClick={manageLogin}
            className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#0a9396] transition hover:bg-gray-100"
          >
            Login
            <RiLoginCircleFill className="text-lg" />
          </button>

          {/* Menu */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 transition hover:bg-white/10"
              aria-label="Open menu"
            >
              {menuOpen ? (
                <IoClose className="text-2xl" />
              ) : (
                <IoMdMenu className="text-2xl" />
              )}
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-14 w-56 overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 text-gray-700 shadow-xl">
                <a
                  href="#about"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-gray-100"
                >
                  <FiUser />
                  About
                </a>

                <a
                  href="#contact"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-gray-100"
                >
                  <FiMail />
                  Contact
                </a>

                <a
                  href="#help"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-gray-100"
                >
                  <FiHelpCircle />
                  Help
                </a>

                <div className="my-1 border-t border-gray-100" />

                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50">
                  <FiLogOut />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/30"
          >
            {menuOpen ? (
              <IoClose className="text-2xl" />
            ) : (
              <IoMdMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-16 border-t border-white/20 bg-[#087f82] px-5 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-1">
            <a
              href="#process"
              className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-white/10"
            >
              Our Process
            </a>

            <a
              href="#wellness"
              className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-white/10"
            >
              Wellness Reads
            </a>

            <a
              href="#about"
              className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-white/10"
            >
              About
            </a>

            <a
              href="#contact"
              className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-white/10"
            >
              Contact
            </a>

            <a
              href="#help"
              className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-white/10"
            >
              Help
            </a>

            <button className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#0a9396]">
              Login
              <RiLoginCircleFill />
            </button>

            <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-200 hover:bg-white/10">
              <FiLogOut />
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
