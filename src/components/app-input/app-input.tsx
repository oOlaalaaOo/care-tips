import React from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  className?: string;
}

const AppInput = ({
  label,
  id,
  className = "",
  ...rest
}: IProps): JSX.Element => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <div>
        <input
          id={id}
          className={`mt-2 px-3.5 py-2.5 border border-inputBorder rounded-md text-inputText hover:border-inputBorderHover focus:outline-none focus:border-primary disabled:bg-disabled disabled:border-disabled ${className}`}
          {...rest}
        />
      </div>
    </>
  );
};

export default AppInput;
