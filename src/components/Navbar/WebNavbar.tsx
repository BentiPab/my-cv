"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { NAME, PAGES } from "./constants";

const WebNavbar = () => {
  const path = usePathname();

  return (
    <nav className="lg:flex flex-row gap-4 justify-between py-7 px-20 items-center hidden ">
      <h6 className="capitalize text-black font-mono font-bold text-lg">
        {NAME}
      </h6>
      <div className="flex flex-row gap-4 ">
        {PAGES.map((v) => (
          <Link
            href={v.path}
            className={`${
              path === v.path ? "font-bold" : ""
            } uppercase text-black`}
            key={v.label}
          >
            {v.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default WebNavbar;
