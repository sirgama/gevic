import React from 'react'

export default function CTA() {
  return (
    <div>
      <div className="text-center mx-auto max-w-screen-2xl py-2 md:py-4 px-2 lg:px-2 lg:py-0 rounded-3xl mt-6">
        <h1 className="md:text-6xl font-bold text-white md:w-3/4 mx-auto md:mt-28 tracking-wide leading-10 p-2">LET US SORT ALL YOUR PROCUREMENT AND LOGISTICS NEEDS</h1>
        <button className="bg-orange-800 py-4 px-6  font-semibold md:py-3 md:px-8 md:mx-auto my-4 rounded-xl text-white uppercase text-xs">
             Send inquiry
            </button>
            <button className="bg-white py-4 px-6   md:py-3 md:px-8 my-4 rounded-xl md:mx-6 text-black font-bold uppercase text-xs">
             Go to dashboard
            </button>
      </div>
    </div>
  )
}
