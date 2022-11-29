import React from 'react'
import about from '../../../assets/images/about.jpg'

export default function About() {
  return (
    <div>
      <div className='bg-gray-900 mx-auto max-w-screen-2xl py-2 md:py-0 px-2 lg:px-2 lg:py-0 rounded-3xl mt-6'>
      <p className="text-orange-800/75 px-2 md:px-20 font-bold pt-8">- About us</p>
        <h1 className="text-white text-3xl md:text-5xl font-bold px-2 md:px-20 md:py-8 py-4 md:leading-tight "><span className="text-orange-900">GEVIC MUNDARE</span> IS ON A JOURNEY TO PROVIDE THE BEST QUALITY SUPPLIES AND A UNIFIED PROCUREMENT PLATFORM </h1>
        <p className="text-gray-300 font-normal text-sm px-2 md:px-20 md:py-4 py-4 md:leading-tight">Non pharmaceuticals range from accessories, bandage and plasters, blood bags, cotton dressing, face masks and surgical caps, first aid kits, gloves, sterile dressing, tubings and clamps, urology, sutures and much more.</p>
        <div className="flex flex-row justify-around px-2 md:px-20 md:py-8 py-4 md:leading-tight text-white text-center">
            <div>
                <h1 className='text-3xl md:text-5xl font-bold my-2'>100+ </h1>
                <h3 className='text-gray-500 text-sm'>Clients</h3>
            </div>
            <div>
                <h1 className='text-3xl md:text-5xl font-bold my-2'>99% </h1>
                <h3 className='text-gray-500 text-sm'>Faster deliveries</h3>
            </div>
            <div>
                <h1 className='text-3xl  md:text-5xl font-bold my-2'>2+ </h1>
                <h3 className='text-gray-500 text-sm break-words'>Years of service</h3>
            </div>
        </div>
        <div className='w-full h-96'>
            <img src={about} className='relative w-full h-full object-cover object-top shadow-lg shadow-orange-900/25 rounded-3xl' alt="" />
        </div>
        
      </div>
    </div>
  )
}
