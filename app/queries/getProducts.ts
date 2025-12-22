import { Product } from "../types/Product";

export async function GetProducts(): Promise<Product[]> {
  const data = await fetch("http://localhost:3001/post");
  const products = await data.json();

  return products;
}
