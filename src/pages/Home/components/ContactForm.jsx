import React from 'react'

export default function ContactForm() {
  return (
    <div id='contact'>
      <div className=' mx-auto max-w-screen-2xl py-2 md:py-4 px-2 lg:px-2 lg:py-0 rounded-3xl mt-6 md:mt-20'>
        <h1 className="text-center md:text-4xl font-bold text-white">Contact us</h1>
        <p className="text-center text-white p-4">Send an inquiry or request for a quotation.</p>
        <div className="mx-auto">
        <form action="" className='w-full'>
        <div className=' mx-auto flex flex-col md:flex-row justify-center'>
            <input type="email" className="form-input px-8 md:px-20 m-4 py-3 rounded bg-gray-800 border-none text-white" placeholder='gedion@gevic.com' />
            <input type="name" className="form-input px-8 m-4 md:px-20 py-3 rounded bg-gray-800 border-none text-white" placeholder='Your name ' />
        </div>
        <div className=' mx-auto flex flex-col md:flex-row justify-center'>
            <input type="text" className="form-input px-8 m-4 py-3 md:px-20 rounded bg-gray-800 border-none text-white" placeholder='Phone eg. 254712312434' />
            <select name="service" className="form-select px-8 m-4 py-3 md:px-20 rounded bg-gray-800 border-none text-white" required="" id="id_service">
                <option value="" selected="">---------</option>

                <option value="Inquiry">General Inquiry</option>

                <option value="Request for quotation">Request for quotation</option>

            </select>
        </div>
        <div className=' mx-auto flex flex-col md:flex-row justify-center'>
        <input type="textarea" className="form-textarea px-8 m-4 py-3 md:px-20 md:w-2/5 rounded bg-gray-800 border-none text-white" placeholder='Additional information/Message'  />
        </div>
        <div className=' mx-auto flex flex-col md:flex-row justify-center'>
            <button className="bg-orange-900 py-4 px-6 mx-auto  md:py-3 md:px-8 my-4 rounded-xl md:mx-6 text-white font-semibold uppercase text-xs">
             Send
            </button>
        </div>
        
        </form>
        </div>
      </div>
    </div>
  )
}
