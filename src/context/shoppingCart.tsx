"use client";
import { createContext, useState } from "react";

type ShoppingCartContextProviderProps = {
  children: React.ReactNode;
};

type CartItems = {
  id: number;
  qcy: number;
};

const shoppinCartContext = createContext({});

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [cartItem] = useState<CartItems[]>([]);
  return (
    <shoppinCartContext.Provider value={{ cartItem }}>
      {children}
    </shoppinCartContext.Provider>
  );
}
