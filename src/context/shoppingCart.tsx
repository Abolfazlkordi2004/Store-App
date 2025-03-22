"use client";
import { createContext, useContext, useState } from "react";

type ShoppingCartContextProviderProps = {
  children: React.ReactNode;
};

type CartItems = {
  id: number;
  qcy: number;
};

type TshoppinCartContext = {
  cartItems: CartItems[];
};

const shoppinCartContext = createContext({} as TshoppinCartContext);
export const useShoppingCartContextProvider = () => {
  return useContext(shoppinCartContext);
};

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [cartItems] = useState<CartItems[]>([]);
  return (
    <shoppinCartContext.Provider value={{ cartItems }}>
      {children}
    </shoppinCartContext.Provider>
  );
}
