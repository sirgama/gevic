import React from 'react'
import Deliver from '../../../assets/images/deliver.jpg'

export default function Service() {
  return (
    <div>
      <div className='mx-auto max-w-screen-2xl py-2 md:py-0 px-2 lg:px-2 lg:py-0 rounded-3xl mt-6 md:mt-14'>
      <p className="text-orange-800/75 px-2 md:px-20 font-bold pt-8">- Services</p>
        <h1 className="text-white text-3xl md:text-5xl font-bold px-2 md:px-20 md:py-8 py-4 md:leading-tight "><span className="text-orange-900">SOURCING</span> AND DELIVERING YOUR <span className="text-orange-900">GOODS</span> AND SUPPLIES FAST WHILE PROVIDING AN <span className="text-orange-900">EASY</span> WAY TO TRACK YOUR <span className="text-orange-900">ORDERS</span>. </h1>
            <div className="flex flex-col md:flex-row px-2 md:px-20 md:py-8 py-4 justify-between">
                <div className='md:w-5/12 h-[32rem]'>
                    <img className='relative w-full h-full object-cover object-center rounded-3xl' src={Deliver} alt="" />
                </div>
                <div className='flex flex-col md:w-6/12 justify-around'>
                    <hr />
                     <h1 className="text-white font-bold text-3xl"><span className="text-orange-900">Product Sourcing</span> and Delivery</h1> 
                     <h1 className="text-white ">We find good quality products to sell from reputable distributors and manufactures at good prices. We research the chosen product, calculate price and cost of the product, and then negotiating in order to achieve the best deal.</h1>
                     <hr />
                        
                     <h1 className="text-white font-bold text-3xl"><span className="text-orange-900">Transport</span> and Logistics</h1>   
                     <h1 className="text-white">Tell us where you need, when you need and we will deliver! We focus on the movement of goods from one place to another, and logistics deals with the integration of storage, handling, sorting, packing, and transportation of goods</h1>     
                </div>
            </div>
      </div>
    </div>
  )
}
