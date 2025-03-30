import Conatiner from "@/components/conatiner";
// import Pagination from "@/components/pagination";
import ProductItem, { IProductList } from "@/components/productItem";
import Link from "next/link";
import React from "react";

interface IStoreProps {
  params: Promise<object>;
  searchParams: Promise<{ page: string; per_page: string }>;
}

async function Store({ searchParams }: IStoreProps) {
  const page = (await searchParams).page ?? "1";
  const per_page = (await searchParams).per_page ?? "1";

  interface product {
    id: string;
    title: string;
    image: string;
    price: number;
  }

  const res = await fetch(
    `http://localhost:3001/products?_page=${page}&_per_page=${per_page}`
  );
  
  const data = (await res.json()) as IProductList;
  return (
    <Conatiner>
      <h2 className="py-4 text-right font-bold">خانه</h2>
      <div className="grid grid-cols-4 gap-4">
        {data.data.map((item: product) => (
          <Link href={`/store/${item.id}`} key={item.id}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
      {/* <Pagination pageCount={data.pages}/> */}
    </Conatiner>
  );
}

export default Store;
