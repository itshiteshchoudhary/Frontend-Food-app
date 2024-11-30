import { createContext, useEffect, useState } from "react";
import { food_list } from "../images/images";


export const StoreContext = createContext(null)

export const StoreContextProvider=(props)=>{
    const [cartItem , setCartItem]=useState({})

    const addToCart =(itemId)=>{
        if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartItem=()=>{
        let totalAmt=0
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemDetail = food_list.find((product)=>product._id === item)
                totalAmt +=itemDetail.price *cartItem[item]
            }
        }
        return totalAmt
    }

    // useEffect(()=>{
    //     console.log(cartItem);        
    // },[cartItem])

    const contextValue={
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartItem
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

// export default StoreContextProvider