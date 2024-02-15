import React, { useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import {useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('category', category); 
    formData.append('price', price);       
    formData.append('image', image);

    try {
      await axios.post('http://localhost:9000/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast("Product Added SuccessFully")
      navigate("/all")
      console.log('Product added successfully');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
    return (
        <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold">
            Hello there ?,{" "}
            <span className="font-normal">
              please fill in your information to continue
            </span>
          </h1>
          <form className="mt-6"onSubmit={handleSubmit}>
          <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              ID : 
            </label>
            <input
              type="number"
              value={id} onChange={(e) => setId(e.target.value)}
              placeholder="Input Id"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
             
            />
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Name
            </label>
            <input
              type="text"
              value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Input Product Name"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              
            />
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Description
            </label>
            <textarea
              className="textarea textarea-bordered block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              placeholder="Type Description"
              value={desc} onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Price
            </label>
            <input
              type="text"
              value={price} onChange={(e) => setPrice(e.target.value)}
              placeholder="Input Price"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
             
            />
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Category
            </label>
            <input
              type="text"
              value={category} onChange={(e) => setCategory(e.target.value)}
              placeholder="Input Category"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
             
            />
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Image
            </label>
            <input
              type="file" 
              onChange={(e) => setImage(e.target.files[0])}
              placeholder="Input Image Url"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
             
            />
            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
             Add Now
            </button>
            
          </form>
        </div>
      </div>
    );
};

export default Add;