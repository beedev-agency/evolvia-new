import { useField } from "formik";
import { InputHTMLAttributes, TextareaHTMLAttributes, useState } from "react";

import clsx from "clsx";

type InputProps = {
  className?: string;
  inputClass?: string;
  label?: string;
  textarea?: boolean;
  alert?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export const InputField = ({
  label,
  name,
  textarea,
  alert,
  className,
  inputClass,
  type,
  ...rest
}: InputProps) => {
  const [field, meta] = useField({ name: name as string });
  const isInvalid = Boolean(meta.touched && meta.error);

  const containerClasses = clsx("flex flex-col relative", {
    [className as string]: className,
  });

  const inputClasses = clsx(
    "py-2.5 px-3 rounded-md outline-none w-full h-full text-primary bg-white",
    {
      [inputClass as string]: inputClass,
      "cursor-not-allowed text-gray": rest.disabled,
      "border border-0.5 border-[#d9534f]": isInvalid,
      "border-none": !isInvalid,
    }
  );

  return (
    <div className={containerClasses} aria-invalid={isInvalid}>
      {label && (
        <label className="font-semibold text-base mb-2" htmlFor={field.name}>
          {label}
        </label>
      )}
      <div className="relative h-full">
        <input
          {...field}
          {...rest}
          className={inputClasses}
          value={field.value || ""}
          type={type}
        />
      </div>
      {isInvalid && (
        <p className="error text-xs text-red-500 mt-1">{meta.error}</p>
      )}
      {alert && <p className="text-xs text-dark mt-2 ml-2">{alert}</p>}
    </div>
  );
};
