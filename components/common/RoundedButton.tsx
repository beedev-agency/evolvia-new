"use client"

import { useRef, useState } from "react";
import classNames from "clsx";
import Link from "next/link";

import { MdOutlineArrowOutward } from "react-icons/md";

interface Props {
  link: string;
  btnText: string;
  url?: string | null;
  isSmall?: boolean;
}

export const RoundedButton = ({
  link,
  btnText,
  url = null,
  isSmall = false,
}: Props) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [isActive, setIsActive] = useState(false);
  const button = useRef<HTMLAnchorElement>(null);

  const handleOver = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const roundHalfSize = 2;

    if (!button.current) return;

    const position = button.current.getBoundingClientRect();

    setMousePosition({
      x: e.clientX - position.left - roundHalfSize,
      y: e.clientY - position.top - roundHalfSize,
    });
  };

  const x = classNames(
    "bg-primary rounded-full z-[1] w-[4px] h-[4px] absolute transition-all duration-1000 ease-in-out",
    {
      "scale-[150]": isActive,
      "w-[4px] h-[4px]": !isActive,
    }
  );

  const btnClasses = classNames(
    "z-20 flex items-center gap-2 transition-all duration-1000 ease-in-out text-primary",
    {
      "text-white font-bold": isActive,
    }
  );

  const brnWrapper = classNames(
    "flex items-center justify-center border-2 gap-1 rounded-full border-primary relative overflow-hidden text-white",
    {
      "h-[35vw] md:h-[15vw] w-[35vw] md:w-[15vw] ": !isSmall,
      "h-[150px] md:h-[170px] w-[100px] md:w-[170px] ": isSmall,
    }
  );

  const content = url ? (
    <a target="_blank" href={url} className="gap-16 ">
      <span className="h-[35vw] md:h-[15vw] text-white w-[35vw] md:w-[15vw] flex items-center justify-center border-2 gap-1 rounded-full border-gray">
        <MdOutlineArrowOutward /> {btnText}
      </span>
    </a>
  ) : (
    <Link
      href={link}
      className="gap-16 rounded-full inline-block"
      onMouseMove={(e) => {
        handleOver(e);
        setIsActive(true);
      }}
      onMouseLeave={(e) => {
        handleOver(e);
        setIsActive(false);
      }}
      ref={button}
    >
      <span className={brnWrapper}>
        <div className={btnClasses}>
          {btnText}
          <MdOutlineArrowOutward
            size={25}
            color={isActive ? "white" : "#300064"}
          />
        </div>
        <span
          className={x}
          style={{ top: mousePosition.y, left: mousePosition.x }}
        ></span>
      </span>
    </Link>
  );

  return content;
};
