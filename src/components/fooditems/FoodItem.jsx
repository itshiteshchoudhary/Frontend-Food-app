import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { StoreContext } from "../../context/Context";

const FoodItem = ({ id, name, price, description, image }) => {
    const {cartItem ,addToCart ,removeFromCart} =useContext(StoreContext)
    return (
        <div>
            <div className="mb-4 relative">
                <img className='h-60 w-64 rounded-xl mb-5' src={image} alt="" />
                {!cartItem[id] ?
                    <div className="absolute bottom-3 right-3 backdrop-blur-xl w-12 h-12 flex items-center justify-center rounded-full">
                        <FaPlus className="text-green-500 text-xl" onClick={()=>addToCart(id)} />
                    </div> :
                    <div className="flex gap-20">
                        <FaPlus className="text-green-700 text-xl" onClick={()=>addToCart(id)} />
                        <p className="text-xl">{cartItem[id]}</p>
                        <FaMinus className="text-red-800 text-xl" onClick={()=>removeFromCart(id)} />
                    </div>
                }
            </div>
            <p className='font-extrabold'>{name}</p>
            <p className='font-extrabold'>RS : {price} /-</p>
            <p>{description}</p>
        </div >
    )
}

export default FoodItem