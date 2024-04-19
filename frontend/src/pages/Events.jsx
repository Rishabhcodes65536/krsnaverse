import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Events_card from '../components/Events_card'

const events = [
    {image: '/images/c1.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur" },
    {image: '/images/c2.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur"  },
    {image: '/images/c3.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur"  },
    {image: '/images/c4.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur"  },
    {image: '/images/c5.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Lorem ipsum dolor sit amet consectetur"  },
  ]

export default function Events() {
  return (
    <div>
        <Navbar/>
        <div className='text-4xl mx-[40vw] text-[#5a72a7] flex justify-center my-10 font-bold '>
            <h2>Events</h2>
        </div>
        <Events_card events = {events} />
        <Footer/>
    </div>
  )
}
