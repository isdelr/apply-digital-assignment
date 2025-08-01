import { FunctionComponent, SelectHTMLAttributes } from "react";
import Icon from "@/components/ui/icon";
import ChevronIcon from "@/assets/icons/chevron.svg";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

const Select: FunctionComponent<SelectProps> = ({ children, ...props }) => {
  return (
    <div className="relative w-full">
      <select
        {...props}
        className={`${props.className} appearance-none w-full pr-10`}
      >
        {children}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <Icon icon={ChevronIcon} className="size-3" />
      </div>
    </div>
  );
};

export default Select;