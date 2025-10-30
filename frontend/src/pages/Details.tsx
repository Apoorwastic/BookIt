import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api";

export default function Details(){
  const { id } = useParams();
  const nav = useNavigate();
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  useEffect(()=> {
    if (!id) return;
    api.get(`/experiences/${id}`).then(r=> { setItem(r.data); setLoading(false); }).catch(()=> setLoading(false));
  },[id]);
  if (loading) return <div className='p-6'>Loading...</div>;
  if (!item) return <div className='p-6'>Not found</div>;
  const timesForDate = item.slots.filter((s:any)=> s.date===selectedDate && s.available);
  return (
    <div className='p-6'>
      <button onClick={()=> nav(-1)} className='mb-4'>← Back</button>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <img src={item.image} alt={item.title} className='w-full h-64 object-cover rounded' />
        </div>
        <div>
          <h1 className='text-2xl font-bold'>{item.title}</h1>
          <p className='mt-2'>{item.description}</p>
          <div className='mt-4'>
            <div className='font-semibold'>Select date</div>
            <select value={selectedDate} onChange={e=> { setSelectedDate(e.target.value); setSelectedTime(""); }} className='border p-2 mt-2'>
              <option value=''>-- choose date --</option>
              {Array.from(new Set(item.slots.map((s:any)=> s.date))).map(d=> (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            {selectedDate && (
              <>
                <div className='font-semibold mt-3'>Available times</div>
                <div className='flex gap-2 mt-2 flex-wrap'>
                  {timesForDate.length===0 && <div className='text-sm text-gray-500'>Sold out</div>}
                  {timesForDate.map((t:any)=> (
                    <button key={t.time} onClick={()=> setSelectedTime(t.time)}
                      className={`px-3 py-1 border rounded ${selectedTime===t.time? 'bg-blue-600 text-white':''}`}>
                      {t.time}
                    </button>
                  ))}
                </div>
              </>
            )}
            <div className='mt-6'>
              <div className='text-lg font-bold'>Price: ₹{item.price}</div>
              <button disabled={!selectedTime} onClick={()=> {
                nav('/checkout', { state: { experience: item, date: selectedDate, time: selectedTime }});
              }} className='mt-3 bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50'>Book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
