import React, { FunctionComponent } from "react";
import Icon from "../ui/icon";
import Logo from "@/public/apply_digital_logo.svg";
import Link from "next/link";

const Footer: FunctionComponent = () => {
  return (
    <footer className="py-16 bg-bg-neutral flex justify-center mt-auto">
      <Link href="/">
        <Icon icon={Logo} className="w-40 h-auto" />
      </Link>
    </footer>
  );
};

export default Footer;
