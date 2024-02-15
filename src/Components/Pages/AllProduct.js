import React, { useEffect, useState } from 'react';

import axios from "axios";
import { Link } from 'react-router-dom';

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:9000/products");
      
        setProducts(res.data);
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);
     
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:9000/products/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
    return (
        <div className="flex overflow-hidden bg-dark pt-16">
       
        <div
          id="main-content"
          className="h-full w-full bg-slate-700 relative overflow-y-auto lg:ml-64"
        >
          <main>
          
            <div className="pt-6 px-4">
              <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 gap-10 mt-20 gap-y-14'>
                {
                  products.map((product) =>(
                    <div key={product.id} className="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
        <a
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href="/"
        >
          {product.image && (
              <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={`http://localhost:9000/public/images/${product.image}`} alt={product.name} />
            )}

          <svg
            className="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
            />
          </svg>
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="/">
            <h5 className="text-xl tracking-tight text-white">{product.name}</h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-white">{product.price}</span>
              <span className="text-sm text-white line-through">$699</span>
            </p>
          </div>
          <div className='flex justify-between items-center gap-10 mt-10'>
         
          <button
            onClick={() => handleDelete(product.id)}
            class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Delate
          </button>
          <Link to={`/update/${product.id}`}><button
           
           class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
         >
           Update
         </button></Link>
          
          
          </div>
         
        </div>
        
      </div>
                  ))
                }
              </div>
            </div>

          </main>
        </div>
      </div>
    );
};

export default AllProduct;