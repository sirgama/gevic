import React from 'react'

export default function Services() {
  return (
    <div>
      <div className="bg-gray-900 mx-auto max-w-screen-2xl py-2 md:py-0 px-2 lg:px-2 lg:py-0 rounded-3xl">
        <p className="text-orange-900 p-2">Our Services</p>
        <h1 className="text-white text-3xl md:text-5xl font-bold px-2 md:px-20 md:py-14 py-4 md:leading-tight">SERVICES WE OFFER</h1>

        <div className="flex flex-row w-full flex-wrap justify-center">
            <div className=" bg-gray-800/25 rounded-3xl w-1/4 p-6 m-2 text-white hover:bg-orange-900  transition ease-in-out ">
                <h1 className="text-5xl font-bold p-4">01</h1>
                <h3 className=" text-base my-2 font-semibold">Printed and Non printed office stationery</h3>
                <p className="text-gray-400 font-semibold text-sm">We got a huge selections for the Schools and office. Find our extensive range of Diaries, Calendars, adhesives, copier paper, envelopes, exercise books, notepads, pens, whiteboards and much, much more.</p>
            </div>
            <div className=" bg-gray-800/25 rounded-3xl w-1/4 p-6 m-6 ">
                <h1 className="text-white text-4xl font-bold p-4">01</h1>
                <h3 className="text-white text-xl">Printed and Non printed office stationery</h3>
                <p className="text-white text">We got a huge selections for the Schools and office. Find our extensive range of Diaries, Calendars, adhesives, copier paper, envelopes, exercise books, notepads, pens, whiteboards and much, much more.</p>
            </div>
            <div className=" bg-gray-800/25 rounded-3xl w-1/4 p-6 m-6 ">
                <h1 className="text-white text-4xl font-bold p-4">01</h1>
                <h3 className="text-white text-xl">Printed and Non printed office stationery</h3>
                <p className="text-white text">We got a huge selections for the Schools and office. Find our extensive range of Diaries, Calendars, adhesives, copier paper, envelopes, exercise books, notepads, pens, whiteboards and much, much more.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
