import Link from "next/link";
import React from "react";

interface NavbarItemProps {
  label: string;
  url: string;
  active?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, url, active = false }) => {
  return (
    <Link
      href={`/${url}`}
      className="cursor-pointer text-white text-lg hover:scale-105 group transition-all duration-300:"
    >
      {label}
      {active ? (
        <span className="block max-w-full h-0.5 bg-white"></span>
      ) : (
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
      )}
      
    </Link>
  );
};

export default NavbarItem;
