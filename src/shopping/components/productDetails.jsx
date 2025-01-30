import React, { useEffect } from "react";
import { useParams } from "react-router";
import { ProductContext } from "../Context";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, fetchProducts, handleAddCart } =
    React.useContext(ProductContext);

  useEffect(() => {
    if (!products.length) {
      fetchProducts();
    }
  }, [id]);

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} width={200} alt={product.title} />
      <p>{product.description}</p>
      <p>$: {product.price}</p>
      <button onClick={() => handleAddCart(product)}>Cart</button>
    </div>
  );
};

export default ProductDetails;
