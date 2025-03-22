"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Conatiner from "./conatiner";

function Navbar() {
  const pathname = usePathname();

  const navlink = [
    {
      href: "/",
      title: "خانه",
    },
    {
      href: "/store",
      title: "فروشگاه",
    },
  ];
  return (
    <Conatiner>
      <nav className="shadow p-4">
        <div className="flex justify-between flex-row-reverse">
          <div>
            {navlink.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mr-4 ${
                  pathname === item.href ? "text-sky-500" : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <Link href={"/cart"}>سبد خرید</Link>
          </div>
        </div>
      </nav>
    </Conatiner>
  );
}

export default Navbar;
