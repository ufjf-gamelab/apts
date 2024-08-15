import { cva, cx } from "class-variance-authority";
import { Input, Label, TextField } from "react-aria-components";

interface FieldProps {
  label: string;
  hiddenLabel?: boolean;
  fontFamily?: "common" | "heading";
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Field = ({
  label,
  hiddenLabel = false,
  fontFamily,
  setValue,
}: FieldProps) => {
  return (
    <TextField className="flex">
      <Label className={cx(hiddenLabel ? "hidden" : "flex")}>{label}</Label>
      <Input
        onChange={() => setValue}
        placeholder="Search"
        className={inputStyle({ fontFamily })}
      />
    </TextField>
  );
};

const inputStyle = cva(
  cx(
    "flex w-0 flex-grow rounded-30 border-2 border-dark bg-accent-lighter px-4 py-2 text-2xl font-semibold placeholder-inactive-common shadow-outer-4",
    "focus:border-primary-common focus:ring-primary-common",
  ),
  {
    variants: {
      fontFamily: {
        common: "font-common",
        heading: "font-heading",
      },
      size: {
        small: cx("text-lg", "md:text-xl", "lg:text-xl"),
        medium: cx("text-xl", "md:text-2xl", "lg:text-2xl"),
        large: cx("text-2xl", "md:text-3xl", "lg:text-3xl"),
      },
    },
    defaultVariants: {
      fontFamily: "common",
      size: "small",
    },
  },
);

export default Field;
