"use client";
import CartItem from "@/components/cartItem";
import Conatiner from "@/components/conatiner";
import { IProductItemProps } from "@/components/productItem";
import { useShoppingCartContextProvider } from "@/context/shoppingCart";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface IDiscountPrice {
  id: number;
  code: string;
  percentage: number;
}

function Cart() {
  const { cartItems } = useShoppingCartContextProvider();
  const [discount, setDiscount] = useState("");
  const [data, setData] = useState<IProductItemProps[]>([]);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const totalPrice = cartItems.reduce((total, item) => {
    const selectedProduct = data.find(
      (products) => products.id == item.id.toString()
    );
    return total + (selectedProduct?.price || 0) * item.qty;
  }, 0);

  const handleSubmitDiscount = () => {
    axios(`http://localhost:3001/discount/code=${discount}`).then((result) => {
      const data = result.data as IDiscountPrice[];
      const discountPrice = (totalPrice * data[0].percentage) / 100;
      const finalPrice = totalPrice - discountPrice;
      setDiscountPrice(discountPrice);
      setFinalPrice(finalPrice);
    });
  };

  useEffect(() => {
    axios(`http://localhost:3001/products`).then((result) => {
      const { data } = result;
      setData(data);
    });
  });
  return (
    <Conatiner>
      <h1 className="text-right my-4 text-2xl">سبد خرید </h1>

      <div className="">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div className="border shadow-md text-right p-4">
        <h3>
          
          <span>
            {cartItems.reduce((total, item) => {
              const selectedProduct = data.find(
                (products) => products.id == item.id.toString()
              );
              return total + (selectedProduct?.price || 0) * item.qty;
            }, 0)}
            $
          </span>
        </h3>
        <h3>
          سود شما از این خرید: <span>${discountPrice}</span>
        </h3>
        <h3>
          قیمت نهایی: <span>${finalPrice}</span>
        </h3>

        <div>
          <button
            className="rounded bg-sky-600 text-white px-4 py-1"
            onClick={handleSubmitDiscount}
          >
            اعمال
          </button>
          <input
            type="text"
            placeholder="کد تخفیف را وارد کنید "
            className="border rtl text-right border-black"
            onChange={(e) => {
              setDiscount(e.target.value);
            }}
          />
        </div>
      </div>
    </Conatiner>
  );
}

export default Cart;
