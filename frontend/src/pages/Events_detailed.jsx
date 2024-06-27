// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import ServicesSlider from '../components/ServicesSlider';


// const events = [
//     {id: 1, image: '/images/c1.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur" , date: "21/04/2024", time: "05:00"  },
//     {id: 2, image: '/images/c2.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur" , date: "21/04/2024", time: "05:00"   },
//     {id: 3, image: '/images/c3.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur"  , date: "21/04/2024", time: "05:00"  },
//     {id: 4, image: '/images/c4.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur"  , date: "21/04/2024", time: "05:00"  },
//     {id: 5, image: '/images/c5.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur"  , date: "21/04/2024", time: "05:00"  },
//   ]

// export default function Events_detailed() {
//     const { index } = useParams();
//     console.log(index);
//     const event = events ? events[parseInt(index)] : null;

//   return (
//     <>
//         <Navbar/>
        
//         <div className='my-10 mx-20 flex flex-col'> 
//             <div className='flex justify-center'>
//                 <h2 className="mb-2 mt-0 text-3xl text-[#5a72a7] font-medium leading-tight text-primary">{event.title}</h2>
//             </div>
//         </div>

//         <div className='flex flex-col justify-center mx-[20vw] mb-[10vh] p-[10vh] border border-1 shadow-lg '>
//             <div className='flex justify-center bg-purple-400 '>
//                 <img className='w-[50vw] h-[60vh] p-[5vh]' src={event.image} alt="" />
//             </div>
//             <div className='flex justify-center my-[5vh] mx-[3vw] gap-9'>
//                 <div>
//                     <p className='font-bold text-lg mb-2'>Description</p>
//                     <p>{event.desc}</p>
//                 </div>
//                 <div>
//                     <p className='font-bold text-lg mb-2'>Date</p>
//                     <p>{event.date}</p>
//                 </div>
//                 <div>
//                     <p className='font-bold text-lg mb-2'>Time</p>
//                     <p>{event.time}</p>
//                 </div>
            
//             </div>
//         </div>

//         <div className='mt-10 mx-20 flex justify-between'> 
//         <div>
//         <h4 class="mb-2 mt-0 text-xl text-[#4a5e88] font-medium leading-tight text-primary">Other events</h4>
//         <p class="mb-2 mt-0 text-base text-[#978982] font-normal leading-tight text-primary">Explore through our various events</p>
//         </div>
//         <div>
//           <button>
//             <a href="/events">View All</a>
//           </button>
//         </div>
//         </div>
        
//         <ServicesSlider service_data={events} />

//         <Footer/>
//     </>
//   );
// }


/* {<h1>Event Details {index}</h1>
      
      <div>
        <h2>{event.title}</h2>
        <p>{event.desc}</p>
        <img src={event.image} alt={event.title} />
        
      </div>} */

  import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSlider from '../components/ServicesSlider';

export default function Events_detailed() {
    // const url = new URL(window.location.href); // Create a URL object from the current URL
    // const pathname = url.pathname; // Get the pathname from the URL

    // // Normalize the pathname by removing any trailing slashes
    // const normalizedPathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    
    // // Split the normalized pathname by '/' to extract the last part, which should be the ID
    // const parts = normalizedPathname.split('/');
    // const _id = parts[parts.length - 1]; 
    const { id } = useParams();
    console.log("ID:",id);
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                // const response = await axios.get(`http://localhost:9999/event/${id}`);
                const response = await axios.get(
                  `https://krsnaverse-api.vercel.app//event/${id}`
                );
                setEvent(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching event:', error);
                setLoading(false);
            }
        };

        fetchEvent();
    }, [id]);

    return (
        <>
            <Navbar/>
            
            {loading ? (
                <div>Loading...</div>
            ) : event ? (
                <div className='my-10 mx-20 flex flex-col'> 
                    <div className='flex justify-center'>
                        <h2 className="mb-2 mt-0 text-3xl text-[#5a72a7] font-medium leading-tight text-primary">{event.title}</h2>
                    </div>
                </div>
            ) : (
                <div>Event not found</div>
            )}

            {/* Render event details once fetched */}
            {event && (
                <div className='flex flex-col justify-center mx-[20vw] mb-[10vh] p-[10vh] border border-1 shadow-lg '>
                    <div className='flex justify-center bg-purple-400 '>
                        <img className='w-[50vw] h-[60vh] p-[5vh]' src={event.image} alt="" />
                    </div>
                    <div className='flex justify-center my-[5vh] mx-[3vw] gap-9'>
                        <div>
                            <p className='font-bold text-lg mb-2'>Description</p>
                            <p>{event.description}</p>
                        </div>
                        <div>
                            <p className='font-bold text-lg mb-2'>Date</p>
                            <p>{new Date(event.date).toLocaleDateString()}</p>
                        </div>
                        <div>
                            <p className='font-bold text-lg mb-2'>Time</p>
                            <p>{event.time}</p>
                        </div>
                    </div>
                </div>
            )}

            <div className='mt-10 mx-20 flex justify-between'> 
                <div>
                    <h4 className="mb-2 mt-0 text-xl text-[#4a5e88] font-medium leading-tight text-primary">Other events</h4>
                    <p className="mb-2 mt-0 text-base text-[#978982] font-normal leading-tight text-primary">Explore through our various events</p>
                </div>
                <div>
                    <button>
                        <a href="/events">View All</a>
                    </button>
                </div>
            </div>
            
            <ServicesSlider service_data={event ? [event] : []} /> {/* Pass the current event as an array to ServicesSlider */}

            <Footer/>
        </>
    );
};
