import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../api";

export default function Checkout(){
  const loc = useLocation();
  const nav = useNavigate();
  const payload = (loc.state && (loc.state as any).experience) ? (loc.state as any) : null;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(false);
  if (!payload) return <div className='p-6'>No booking data. Go back to <a href="/">home</a>.</div>;

  const applyPromo = async () => {
    const r = await api.post("/promo/validate", { code: promo });
    if (r.data.valid) {
      const c = r.data.coupon;
      if (c.type === "percent") setDiscount((payload.experience.price * c.value)/100);
      else setDiscount(c.value);
      alert("Promo applied");
    } else {
      alert("Invalid promo");
      setDiscount(0);
    }
  };

  const submit = async () => {
    if (!name || !email) { alert("Name & email required"); return; }
    setLoading(true);
    try {
      const res = await api.post("/bookings", {
        experienceId: payload.experience._id,
        name, email, date: payload.date, time: payload.time
      });
      setLoading(false);
      nav("/result", { state: { success: true, booking: res.data.booking }});
    } catch (err:any) {
      setLoading(false);
      const msg = err?.response?.data?.error || "Booking failed";
      nav("/result", { state: { success: false, error: msg }});
    }
  };

  const total = payload.experience.price - discount;
  return (
    <div className='p-6 max-w-lg mx-auto'>
      <h1 className='text-xl font-bold mb-4'>Checkout</h1>
      <div className='border p-4 rounded'>
        <div className='font-semibold'>{payload.experience.title}</div>
        <div className='text-sm'>{payload.date} • {payload.time}</div>
        <div className='mt-3'>Price: ₹{payload.experience.price}</div>
      </div>

      <div className='mt-4'>
        <input placeholder='Full name' value={name} onChange={e=> setName(e.target.value)} className='w-full border p-2 rounded mt-2' />
        <input placeholder='Email' value={email} onChange={e=> setEmail(e.target.value)} className='w-full border p-2 rounded mt-2' />
      </div>

      <div className='mt-4'>
        <input placeholder='Promo code' value={promo} onChange={e=> setPromo(e.target.value)} className='w-full border p-2 rounded mt-2' />
        <div className='flex gap-2 mt-2'>
          <button onClick={applyPromo} className='bg-gray-800 text-white px-3 py-1 rounded'>Apply</button>
        </div>
      </div>

      <div className='mt-4'>
        <div>Discount: ₹{discount}</div>
        <div className='font-bold'>Total: ₹{total}</div>
        <button onClick={submit} disabled={loading} className='mt-3 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50'>
          {loading? 'Processing...':'Confirm booking'}
        </button>
      </div>
    </div>
  );
}
