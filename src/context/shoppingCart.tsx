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
  handleIncreaseProductqty: (id: number) => void;
  handlDecreaseProductqty: (id: number) => void;
  getProductqty: (id: number) => number;
  totalQty: number;
};

const shoppinCartContext = createContext({} as TshoppinCartContext);
export const useShoppingCartContextProvider = () => {
  return useContext(shoppinCartContext);
};

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [cartItems, setcartItems] = useState<CartItems[]>([]);

  const getProductqty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const totalQty = cartItems.reduce((totalitem, item) => {
    return totalitem + item.qty;
  }, 0);

  const handleIncreaseProductqty = (id: number) => {
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

  const handlDecreaseProductqty = (id: number) => {
    setcartItems((currentitem) => {
      const isProductNotExist =
        currentitem.find((item) => item.id == id) == null;

      if (isProductNotExist) {
        return [...currentitem, { id: id, qty: 0 }];
      } else {
        return currentitem.map((item) => {
          if (item.id == id) {
            if (item.qty > 0) {
              return {
                ...item,
                qty: item.qty - 1,
              };
            } else {
              return {
                ...item,
                qty: 0,
              };
            }
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <shoppinCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductqty,
        getProductqty,
        totalQty,
        handlDecreaseProductqty,
      }}
    >
      {children}
    </shoppinCartContext.Provider>
  );
}
