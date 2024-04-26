import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Donate_us() {
  return (
    <div>
      <Navbar/>
      <div className="text-4xl mx-[40vw] text-[#5a72a7] flex justify-center my-10 font-bold">
        <h2>Donate Us</h2>
      </div>
      <div className="flex flex-col items-center justify-center my-10">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <p className="text-lg font-semibold text-[#5a72a7] mb-4">Donate Us</p>
          <img className='w-[30vw] h-[100vh]' src="/images/qr.jpg" alt="my qr" />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
