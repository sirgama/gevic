import React from "react";
import hero from '../../../assets/images/gevic.svg'

export default function Hero() {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl py-2 px-2 lg:px-2 lg:py-4 md:mt-10">
        <div className="w-full flex flex-col md:flex-row">
          <div className="md:w-3/4">
            <h1 className="text-white text-5xl md:text-7xl font-bold p-2 md:leading-tight">
              Start your <span className="text-orange-800">procurement</span>{" "}
              journey with{" "}
              <span className="text-orange-800 "> Gevic Mundare</span> supplies.
            </h1>
          </div>
          <div className="w-full md:w-1/5 md:flex flex-col justify-center align-middle">
            <p className="text-gray-400 text-sm p-2 md:p-4 leading-5 text-center">
              Speciality in timely delivery of goods and services incorporated with sustainable business practices.
            </p>
            <button className="hidden md:block bg-orange-800 py-2 px-6   md:py-3 md:px-8 md:mx-auto  rounded-xl text-white uppercase text-xs">
              Learn more
            </button>
          </div>
          
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl py-2 px-2 lg:px-2 lg:py-4 md:mt-10">
        <div className="w-full flex flex-col md:flex-row justify-between">
          <div className="md:w-1/4">
            <div className="w-full  h-80 bg-gray-900 rounded-3xl flex flex-col justify-around">
                <div className="flex flex-row justify-between mx-6 text-gray-500 font-semibold">
                    <p className="text-sm my-2 border-b-2 border-orange-900">Supplies Tracking</p>
                    <p className="text-sm my-2 border-b-2 border-yellow-900">Delivery Timelines</p>
                </div>
                <div className="flex w-11/12 h-4/6 bg-gray-800/25 mx-auto rounded-3xl flex-col justify-between">
                    <p className="text-gray-500 p-3 text-sm">Shipment & Delivery Tracking</p>
                    <p className="text-gray-500 p-3 text-sm">Conveniently keep track of your ordered supplies, get delivery timelines and view invoices and receipts from anywhere with our dashboard. </p>
                    <button className="bg-orange-800 py-2 px-6   md:py-3 md:px-8 md:mx-auto my-4 rounded-xl text-white uppercase text-xs">
             Go to dashboard
            </button>
                </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 md:flex flex-row justify-between">
            
            <img src={hero} alt="" className=" h-96 md:mx-auto " />
          </div>
          
        </div>
      </div>
    </div>
  );
}
