import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Travel_card from '../components/Travel_card'


const travels = [
  {image: '/images/c1.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Tour 1" },
  {image: '/images/c2.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Tour 2"  },
  {image: '/images/c3.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Tour 3"  },
  {image: '/images/c4.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Tour 4"  },
  {image: '/images/c5.jpeg', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati assumenda accusamus dicta expedita officiis, quam harum aut magni nam?", title: "Tour 5"  },
]

export default function Travels() { 
  return (
    <div>
    <Navbar/>
        <div className='text-4xl mx-[40vw] text-[#5a72a7] flex justify-center my-10 font-bold '>
            <h2>Travels</h2>
        </div>
        <div>
          <Travel_card travels = {travels}/>
        </div>
    <Footer/>
    </div>
  )
}
