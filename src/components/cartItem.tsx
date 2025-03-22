import Image from "next/image";
import React from "react";

function CartItem() {
  return (
    <div className="grid grid-cols-12 mt-8 shadow-md mb-6">
      <div className="grid col-span-9 rtl text-right p-4">
        <h1 className="text-black font-bold text-xl">محصول 1</h1>
        <p>
          تعداد: <span>3</span>
        </p>
        <p className="font-bold rtl:">
          محصول قیمت: <span>$45</span>
        </p>
        <div className="mt-3">
          <button className="bg-sky-500 text-white px-4 py-2 rounded">+</button>
          <span className="mx-2">3</span>
          <button className="bg-sky-500 text-white px-4 py-2 rounded">-</button>
        </div>
      </div>
      <div className="grid col-span-3">
        <Image
          src={
            "https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/242ce817-97a3-48fe-9acd-b1bf97930b01/09-posterization-opt.jpg"
          }
          alt=""
          width={200}
          height={150}
        />
      </div>
    </div>
  );
}

export default CartItem;
