import { useState } from "react";
import classNames from "clsx";
import Link from "next/link";

import { useOutsideClick } from "@/hooks/useClickOutside";
export const MenuDropdown = ({
  isLanding = false,
}: {
  isLanding?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { ref } = useOutsideClick(() => setIsOpen(false));

  const arrowClasses = classNames({
    "rotate-180 transition-all": isOpen,
    "rotate-0 transition-all": !isOpen,
  });

  const badgeClasses = classNames(
    "w-10 h-10 flex justify-center items-center rounded-full",
    {
      "bg-gray-200": !isLanding,
      "bg-white text-dark font-bold": isLanding,
    }
  );

  const dropdownClasses = classNames(
    "absolute -bottom-4 right-0 translate-y-full",
    "bg-white p-5 rounded-xl shadow-md",
    "min-w-[200px] w-full"
  );

  const handleSignOut = async () =>
    await fetch("/auth/signout", { method: "POST" });

  return (
    <div
      className="flex items-center gap-x-2 relative z-20 cursor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
      ref={ref}
    >
      <div className={badgeClasses}>MO</div>
      <svg
        className={arrowClasses}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="19"
        fill="none"
        viewBox="0 0 18 19"
      >
        <path
          stroke={isLanding ? "#fff" : "#161616"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.125"
          d="M14.625 7.25L9 12.875 3.375 7.25"
        ></path>
      </svg>

      {isOpen && (
        <div className={dropdownClasses}>
          <ul className="flex flex-col gap-y-3 list-none">
            <li className="text-gray whitespace-nowrap hover:text-primary">
              <Link href="/account">Settings</Link>
            </li>
            <li
              onClick={handleSignOut}
              className="text-gray whitespace-nowrap cursor-pointer hover:text-primary"
            >
              Sign Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
