import React, { useEffect, useState } from "react";
import { api } from "../api";
import { Link } from "react-router-dom";

export default function Home(){
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    api.get("/experiences").then(r=> {
      setItems(r.data);
      setLoading(false);
    }).catch(()=> setLoading(false));
  },[]);
  if (loading) return <div className='p-6'>Loading...</div>;
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>Experiences</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {items.map(i=> (
          <div key={i._id} className='border rounded p-4'>
            <img src={i.image} alt={i.title} className='w-full h-40 object-cover rounded' />
            <h2 className='text-lg font-semibold mt-2'>{i.title}</h2>
            <p className='mt-1'>{i.description}</p>
            <div className='flex items-center justify-between mt-3'>
              <div className='font-bold'>₹{i.price}</div>
              <Link to={`/details/${i._id}`} className='bg-blue-600 text-white px-3 py-1 rounded'>View</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
