"use client";
import { createContext, useContext, useState } from "react";

type ShoppingCartContextProviderProps = {
  children: React.ReactNode;
};

type CartItems = {
  id: number;
  qty: number;
};

type TshoppinCartContext = {
  cartItems: CartItems[];
  handleProductqty: (id: number) => void;
};

const shoppinCartContext = createContext({} as TshoppinCartContext);
export const useShoppingCartContextProvider = () => {
  return useContext(shoppinCartContext);
};

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [cartItems, setcartItems] = useState<CartItems[]>([]);

  const handleProductqty = (id: number) => {
    setcartItems((currentitem) => {
      const isProductNotExist =
        currentitem.find((item) => item.id == id) == null;

      if (isProductNotExist) {
        return [...currentitem, { id: id, qty: 1 }];
      } else {
        return currentitem.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <shoppinCartContext.Provider value={{ cartItems, handleProductqty }}>
      {children}
    </shoppinCartContext.Provider>
  );
}
