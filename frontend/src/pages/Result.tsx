import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Result(){
  const loc = useLocation();
  const state:any = (loc.state as any) || {};
  if (state.success) {
    return (
      <div className='p-6'>
        <h1 className='text-2xl font-bold'>Booking Confirmed</h1>
        <p className='mt-2'>Booking ID: {state.booking? state.booking._id : '—'}</p>
        <Link to='/' className='mt-4 inline-block text-blue-600'>Back to home</Link>
      </div>
    );
  }
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold'>Booking Failed</h1>
      <p className='mt-2'>{state.error || 'Unknown error'}</p>
      <Link to='/' className='mt-4 inline-block text-blue-600'>Back to home</Link>
    </div>
  );
}
