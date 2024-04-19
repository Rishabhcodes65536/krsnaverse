import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Card_slider from '../components/Card_slider'
import Footer from '../components/Footer'
import Donate_us from '../components/Donate_us'
import ServicesSlider from '../components/ServicesSlider'
// import Dropdown from '../components/Dropdown'

export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* <Dropdown/> */}
      <Carousel/>
      <div className='mt-10 mx-20 flex justify-between'> 
        <div>
        <h4 class="mb-2 mt-0 text-xl text-[#4a5e88] font-medium leading-tight text-primary">Explore Isckon</h4>
        </div>
        <div>
          <button>
            <a href="/">View All</a>
          </button>
        </div>
      </div>
      <Card_slider/>

      <div className='mt-10 mx-20 flex justify-between'> 
        <div>
        <h4 class="mb-2 mt-0 text-xl text-[#4a5e88] font-medium leading-tight text-primary">20+ Services</h4>
        <p class="mb-2 mt-0 text-base text-[#978982] font-normal leading-tight text-primary">Explore through our various services</p>
        </div>
        <div>
          <button>
            <a href="/">View All</a>
          </button>
        </div>
      </div>
      <ServicesSlider/>
      
      <div className='mt-10 mx-20 flex justify-between'> 
        <div>
        <h4 class="mb-2 mt-0 text-xl text-[#4a5e88] font-medium leading-tight text-primary">Donate Us</h4>
        </div>
        <div>
          <button>
            <a href="/">View All</a>
          </button>
        </div>
      </div>
      <Donate_us/>
      <Footer/>
    </div>
  )
}
