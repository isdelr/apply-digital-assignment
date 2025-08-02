import Link from "next/link";
import React, { FunctionComponent } from "react";
import Icon from "@/components/ui/icon";
import { UrlObject } from "url";

interface NavbarItem {
  text?: string;
  url: string | UrlObject;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface NavbarProps {
  brandText: string;
  homeRoute: string;
  items: NavbarItem[];
}

const Navbar: FunctionComponent<NavbarProps> = (props) => {
  return (
    <nav className="bg-surface-secondary px-6 py-5 lg:px-28  flex justify-between items-center">
      <Link href={props.homeRoute} aria-label={props.brandText}>
        <h1 className="text-2xl font-bold text-bg-primary hover:text-text-primary">
          {props.brandText}
        </h1>
      </Link>
      <div className="flex gap-2 items-center">
        {props.items.length > 0
          ? props.items.map((item) => (
              <Link
                key={item.url.toString()}
                href={item.url}
                aria-label={item.text}
              >
                <Icon icon={item.icon} className="size-5" />
              </Link>
            ))
          : null}
      </div>
    </nav>
  );
};

export default Navbar;
