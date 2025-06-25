"use client";

import Link from "next/link";
import classNames from "clsx";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { useAnimation } from "@/hooks/useAnimation";

export const NavigationItem = ({ link, name }: { link: string; name: string }) => {
  const pathname = usePathname();
  const { itemVariations } = useAnimation();

  const linkClasses = classNames(
    "text-primary text-md font-[600] flex items-center md:py-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-secondary hover:after:w-full after:transition-all after:duration-300 after:ease-in-out",
    {
      "after:w-full": pathname === link,
      "after:w-0": pathname !== link,
    }
  );

  return (
    <motion.li
      initial="offscreen"
      animate="onscreen"
      variants={itemVariations}
      className={linkClasses}
    >
      <Link href={link}>{name}</Link>
    </motion.li>
  );
};
