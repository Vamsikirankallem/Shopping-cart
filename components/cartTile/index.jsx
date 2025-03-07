import React, { Fragment, useContext } from 'react'
import { ShoppindCartContext } from '../../context';

export default function CartTile({singleCartItem}) { 

  const {handleRemoveFromCart,handleAddtoCart} = useContext(ShoppindCartContext);

    console.log(singleCartItem);
  return (
    <Fragment>
        <div className='grid grid-cols-3 items-start gap-5 bg-gray-50 shadow-lg p-6 mb-4'>
      <div className='col-span-2 flex items-start gap-4'>
        <div className='w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm'>
            <img src={singleCartItem?.thumbnail} className='w-full h-full object-contain' />
        </div>
        <div className=''>
            <h3 className='text-base font-bold text-gray-900  '>{singleCartItem?.title}</h3>
         
            <button onClick={()=>handleRemoveFromCart(singleCartItem,true)}  className='cursor-pointer text-sm mb-2 px-4 py-3 mt-3 bg-black text-white font-extrabold rounded-md'>Remove</button>
        </div>
      </div>
      <div className='ml-auto'>
        <h3 className='text-lg font-bold text-gray-900'>${singleCartItem?.totalPrice.toFixed(2)}</h3>
        <div>
          <p className='mt-3 mb-3 font-bold text-[16px]'>Quantity: {singleCartItem?.quantity}</p>
          </div>
       <div className='flex gap-2 mt-2'>
      
       <button disabled={singleCartItem?.quantity === 1} onClick={()=>handleRemoveFromCart(singleCartItem,false)} className='disabled:opacity-65 cursor-pointer border-1 border-black w-10 h-10 bg-gray-50 rounded-sm' >-</button>
       <button onClick={()=>handleAddtoCart(singleCartItem)}  className='cursor-pointer bg-gray-50 border-1 border-black w-10 h-10 rounded-sm'>+</button>
       </div>
      </div>
      
    </div>
    
    </Fragment>
 
    
  )
}
