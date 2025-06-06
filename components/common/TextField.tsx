import { useField } from "formik";
import clsx from "clsx";


type InputProps = {
  name: string
  className?: string;
  inputClass?: string;
  label?: string;
  textarea?: boolean;
  alert?: string;
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextAreaField = ({
  label,
  name,
  textarea,
  alert,
  className,
  inputClass,
  ...rest
}: InputProps) => {
  const [field, meta] = useField({ name: name as string });
  const isInvalid = Boolean(meta.touched && meta.error);

  const containerClasses = clsx("flex flex-col gap-y-2", {
    [className as string]: className,
  });

  const inputClasses = clsx(
    "py-2.5 px-3 text-dark bg-light-gray rounded-md outline-dark",
    {
      [inputClass as string]: inputClass,
    }
  );

  return (
    <div className={containerClasses} aria-invalid={isInvalid}>
      {label && (
        <label className="text-blue-gray text-xs" htmlFor={field.name}>
          {label}
        </label>
      )}
      <textarea rows={5} {...field} {...rest} className={inputClasses} />
      {isInvalid && <p className="error">{meta.error}</p>}
      {alert && <p className="text-xs text-dark">{alert}</p>}
    </div>
  );
};
