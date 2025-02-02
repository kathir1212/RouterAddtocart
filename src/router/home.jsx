import React, { useState, useEffect } from "react";
import { useCart } from "../Context/productContext";

function Home() {
  const [products, setProducts] = useState([]);
  const { cart, addToCart, decQuantity } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-[3%] bg-[#f5f2f2]">
      {products.map((product) => {
        const cartItem = cart.find((item) => item.id === product.id);
        const isInCart = !!cartItem;

        return (
          <div key={product.id} className="h-full mb-[7%]">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href={`/product/${product.id}`}>
                <img
                  src={product.image}
                  className="rounded-t-lg w-[100%] object-cover h-[200px] "
                  alt={product.title}
                />
              </a>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                  {product.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Rs. {product.price}
                </p>

                {isInCart ? (
                  <div className="flex items-center gap-2">
                    <button
                      className="px-3 py-1 bg-gray-300 rounded"
                      onClick={() => decQuantity(product.id ,isInCart)}
                    >
                      -
                    </button>
                    <p>{cartItem.quantity}</p>
                    <button
                      className="px-3 py-1 bg-gray-300 rounded"
                      onClick={() => addToCart(product)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="px-[2%] py-[4%] text-white w-[100%] bg-blue-500"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
