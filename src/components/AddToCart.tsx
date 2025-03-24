"use client";
import { useShoppingCartContextProvider } from "@/context/shoppingCart";
import React from "react";

interface IAddToCartProps {
  id: string;
}

function AddToCart({ id }: IAddToCartProps) {
  const { handleIncreaseProductqty, getProductqty, handlDecreaseProductqty } =
    useShoppingCartContextProvider();
  return (
    <div className="mt-4">
      <button
        className="bg-sky-500 text-white px-4 py-2 rounded"
        onClick={() => handleIncreaseProductqty(parseInt(id))}
      >
        +
      </button>
      <span className="mx-2"> {getProductqty(parseInt(id))}</span>
      <button
        className="bg-sky-500 text-white px-4 py-2 rounded"
        onClick={() => handlDecreaseProductqty(parseInt(id))}
      >
        -
      </button>
    </div>
  );
}

export default AddToCart;
