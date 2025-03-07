import React, { useContext } from 'react'
import { ShoppindCartContext } from '../../context'
import { useNavigate } from 'react-router-dom';
import CartTile from '../../components/cartTile';

export default function CartPage() {


  const navigate = useNavigate();

  const {cartItems} = useContext(ShoppindCartContext);
  return (
    <div className='max-w-7xl mx-auto max-md:max-w-xl pt-4'>
     <h1 className='text-2xl font-bold text-gray-800 text-center'>My Cart Page</h1>
     <div className='grid md:grid-cols-3 gap-8 mt-12'>
      <div className='md:col-span-2 space-y-4'>
         {
          cartItems?.length > 0 ? 
          cartItems.map((singleCartItem)=><CartTile singleCartItem={singleCartItem}/>): <h3 className='font-bold text-gray-700 text-3xl'>No items in the Cart🥲</h3>
         }
      </div>
      <div className='bg-gray-100 rounded-sm p-4 h-max'  >
        <h3 className="text-xl text-left ml-4 font-extrabold text-gray-950 border-b border-gray-300 mt-4 pb-2">Order Summary</h3>
        
        <ul className='text-gray-700 mt-4 space-y-2'>
          <p className='flex flex-wrap ml-5 gap-4 text-sm font-bold'>Total <span>${cartItems.reduce((prev,curr)=> prev + curr.totalPrice,0).toFixed(2)}</span></p>
        </ul>
        <div className='mt-5 flex flex-row gap-3 justify-evenly'>
          <button disabled={cartItems.length===0}  className='disabled:opacity-65 cursor-pointer text-sm mb-2 px-4 py-3 bg-black text-white font-extrabold rounded-md'>Checkout</button>
          <button onClick={()=>navigate('/products-list')}  className='cursor-pointer rounded-md text-sm mb-2 px-4 py-3 bg-black text-white font-extrabold'>Continue Shopping</button>
        </div>
      </div>
     </div>
    </div>
  )
}
