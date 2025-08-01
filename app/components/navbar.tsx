import { FunctionComponent } from "react";

interface NavbarProps {
  items: {
    text: String;
    url: String;
  };
}

const Navbar: FunctionComponent<NavbarProps> = (props) => {
  return <nav className="bg-red-50">test</nav>;
};

export default Navbar;
