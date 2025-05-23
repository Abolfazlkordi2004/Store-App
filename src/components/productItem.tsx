import Image from "next/image";
import React from "react";

export interface IProductItemProps {
  id: string;
  title: string;
  image: string;
  price: number;
}

export interface IProductList{
  first:number|null,
  items:number|null,
  last:number|null,
  next:number|null,
  pages:number,
  prev:number|null,
  data:IProductItemProps[]
}

function ProductItem({ image, title, price }: IProductItemProps) {
  return (
    <div className="shadow-md">
      <Image src={image} alt="image" width={100} height={100}/>
      <div className="p-2 text-right rtl">
        <h3 className="font-bold">{title}</h3>
        <p>
          قیمت: <span>${price}</span>
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
