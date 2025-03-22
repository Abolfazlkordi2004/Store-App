"use client";
import { useShoppingCartContextProvider } from "@/context/shoppingCart";
import React from "react";

function AddToCart() {
  const {} = useShoppingCartContextProvider();
  return (
    <div className="mt-4">
      <button className="bg-sky-500 text-white px-4 py-2 rounded">+</button>
      <span className="mx-2">3</span>
      <button className="bg-sky-500 text-white px-4 py-2 rounded">-</button>
    </div>
  );
}

export default AddToCart;
