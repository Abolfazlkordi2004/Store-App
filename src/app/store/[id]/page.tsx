// import Image from "next/image";
import AddToCart from "@/components/AddToCart";
import { IProductItemProps } from "@/components/productItem";
import Image from "next/image";
import React from "react";

interface Iproduct {
  params: Promise<{ id: string }>;
  searchParams: Promise<unknown>;
}

async function Product({ params }: Iproduct) {
  const { id } = await params;
  const res = await fetch(`http://localhost:3001/products/${id}`);
  const data = (await res.json()) as IProductItemProps;

  return (
    <div className="grid grid-cols-12 mt-8 shadow-md">
      <div className="grid col-span-9 rtl text-right p-4">
        <h1 className="text-black font-bold">{data.title}</h1>
        <p className="text-gray-600">
          sdnlnsdvnsvsmdslmspnpofl as slncpsmpmscsdm
        </p>
        <p className="font-bold">
          قیمت: <span>${data.price}</span>
        </p>
        <AddToCart id={id} />
      </div>
      <div className="grid col-span-3">
        <Image src={data.image} alt="image" width={200} height={100} />
      </div>
    </div>
  );
}

export default Product;
