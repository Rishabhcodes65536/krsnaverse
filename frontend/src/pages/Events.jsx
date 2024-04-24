// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import Events_card from '../components/Events_card'

// const events = [
//   {id: 1, image: '/images/c1.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur" , date: "21/04/2024", time: "05:00"  },
//   {id: 2, image: '/images/c2.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur" , date: "21/04/2024", time: "05:00"   },
//   {id: 3, image: '/images/c3.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur"  , date: "21/04/2024", time: "05:00"  },
//   {id: 4, image: '/images/c4.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur"  , date: "21/04/2024", time: "05:00"  },
//   {id: 5, image: '/images/c5.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur"  , date: "21/04/2024", time: "05:00"  },
// ]

// export default function Events() {
//   return (
//     <div>
//         <Navbar/>
//         <div className='text-4xl mx-[40vw] text-[#5a72a7] flex justify-center my-10 font-bold '>
//             <h2 className="" >Events</h2>
//         </div>
//         <Events_card events = {events} />
//         <Footer/>
//     </div>
//   )
// }
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Events_card from '../components/Events_card';
import axios from 'axios';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:9999/event');
        // response.data.date=response.data.date.toString();
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='text-4xl mx-[40vw] text-[#5a72a7] flex justify-center my-10 font-bold '>
        <h2 className="">Events</h2>
      </div>
      <Events_card events={events} />
      <Footer />
    </div>
  );
}

