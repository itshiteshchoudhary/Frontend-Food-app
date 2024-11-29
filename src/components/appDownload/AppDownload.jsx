import React from 'react'
import { assests } from '../../images/images'

const AppDownload = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 m-8'>
        <p className='text-5xl font-extrabold'>For Better Experience Download </p>
        <p className='text-5xl font-extrabold'>Healthy Food</p>
        <div className='flex gap-28'>
            <img className='h-28 hover:scale-105 mt-4 bg-cover' src={assests.playStore} alt="Play Store"/>
            <img className='h-36 hover:scale-105 bg-cover backdrop-blur-xl' src={assests.appStore} alt="App Store"/>
        </div>
    </div>
  )
}

export default AppDownload