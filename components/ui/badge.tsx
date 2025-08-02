import { BaseHTMLAttributes, FunctionComponent } from "react";

type BadgeProps = BaseHTMLAttributes<HTMLSpanElement>;

const Badge: FunctionComponent<BadgeProps> = (props) => {
  return (
    <span className="flex items-center justify-center bg-stone-100 py-2 px-3 text-text-primary rounded-lg">
      {props.children}
    </span>
  );
};

export default Badge;
