import Conatiner from "@/components/conatiner";
import ProductItem from "@/components/productItem";
import Link from "next/link";
import React from "react";

async function Store() {
  interface product {
    id: string;
    title: string;
    image: string;
    price: number;
  }
  const res = await fetch("http://localhost:3001/products");
  const data = await res.json();
  return (
    <Conatiner>
      <h2 className="py-4 text-right font-bold">خانه</h2>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item: product) => (
          <Link href={`/store/${item.id}`} key={item.id}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
    </Conatiner>
  );
}

export default Store;
