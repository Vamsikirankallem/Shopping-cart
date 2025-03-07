import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ShoppindCartContext } from '../../context';

export default function ProductTile({singleProductTile}) {

  const navigate = useNavigate();

  const {handleAddtoCart,cartItems} = useContext(ShoppindCartContext);

  function handleNavigationToProductDetailsPage(getCurrentProductId){
    console.log(getCurrentProductId, navigate);
    navigate(`/products-details/${getCurrentProductId}`)
    
  }
  return (
    <div className='relative group border border-grey-300 p-6 cursor-pointer shadow-2xl  shadow-grey-500/50 rounded-xl'>
        <div className='overflow-hidden aspect-w-1 aspect-h-1  '>
            <img 
            src={singleProductTile?.thumbnail}
            alt={singleProductTile?.title}
            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-120"/>
        </div>
        <div className='flex items-start space-x-4 mt-4 justify-between'>
            <p className='whitespace-nowrap text-ellipsis overflow-hidden w-[100px] mt-4 font-bold text-gray-900 text-xs sm:text-sm md:text-base'>{singleProductTile?.title}</p>
            <div className='text-xs sm:text-sm md:text-[12px] text-gray-900 font-bold mt-5'>${singleProductTile?.price}</div>
        </div>
        <button onClick={()=>handleNavigationToProductDetailsPage(singleProductTile?.id)} className='font-bold bg-black text-white w-40 h-10 cursor-pointer rounded-none  text-lg px-5 mt-5'>View Details</button>
        <button disabled={cartItems.findIndex((item)=>item.id === singleProductTile.id) > -1} onClick={()=>handleAddtoCart(singleProductTile)}  className='disabled:opacity-65 font-bold bg-black text-white w-40 h-10 cursor-pointer rounded-none  text-lg px-5 mt-5'>Add to Cart</button>
     
    </div>
  )
}
