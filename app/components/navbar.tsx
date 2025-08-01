import React, { FunctionComponent } from "react";

interface NavbarItem {
  text?: String;
  url: String;
  icon: React.ReactElement;
}

interface NavbarProps {
  brandText: String;
  items: NavbarItem[];
}

const Navbar: FunctionComponent<NavbarProps> = (props) => {
  return (
    <nav className="bg-slate-100">
      <h1>{props.brandText}</h1>
      <div></div>
    </nav>
  );
};

export default Navbar;
