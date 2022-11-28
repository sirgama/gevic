import React from 'react'

export default function Hero() {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl py-2 px-2 lg:px-2 lg:py-4 md:mt-10">
        <div className="w-full flex flex-col md:flex-row">
        <div className="md:w-3/4">
            <h1 className='text-white text-5xl md:text-7xl font-bold p-2'>Start your <span className="text-orange-800">procurement</span>  journey with <span className="text-orange-800 "> Gevic Mundare</span> supplies.</h1>
        </div>
        <div className="w-full md:w-1/4 md:flex flex-col">
            <p className='text-gray-400 text-sm p-2 md:p-4'>Specializing in supplies and delivery of various goods and services, with efficient application of strategic procurement, timely delivery, and incorporation of sustainable business practices.</p>
            <button className='bg-orange-800 py-2 px-6   md:p-4  rounded-full text-white uppercase text-xs'>Learn more</button>
        </div>
        </div>
      </div>
    </div>
  )
}
