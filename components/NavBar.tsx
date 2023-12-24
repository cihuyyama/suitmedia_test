"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [showBackground, setShowBackground] = useState(true);
  const [ontop, setOntop] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos <= 2) {
        setOntop(true);
      } else if (currentScrollPos > prevScrollPos) {
        setShowBackground(false);
        setOntop(false);
      } else {
        setShowBackground(true);
        setOntop(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header className={`flex flex-col`}>
      <div
        className={`flex flex-row justify-between w-full py-5 md:px-20
        ${
          ontop ? 'opacity-100' : (showBackground ? 'opacity-30' : 'opacity-0')
        } 
        bg-[#ff6600] fixed z-50 items-center transition-all`}
      >
        <Image
          className="cursor-pointer"
          src={"https://suitmedia.com/_nuxt/img/logo-white.081d3ce.png"}
          width={110}
          height={50}
          alt="suitmedia_logo"
        />
        <nav className="flex flex-row gap-8">
          <NavbarItem label="Work" url="work" active={pathname === "/work"} />
          <NavbarItem label="About" url="about" active={pathname === "/about"} />
          <NavbarItem label="Service" url="service" active={pathname === "/service"} />
          <NavbarItem label="Ideas" url="ideas" active={pathname === "/ideas" } />
          <NavbarItem label="Career" url="career" active={pathname === "/career"} />
          <NavbarItem label="Contact" url="contact" active={pathname === "/contact"} />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
