import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Music_carousel from '../components/Music_carousel';
import Footer from '../components/Footer';
import Music_card from '../components/Music_card';

export default function Music_meditate() {


  const images = [
    'https://www.youtube.com/embed/vw7mFNsVeY8?si=MmewcjG9iZ1Yn60_',
    'https://www.youtube.com/embed/1lmdaCdujhg?si=9TBfLTA-YrIevyOU',
    'https://www.youtube.com/embed/r6WBtDnLxwM?si=W5g33HNoOEWgIj57',
    'https://www.youtube.com/embed/gdZ7iJS4QmU?si=S-jwK6WkZxe_4-cX',
    'https://www.youtube.com/embed/x0At8E6ANno?si=m1TmZnJpATb3UR2x',
  ];

  const musics = [
    {image: 'vw7mFNsVeY8', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur" },
    {image: '1lmdaCdujhg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur"  },
    {image: '1lmdaCdujhg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur"  },
    {image: '1lmdaCdujhg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur"  },
    {image: '1lmdaCdujhg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur"  },
  ]

  return (
    <>
    <Navbar/>
    
    <div className='my-10 mx-20 flex flex-col'> 
        <div className='flex justify-center'>
            <h2 className="mb-2 mt-0 text-3xl text-[#5a72a7] font-medium leading-tight text-primary">Meditate to Music</h2>
        </div>
    </div>

    <Music_carousel images = {images} />
    
    <div className='mt-20 mx-20 flex flex-col mb-9  '> 
        <div className='flex justify-center'>
            <h2 className="mb-2 mt-0 text-3xl text-[#5a72a7] font-medium leading-tight text-primary">Meditate to Music</h2>
        </div>
        <div className='flex justify-end'>
          <button>
            <a href="/">View All</a>
          </button>
        </div>
    </div>
    <Music_card musics = {musics} />
    {/* <div className='mb-10'>
        <ul className='mx-12 space-y-2'>
            <li className='relative h-8 border bg-purple-400'>
                <div>
                    <img className='absolute' src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                </div>
                <div>
                    <div>Lorem ipsum dolor sit amet.</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quod, nulla quidem provident similique quis.</div>
                </div>
            </li>
            <li className='h-8 border bg-purple-400'></li>
            <li className='h-8 border bg-purple-400'></li>
            <li className='h-8 border bg-purple-400'></li>
        </ul>
    </div> */}

    <Footer/>
    </>
  );
};
