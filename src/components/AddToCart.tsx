"use client";
import { useShoppingCartContextProvider } from "@/context/shoppingCart";
import React from "react";

interface IAddToCartProps {
  id: string;
}

function AddToCart({ id }: IAddToCartProps) {
  const { handleProductqty } = useShoppingCartContextProvider();
  return (
    <div className="mt-4">
      <button
        className="bg-sky-500 text-white px-4 py-2 rounded"
        onClick={() => handleProductqty(parseInt(id))}
      >
        +
      </button>
      <span className="mx-2">3</span>
      <button className="bg-sky-500 text-white px-4 py-2 rounded">-</button>
    </div>
  );
}

export default AddToCart;
