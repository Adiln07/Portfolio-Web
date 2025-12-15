import React from "react";

const DetailProduct = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  console.log("Slug param:", id);

  return (
    <div>
      Product Detail Page
      <h1>Product ID: {id} </h1>
    </div>
  );
};

export default DetailProduct;
