import { cx } from "class-variance-authority";
import type { HTMLAttributes } from "react";

interface InputProps
  extends Pick<HTMLAttributes<HTMLLabelElement>, "className"> {
  label: string;
  hiddenLabel?: boolean;
  value: string;
  setValue: (value: string) => void;
}

const Input = ({
  className,
  label,
  hiddenLabel = false,
  value,
  setValue,
}: InputProps) => {
  return (
    <label className={cx(className, "flex")}>
      {!hiddenLabel && label}
      <input
        className={cx(
          "flex-grow rounded-30 border-2 border-dark bg-accent-lighter px-4 py-2 text-2xl font-semibold placeholder-inactive-common shadow-outer-4",
          "focus:border-primary-common focus:ring-primary-common",
        )}
        placeholder="Search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </label>
  );
};

export default Input;
