import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Update = () => {
  const { id } = useParams();
const [name, setName] = useState('');
const [category, setCategory] = useState('');
const [desc, setDesc] = useState('');
const [price, setPrice] = useState('');
const [image, setImage] = useState(null);
const [prevImage, setPrevImage] = useState(''); // Track previous image
const navigate = useNavigate();

useEffect(() => {
  axios.get('http://localhost:9000/products/' + id)
    .then(res => {
      const data = res.data[0];
      setName(data.name);
      setCategory(data.category);
      setDesc(data.desc);
      setPrice(data.price);
      setImage(data.image);
      setPrevImage(data.image); // Set previous image initially
    })
    .catch(err => console.log(err))
}, []);

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('name', name);
  formData.append('desc', desc);
  formData.append('category', category);
  formData.append('price', price);
  // Append image only if it's changed
  if (image !== null && image !== prevImage) {
    formData.append('image', image);
  } else {
    formData.append('image', prevImage); // If image is not changed, use the previous image
  }
  axios.put('http://localhost:9000/products/' + id, formData)
    .then(res => {
      if (res.data.updated) {
        toast("Updated");
        navigate("/all");
      } else {
        alert("Not updated");
      }
    })
    .catch(err => {
      console.error(err);
      alert("Error updating product");
    });
}

return (
  <div>
    <div className="grid min-h-screen place-items-center">
    <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
    <h1 className="text-xl font-semibold">
            Hello there ?,{" "}
            <span className="font-normal">
              please fill in your information to Update
            </span>
          </h1>
      <form className="mt-6" onSubmit={handleSubmit}>
        <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase" htmlFor="">Name</label>
        <input className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={name} onChange={e => setName(e.target.value)} placeholder='name' type="text" />
        
        <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase" htmlFor="">Description</label>
        <input className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={desc} onChange={e => setDesc(e.target.value)} placeholder='description' type="text" />
        
        <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase" htmlFor="">Category</label>
        <input className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={category} onChange={e => setCategory(e.target.value)} placeholder='category' type="text" />
     
        <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase" htmlFor="">Price</label>
        <input className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={price} onChange={e => setPrice(e.target.value)} placeholder='price' type="text" />
       
        <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase" htmlFor="">Image</label>
        <input className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={(e) => setImage(e.target.files[0])} type="file" />
        <br />
        <button className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">Update</button>
      </form>
      </div>
    </div>
    
      
    </div>
  );
};

export default Update;
