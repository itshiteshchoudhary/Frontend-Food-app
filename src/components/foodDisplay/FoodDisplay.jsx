import React, { useContext } from 'react'
import { StoreContext } from '../../context/Context'
import FoodItem from '../fooditems/FoodItem'

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext)
    return (
        <div className='mx-5'>
            <h2 className='text-4xl font-extrabold my-8 border-b-4 border-green-950 rounded-lg p-4'>Top dishes near you </h2>
            <div className='grid grid-rows-4 grid-cols-4 gap-x-10 gap-y-12 '>
                {food_list.map((items, index) => {
                    if (category === "All" || category === items.category) {
                        return <FoodItem key={index} id={items._id} name={items.name} price={items.price} image={items.image} description={items.description} />
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay