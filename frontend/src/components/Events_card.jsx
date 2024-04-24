// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Events_card({ events }) {
//   // console.log("Array :" , events) ;
//   return (
//     <div>
//       <div className='mb-[10vh]'> 
//         <ul className="flex flex-wrap justify-evenly">
//           {events.map((event, index) => (
//             <li 
//               className='flex flex-col w-[30%] mx-2 mb-8' 
//               key={index}
//             >
//               {/* <Link to={{ pathname: `/events_detailed/${index}`, state: { events } }} className="block"> */}
//               <Link to={`/events_detailed/${index}`} state={{ some: "value" }}  className="block">
//               <div className='flex justify-center border border-gray-300 rounded-t-lg'>
//                 <img className='h-[40vh] w-full border rounded-t-lg' src={event.image} alt="" />
//               </div>
//               <div className='flex flex-col space-y-2 border border-gray-300 rounded-b-lg shadow-lg p-4'>
//                 <div>
//                   <h2 className='text-justify text-purple-400 font-bold text-2xl'>{event.title}</h2>
//                 </div>
//                 <div className='text-justify text-gray-400 text-md pr-7'>{event.desc}</div>
//               </div>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import { Link } from 'react-router-dom';

export default function Events_card({ events }) {
  return (
    <div className='mb-[10vh]'> 
      <ul className="flex flex-wrap justify-evenly">
        {events.map((event) => (
          <li className='flex flex-col w-[30%] mx-2 mb-8' key={event._id}>
            <Link to={`/events_detailed/${event._id}`} className="block">
              <div className='flex justify-center border border-gray-300 rounded-t-lg'>
                <img className='h-[40vh] w-full border rounded-t-lg' src={event.image} alt={event.title} />
              </div>
              <div className='flex flex-col space-y-2 border border-gray-300 rounded-b-lg shadow-lg p-4'>
                <div>
                  <h2 className='text-justify text-purple-400 font-bold text-2xl'>{event.title}</h2>
                </div>
                <div className='text-justify text-gray-400 text-md pr-7'>{event.description}</div>
                <div className='text-justify text-gray-400 text-md pr-7'>Location: {event.location}</div>
                <div className='text-justify text-gray-400 text-md pr-7'>Date: {new Date(event.date).toLocaleDateString()}</div>
                <div className='text-justify text-gray-400 text-md pr-7'>Time: {event.time}</div>
                <div className='text-justify text-gray-400 text-md pr-7'>Fees: ${event.fees}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
