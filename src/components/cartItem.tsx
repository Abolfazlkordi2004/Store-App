import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IProductItemProps } from "./productItem";
import AddToCart from "./AddToCart";

interface ICarItemProps {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICarItemProps) {
  const [data, setData] = useState({} as IProductItemProps) ;

  useEffect(() => {
    axios(`http://localhost:3001/products/${id}`).then((result) => {
      const { data } = result;
      setData(data);
    });
  });
  return (
    <div className="grid grid-cols-12 mt-8 shadow-md mb-6">
      <div className="grid col-span-9 rtl text-right p-4">
        <h1 className="text-black font-bold text-xl">{data.title}</h1>
        <p>
          تعداد: <span>{qty}</span>
        </p>
        <p className="font-bold rtl:">
          محصول قیمت: <span>${data.price}</span>
        </p>
        <AddToCart id={id.toString()}/>
      </div>
      <div className="grid col-span-3">
        <Image
          src={
            data.image
          }
          alt="image"
          width={200}
          height={150}
        />
      </div>
    </div>
  );
}

export default CartItem;
