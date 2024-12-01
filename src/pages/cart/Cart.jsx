import React, { useContext } from 'react'
import { StoreContext } from '../../context/Context'
import { RiCloseLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { food_list, cartItem, removeFromCart, getTotalCartItem } = useContext(StoreContext)
    const navigate = useNavigate()
    return (
        <div>
            <div className='flex  my-16 mx-6 justify-between'>
                <p>Item</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            {food_list.map((item) => {
                if (cartItem[item._id] > 0) {
                    return (
                        <div className='flex border-b-2 my-8 mx-6 justify-between'>
                            <img className='h-8 w-8' src={item.image} alt="" />
                            <p>{item.name}</p>
                            <p>Rs {item.price}</p>
                            <p>{cartItem[item._id]}</p>
                            <p>Rs {item.price * cartItem[item._id]}</p>
                            <RiCloseLine onClick={() => { removeFromCart(item._id) }} />
                        </div>
                    )
                }
            })}
            <div className='flex justify-between mt-20 w-full'>
                <div className='flex flex-col w-[50vw] gap-6'>
                    <h2 className='font-extrabold text-2xl self-center'>Cart Total</h2>
                    <div className='flex flex-col gap-6'>
                        <div className='flex justify-between mx-4 border-b-2 border-green-950'>
                            <p>Sub Total</p>
                            <p>RS {getTotalCartItem()}</p>
                        </div>
                        <div className='flex justify-between mx-4 border-b-2 border-green-950'>
                            <p>Delivery Fee</p>
                            <p>RS {getTotalCartItem()>0 ? 2 : 0}</p>
                        </div> 
                        <div className='flex justify-between mx-4 border-b-2 border-green-950'>
                            <b>Total</b>
                            <b>RS {getTotalCartItem()>0 ? getTotalCartItem()+2 : 0}</b>
                        </div>
                        <button onClick={()=>navigate("/order")} className='bg-red-800 px-8 py-2 rounded-md self-center text-nowrap object-cover'>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
                <div className='flex flex-col justify-center gap-5 items-start px-24 w-[50vw]'>
                    <b>Use Promo Code</b>
                    <div className='flex gap-10'>
                        <input className='outline-none border-b-2 border-green-950' type="text" placeholder='Promo Code' />
                        <button className='bg-black text-white px-8 py-1 rounded-md'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart