"use client";
import { createContext, useContext, useEffect, useState } from "react";

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
  handleRemoveProduct: (id: number) => void;
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
      const isLastOne = currentitem.find((item) => item.id == id)?.qty == 1;

      if (isLastOne) {
        return currentitem.filter((item) => item.id != id);
      } else {
        return currentitem.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleRemoveProduct = (id: number) => {
    setcartItems((currentItem) => {
      return currentItem.filter((item) => item.id != id);
    });
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setcartItems(JSON.parse(storedCartItems));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <shoppinCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductqty,
        getProductqty,
        totalQty,
        handlDecreaseProductqty,
        handleRemoveProduct,
      }}
    >
      {children}
    </shoppinCartContext.Provider>
  );
}
