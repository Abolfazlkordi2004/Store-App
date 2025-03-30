"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Conatiner from "./conatiner";
import { useShoppingCartContextProvider } from "@/context/shoppingCart";

function Navbar() {
  const pathname = usePathname();
  const { totalQty } = useShoppingCartContextProvider();
  const navlink = [
    {
      href: "/",
      title: "خانه",
    },
    {
      href: "/store",
      title: "فروشگاه",
    },
    {
      href: "/dashboard",
      title: "دشبورد",
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
            <span className="px-4 py-2 bg-red-500 text-white rounded-full">
              {totalQty}
            </span>
            <Link href={"/cart"}>سبد خرید</Link>
          </div>
        </div>
      </nav>
    </Conatiner>
  );
}

export default Navbar;
