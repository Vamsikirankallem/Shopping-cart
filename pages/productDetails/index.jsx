import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ShoppindCartContext } from '../../context';
import Spinner from '../../components/spinner';

export default function ProductsDetailsPage() {

 const {cartItems} = useContext(ShoppindCartContext);

  const {id} = useParams();
  const {productDetails,setProductDetails,setLoading,loading,handleAddtoCart} = useContext(ShoppindCartContext);

  async function fetchProductDetails(){
   
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`)
      const result = await response.json();
      

      if(result){
          setProductDetails(result);
          setLoading(false);
      }
      
    } catch (error) {
      console.log(error)
    }
  }

   useEffect(()=>{
    fetchProductDetails()
   },[id])

   if(loading) return <Spinner/>
   console.log(productDetails)
  return (
    <div>
      <div className='p-6 lg:max-w-7xl max-w-4xl mx-auto'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-5 shadow-sm items-center p-6'>
          <div className='lg:col-span-3 w-full lg:sticky top-0 text-center'>
            <div className='pr-4 pl-10 rounded-xl shadow-lg relative'>
              <img className='w-4/5 rounded object-cover' src={productDetails?.thumbnail} alt={productDetails?.title}/>
            </div>
          </div>
         <div className='lg:col-span-2 flex flex-col items-start'>
          <h2 className='text-2xl font-extrabold text-[#333]' >{productDetails?.title}</h2>
          <div className='flex flex-wrap gap-4 mt-4'><p className=' font-bold text-xl mt-4' >{"$ "+productDetails?.price}</p></div>
          <div>
            <button disabled={ productDetails ? cartItems.findIndex((item)=>item.id === productDetails.id) > -1 : false} onClick={()=>handleAddtoCart(productDetails)}  className='disabled:opacity-65 cursor-pointer min-w-[200px] px-4 py-3 mt-4 border border-[#333] bg-transparent text-sm font-semibold rounded-md'>Add to Cart</button>
          </div>
         </div>
        
            
          
          
        </div>
      </div>
      <div className='mt-6 flex flex-wrap mx-auto gap-6 justify-center'>
        {
          productDetails?.images?.length > 0 ? 
          productDetails?.images.map((imageItem)=><div key={imageItem}  className='p-6 rounded-xl shadow-md'>
            <img className='w-24 cursor-pointer' src={imageItem} alt='Product secondary images'/>
          </div>) : null
        }
      </div>
    </div>
  )
}
