import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
// import { Loader2 } from "lucide-react";

export enum ButtonTypes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
  className?: string;
  loading?: boolean;
  icon?: any;
  onClick?(): void;
}

export const Button = ({
  variant,
  text,
  fullWidth,
  fullHeight,
  href,
  type = "button",
  className,
  loading = false,
  icon,
  disabled,
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const btnClasses = clsx(
    "px-[24px] py-3  font-medium text-base border-[1px] whitespace-nowrap leading-none duration-500 flex items-center justify-center", // Added flex for alignment
    variant === "secondary" && "bg-secondary border-none text-white rounded-[22px]",
    variant === "primary" && " bg-primary border-none"
  );

  const content = (
    <div className="flex items-center durat">
      {/* {loading && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
      )} */}
      <span className="flex items-center gap-x-1">
        {icon && icon}
        {text}
      </span>
    </div>
  );

  if (href && !loading) {
    return (
      <Link className={btnClasses} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <button
      {...rest}
      type={type}
      className={btnClasses}
      disabled={disabled || loading}
    >
      {content}
    </button>
  );
};
