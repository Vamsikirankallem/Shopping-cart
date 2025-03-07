import React, { useContext } from 'react'
import { ShoppindCartContext } from '../../context'
import ProductTile from '../../components/ProductTile';
import { useNavigate } from 'react-router-dom';

export default function ProductsListPage() {
        
  const navigate = useNavigate();
       const {productsList} = useContext(ShoppindCartContext);

       console.log(productsList)
  return (
    <section className='pt-12 bg-white sm:pt-16 lg:pt-20 '>
     <div className='pl-4 mx-auto sm:pl-6 lg:pl-8 max-w-7xl'>
      <div className='max-w-full mx-auto text-center flex flex-row gap-10 justify-between '>
        <h2 className='text-3xl font-extrabold text-gray-950 sm:text-4xl w-full '>Our Feature Products </h2>
        <div className='w-full flex justify-end'>
        <button onClick={()=>navigate('/cart')}  className= 'text-black font-bold' ><svg class="feather feather-shopping-cart" fill="none" height="30" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></button>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 lg:gap-8 lg:grid-cols-4 mt-10'>
        {
           productsList && productsList.length>0 ? productsList.map((singleProductTile)=><ProductTile singleProductTile={singleProductTile}/>) : <h3>No products found</h3>
        }
      </div>
     </div>
    </section>
  )
}
