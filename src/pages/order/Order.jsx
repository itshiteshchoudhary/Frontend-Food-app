import React, { useContext } from 'react'
import { StoreContext } from '../../context/Context'

const Order = () => {
  const { getTotalCartItem } = useContext(StoreContext)
  return (
    <div>
      <form >
        <div className='flex flex-col items-center w-[50vw] gap-6'>
          <p className='text-4xl font-extrabold mb-4'>Delivery Info.</p>
          <div className='flex w-[35vw] justify-between'>
            <label htmlFor="name">Full Name</label>
            <input className='outline-none border-b-2 border-green-950 py-1' type="text" id='name' name='name' placeholder='Enter you name' />
          </div>
          <div className='flex w-[35vw] justify-between '>
            <label htmlFor="number">Mobile.No</label>
            <input className='outline-none border-b-2 border-green-950 py-1' type="text" name='number' id='number' placeholder='Enter your mobile no.' />
          </div>
          <div className='flex w-[35vw] justify-between '>
            <label htmlFor="address">Address</label>
            <input className='outline-none border-b-2 border-green-950 py-1' type="text" id='address' name='address' placeholder='Enter your address' />
          </div>
          <div className='flex w-[35vw] justify-between '>
            <label htmlFor="city">City</label>
            <input className='outline-none border-b-2 border-green-950 py-1' type="text" id='city' name='city' placeholder='Enter your city' />
          </div>
          <div className='flex w-[35vw] justify-between '>
            <label htmlFor="state">State</label>
            <input className='outline-none border-b-2 border-green-950 py-1' type="text" id='state' name='state' placeholder='Enter your state' />
          </div>
          <div className='flex w-[35vw] justify-between '>
            <label htmlFor="code">PIN Code</label>
            <input className='outline-none border-b-2 border-green-950 py-1' type="text" id='code' name='code' placeholder='Enter your code' />
          </div>
        </div>
        <div className='flex flex-col w-[50vw] gap-6 mt-10'>
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
                        <button className='bg-red-800 px-8 py-2 rounded-md self-center text-nowrap object-cover'>PROCEED TO Pay</button>
                    </div>
                    
          
        </div>
      </form >
    </div >
  )
}

export default Order