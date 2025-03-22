import CartItem from "@/components/cartItem";
import Conatiner from "@/components/conatiner";
import React from "react";

function Cart() {
  return (
    <Conatiner>
      <h1 className="text-right my-4 text-2xl">سبد خرید </h1>

      <div className="">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="border shadow-md text-right p-4">
        <h3>
          قیمت کل: <span>$80</span>
        </h3>
        <h3>
          سود شما از این خرید: <span>$80</span>
        </h3>
        <h3>
          قیمت نهایی: <span>$80</span>
        </h3>

        <div>
          <button className="rounded bg-sky-600 text-white px-4 py-1">
            اعمال
          </button>
          <input
            type="text"
            placeholder="کد تخفیف را وارد کنید "
            className="border rtl text-right border-black"
          />
        </div>
      </div>
    </Conatiner>
  );
}

export default Cart;
