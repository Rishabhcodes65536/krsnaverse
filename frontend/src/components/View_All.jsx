import React from 'react'

export default function View_All({data, title}) {
  return (
    <div className='mb-20'>
        <div className='text-4xl mx-[40vw] text-[#5a72a7] flex justify-center mb-10 font-bold '>
        <h2 className="">{title}</h2>
      </div>
      <div className='mx-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center'>
        {data.map((item, index) => (
            <div key={index} className='flex flex-col justify-between bg-white shadow-md rounded-lg overflow-hidden'>
            <div className='aspect-w-3 aspect-h-4'>
                <img className='object-cover w-full h-full' src={item.img} alt={item.description} />
            </div>
            <div className='p-4'>
                <h3 className='text-xl font-semibold'>{item.title}</h3>
                <p className='mt-2 text-gray-600'>{item.description}</p>
                <div className='mt-4 flex justify-center'>
                <a href="/" className='bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md font-semibold'>Donate Us</a>
                </div>
            </div>
            </div>
        ))}
        </div>

    </div>
  )
}
