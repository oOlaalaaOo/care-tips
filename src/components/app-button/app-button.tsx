import React from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  loading?: boolean;
  loadingText?: string;
  theme?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
}

const THEME_TYPE = {
  primary: "bg-primary text-white",
  secondary: "bg-white border-disabled text-primary",
};

const SIZE = {
  sm: "h-8 text-sm px-5",
  md: "h-10 text-base px-7",
  lg: "h-12 text-base px-9",
};

const AppButton = ({
  label,
  loading = false,
  loadingText = "Loading...",
  theme = "primary",
  size = "md",
  disabled = false,
  className,
  ...rest
}: IProps): JSX.Element => {
  return (
    <button
      className={`flex justify-center items-center border border-transparent rounded leading-4 mx-0.5 ${
        THEME_TYPE[theme]
      } ${SIZE[size]} ${
        disabled === true
          ? "bg-disabled text-disabledText cursor-not-allowed"
          : ""
      } ${className}`}
      disabled={disabled}
      {...rest}>
      {loading ? (
        <>
          <i className='fas fa-circle-notch fa-spin'></i> {loadingText}
        </>
      ) : (
        label
      )}
    </button>
  );
};

export default AppButton;
