"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import classNames from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import { type User } from "@supabase/supabase-js";

import { MobileHeader } from "./MobileHeader";
import { NavigationItem } from "./NavigationItem";
import { MenuDropdown } from "./MenuDropdown";

const menuLinks = [
  {
    name: "Početna",
    link: "/",
  },
  {
    name: "O name",
    link: "/about-me",
  },
  {
    name: "Kursevi",
    link: "/courses",
  },
  {
    name: "Usluge",
    link: "/services",
  },
  {
    name: "Kontaktiraj nas",
    link: "/contact-me",
  },
];

interface Props {
  user: User | null;
}

export const Header = ({ user }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeaderBg, setShowHeaderBg] = useState(true);

  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      // Do nothing if window is not defined (e.g., server-side rendering)
      return;
    }

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos && currentScrollPos !== 0) {
        // Scrolling down
        setShowHeaderBg(false);
      } else {
        // Scrolling up
        setShowHeaderBg(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenuOpen = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <header
      className={classNames("fixed top-0 left-0 py-6 md:py-12 z-50 w-full", {
        "opacity-100 transition-opacity duration-500 ease-in": showHeaderBg,
        "opacity-0 transition-opacity duration-500 ease-in": !showHeaderBg,
      })}
    >
      <div className="flex  justify-between items-center w-[calc(100vw-44px)] md:w-[calc(100vw-64px)] lg:w-[calc(100vw-144px)] mx-auto">
        <Link href="/" aria-label="BeeDeev logo">
          <Image
            width={100}
            height={100}
            src="/logo.png"
            alt="evolvia headerlogo "
            className="object-cover"
          />
        </Link>
        <motion.ul className="gap-5 hidden md:flex">
          {menuLinks.map((item, idx) => (
            <NavigationItem key={idx} {...item} />
          ))}
          {user ? (
            <MenuDropdown />
          ) : (
            <motion.li className="!text-white text-md bg-secondary px-3 rounded-full py-3 md:py-1 ">
              <Link href={"/auth/login"}>Login</Link>
            </motion.li>
          )}
        </motion.ul>
        <div className="flex items-center gap-10 md:hidden">
          <button
            aria-label="hamburger button"
            id="hamburger button"
            onClick={toggleMenuOpen}
            className="z-50"
            type="button"
          >
            <motion.svg
              animate={isMenuOpen ? "open" : "closed"}
              className={"fill-current stroke-current"}
              height="1rem"
              viewBox="0 0 24 24"
              width="1.5rem"
            >
              <Line
                y1="10"
                x2="30"
                y2="20"
                variants={{
                  closed: { y1: 10, y2: 10 },
                  open: { y1: 0, y2: 20 },
                }}
              />
              <Line
                y1="20"
                x2="30"
                y2="20"
                variants={{
                  closed: { y1: 20, y2: 20 },
                  open: { y1: 20, y2: 0 },
                }}
              />
            </motion.svg>
          </button>
        </div>
      </div>
      <MobileHeader
        isMenuOpen={isMenuOpen}
        navLinks={menuLinks}
        closeHeader={toggleMenuOpen}
      />
    </header>
  );
};

const Line = (props: any) => (
  <motion.line
    fill="transparent"
    stroke="#fff"
    strokeLinecap="round"
    strokeWidth="2.5"
    {...props}
  />
);
