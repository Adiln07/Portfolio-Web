import React from "react";
import { Product } from "@/app/types/Product";

async function getProduct(slug: string): Promise<Product> {
  const data = await fetch(`http://localhost:3001/post/?slug=${slug}`);
  const [product] = await data.json();
  return product;
}

const DetailProduct = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  console.log("Slug param:", id);

  const product = await getProduct(id);

  console.log("Fetched product:", product);

  return (
    <div>
      Product Detail Page
      <h1>Product ID: {id} </h1>
      <h1>Name: {product.title}</h1>
      <h2>Content: {product.content}</h2>
    </div>
  );
};

export default DetailProduct;
