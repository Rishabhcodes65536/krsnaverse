// import React from 'react';

// export default function Travel_card({ travels }) {
//   return (
//     <div className='mb-20'>
//       {travels.map((travel, index) => (
//         <div key={index} className={`grid grid-cols-1 md:grid-cols-2 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} md:mx-6`}>
//           <div className={`bg-white ] flex justify-center items-center  ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
//             <a href="/">
//               <img src={travel.image} className="w-[40vw] h-[50vh] border rounded-xl shadow-lg" alt="" />
//             </a>
//           </div>
//           <div className={`md:order-first bg-gray-100 p-12 md:p-24 flex justify-end items-center ${index % 2 !== 0 ? '' : 'md:order-last'}`}>
//             <div className="max-w-md">
//               <div className="w-24 h-2 bg-yellow-800 mb-4"></div>
//               <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">{travel.title}</h2>
//               <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
//                 {travel.description}
//               </p>
//               <a href="/" className="inline-block border-2 border-yellow-800 font-light text-yellow-800 text-sm uppercase tracking-widest py-3 px-8 hover:bg-yellow-800 hover:text-white">Pay Now</a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React from 'react';

import { ReactComponent as LocationIcon } from '../icons/location-icon.svg';
import { ReactComponent as CalendarIcon } from '../icons/calendar-icon.svg';
import { ReactComponent as RupeeIcon } from '../icons/rupee-icon.svg';


export default function Travel_card({ travels }) {
  return (
    <div className='mb-20'>
      {travels.map((travel, index) => (
        <div key={index} className={`grid grid-cols-1 md:grid-cols-2 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} md:mx-6`}>
          <div className={`bg-white flex justify-center items-center ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
            <a href="/">
              <img src={travel.image} className="w-[40vw] h-[50vh] border rounded-xl shadow-lg" alt="" />
            </a>
          </div>
          <div className={`md:order-first bg-gray-100 p-12 md:p-24 flex justify-end items-center ${index % 2 !== 0 ? '' : 'md:order-last'}`}>
            <div className="max-w-md">
              <div className="w-24 h-2 bg-yellow-800 mb-4"></div>
              <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">{travel.title}</h2>
              <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                {travel.description}
              </p>
              <div className="flex items-center mb-6">
                <LocationIcon className="h-6 w-6 text-gray-500 mr-2" />
                <p className="text-gray-600 text-sm">{travel.location}</p>
              </div>
              <div className="flex items-center mb-6">
                <CalendarIcon className="h-6 w-6 text-gray-500 mr-2" />
                <p className="text-gray-600 text-sm">{new Date(travel.startDate).toLocaleDateString()} - {new Date(travel.endDate).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center mb-6">
                <RupeeIcon className="h-6 w-6 text-gray-500 mr-2" />
                <p className="text-gray-600 text-sm">{travel.fees} Rupees</p>
              </div>
              <a href="/" className="inline-block border-2 border-yellow-800 font-light text-yellow-800 text-sm uppercase tracking-widest py-3 px-8 hover:bg-yellow-800 hover:text-white">Pay Now</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
