import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, handleDelate }) => {
    const { name, price, id } = product;
    return (
        <div>
           <div></div>
      <div className="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
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
            <h5 className="text-xl tracking-tight text-white">{name}</h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-white">{price}</span>
              <span className="text-sm text-white line-through">$699</span>
            </p>
          </div>
          <Link to={`/details/${id}`}><button className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"><svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            See Details</button></Link>
          <div className='flex justify-between items-center gap-10 mt-10'>
          <Link to={`/update/${id}`}>
          <button type="button" class="text-white hover:text-white border border-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-600 dark:text-white dark:hover:text-white dark:hover:bg-yellow-600 dark:focus:ring-yellow-900">Edit</button>
        </Link>
          <button
            onClick={() => handleDelate(id)}
            class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Delate
          </button>
          
          </div>
         
        </div>
        
      </div> 
        </div>
    );
};

export default ProductCard;