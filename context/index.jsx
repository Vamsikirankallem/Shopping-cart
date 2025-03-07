import { createContext, useEffect, useState } from "react";
import Spinner from "../components/spinner";
import { useNavigate } from "react-router-dom";

 

 export const ShoppindCartContext = createContext(null);

 function ShoppingCartProvider({children}){

    const [productsList,setProductsList] = useState([]);
    const [loading,setLoading] = useState(false);
    const [productDetails,setProductDetails] = useState(null);
    const [cartItems,setCartItems] = useState([]);

    const navigate = useNavigate();

    async function fecthAllProducts(){
        setLoading(true);
        try {
            
            const response = await fetch('https://dummyjson.com/products');
            if(!response.ok){
                throw new Error(response.statusText)
            }

            const result = await response.json();
            console.log(result)

            if(result && result?.products){
                setProductsList(result?.products)
                setLoading(false);
            }
            
            

        } catch (error) {
            console.error(error);
        }
    }

    console.log(productsList);

    function handleAddtoCart(getProductDetails){
        

        let copyExisitinCartItems = [...cartItems];

        let findIndexOfCurrentCartItem = copyExisitinCartItems.findIndex((cartItem)=> cartItem.id === getProductDetails.id)

        console.log(findIndexOfCurrentCartItem);

        if(findIndexOfCurrentCartItem === -1){
            copyExisitinCartItems.push({
                ...getProductDetails,
                quantity : 1,
                totalPrice : getProductDetails?.price
            })
        }
        else{
            console.log("its coming here");
            copyExisitinCartItems[findIndexOfCurrentCartItem] = {
                ...copyExisitinCartItems[findIndexOfCurrentCartItem],
                quantity : copyExisitinCartItems[findIndexOfCurrentCartItem].quantity + 1,
                totalPrice : (copyExisitinCartItems[findIndexOfCurrentCartItem].quantity+1) * copyExisitinCartItems[findIndexOfCurrentCartItem].price
            }
            
        }

        

       
        console.log(copyExisitinCartItems);

        setCartItems(copyExisitinCartItems);
        localStorage.setItem("cartItem", JSON.stringify(copyExisitinCartItems))
        navigate("/cart")

        
        
    }

    function handleRemoveFromCart(getProductDetails,isFullyRemovedFromCart){
        let copyExisitinCartItems = [...cartItems];

        const findIndexOfCurrentCartItem = copyExisitinCartItems.findIndex((item)=> item.id === getProductDetails.id)

        if(isFullyRemovedFromCart){
            copyExisitinCartItems.splice(findIndexOfCurrentCartItem,1)
        }
        else{
            copyExisitinCartItems[findIndexOfCurrentCartItem] = {
                ...copyExisitinCartItems[findIndexOfCurrentCartItem],
                quantity : copyExisitinCartItems[findIndexOfCurrentCartItem].quantity-1,
                totalPrice : (copyExisitinCartItems[findIndexOfCurrentCartItem].quantity - 1) * copyExisitinCartItems[findIndexOfCurrentCartItem].price
            }
        }

        localStorage.setItem("cartItem",JSON.stringify(copyExisitinCartItems))
        setCartItems(copyExisitinCartItems);
    }
    

    useEffect(()=>{
        fecthAllProducts()
        setCartItems(JSON.parse(localStorage.getItem('cartItem')) || [])
    },[])


 
    if(loading) return <Spinner/>

  

   
    
 



    return <ShoppindCartContext.Provider value={{productsList,loading,setLoading,productDetails,setProductDetails,handleAddtoCart,cartItems,handleRemoveFromCart}}>{children}</ShoppindCartContext.Provider>
 }

 export default ShoppingCartProvider;