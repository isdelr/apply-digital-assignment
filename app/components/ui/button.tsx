import { ButtonHTMLAttributes, FunctionComponent } from "react";

const DEFAULT_STYLING = "py-5 px-24 font-bold rounded-lg";

const variants = {
  primary: `${DEFAULT_STYLING} border border-stroke-primary bg-transparent text-text-primary hover:bg-stroke-primary hover:text-white`,
  secondary: `${DEFAULT_STYLING} bg-bg-primary hover:bg-bg-neutral text-white`,
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => {
  const variant = props.variant || "primary";

  return (
    <button  {...props} className={`${variants[variant]} ${props.className}`}>
      {children}
    </button>
  );
};

export default Button;
