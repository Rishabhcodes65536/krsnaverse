import React from 'react'

export default function Events_card({events}) {
  return (
    <div>
      <div>
        <div className='mb-[10vh]'>
        <ul className=" flex flex-wrap justify-evenly">
        {events.map((event, index) => (
          <li className='flex flex-col w-[30%] mx-2 mb-8' key={index} >
                <div className='flex justify-center  border border-gray-300 rounded-t-lg'>
                    <img className='h-[40vh] w-full border rounded-t-lg' src={event.image} alt="" />
                </div>
                <div className='flex flex-col space-y-2  border border-gray-300 rounded-b-lg shadow-lg p-4'>
                    <div>
                        <h2 className='text-justify text-purple-400 font-bold text-2xl'>{event.title}</h2>
                    </div>
                    <div className='text-justify text-gray-400 text-md pr-7'>{event.desc}</div>
                </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
    </div>
  )
}
