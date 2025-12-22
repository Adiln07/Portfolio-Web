import React from "react";
import { GetProducts } from "../queries/getProducts";
import Link from "next/link";

const Products = async () => {
  const products = await GetProducts();

  return (
    <div>
      <h1 className="py-5 font-bold kanit-font text-2xl text-center">
        Product Page
      </h1>

      <div className="flex  justify-center gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            className=" border-2 flex flex-col items-center w-34"
            href={`/products/${product.slug}`}
            // onClick={()}
          >
            <h1 className="text-lg">{product.title}</h1>
            <h2 className="text-sm">{product.content}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
