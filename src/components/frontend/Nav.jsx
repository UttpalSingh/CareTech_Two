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
      </div>
    </nav>
  );
};
