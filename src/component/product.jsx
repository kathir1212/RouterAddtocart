import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Product() {

  const { id } = useParams(); 
  const [product, setProductsinfo] = useState({});


  let productdetailapi = async (id) => {

    const productsdetail = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );
  
  
  
      const productdetailResponse = await productsdetail.json();

      
  
      
      setProductsinfo(productdetailResponse);

  }

  


  useEffect(() => {
    productdetailapi(id);
  }, [id]);

  

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-[4%]">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-4">{product.title}</h2>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-lg font-semibold mt-2">${product.price}</p>
    </div>
  );
}

export default Product;




