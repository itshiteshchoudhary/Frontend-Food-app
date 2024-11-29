import React from 'react'
import "../../App.css"

const Header = () => {
    return (
        <div>
            <div className='header w-[80vw] h-[70vh]'>
                <div className='text-white flex flex-col absolute top-6 px-12 gap-6 animate-pulse'>
                    <h2 className='text-5xl text-wrap'>Order your favourite food here</h2>
                    <p className='max-w-[50vw] text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic minima impedit adipisci accusantium architecto officiis neque sunt a maxime dicta assumenda quaerat, ex harum ducimus beatae magni corrupti distinctio ullam?</p>
                    <button className='bg-yellow-950 text-lg hover:scale-125 text-white max-w-28 rounded-lg py-2'>View</button>
                </div>
            </div>
        </div>
    )
}

export default Header