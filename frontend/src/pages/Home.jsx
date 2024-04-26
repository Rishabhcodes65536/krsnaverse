import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Card_slider from '../components/Card_slider'
import Footer from '../components/Footer'
import Donate_us from '../components/Donate_us'
import ServicesSlider from '../components/ServicesSlider'
// import Dropdown from '../components/Dropdown'

const service_data = [
  {
      desc: `Simple Living`,
      image: `/images/cow.png`
  },
  {
      desc: `Community Service Centre`,
      image: `/images/service1.svg`
  },
  {
      desc: `Gomata Product`,
      image: `/images/service2.svg`
  },
  {
      desc: `ISCKON Youth Forum`,
      image: `/images/service3.svg`
  },
  {
      desc: `Govinda Restaurant`,
      image: `/images/service4.svg`
  },
  {
      desc: `Srila Prabhupad Samadhi`,
      image: `/images/service5.svg`
  },
];
const explore_data = [
  {
      description: `Vaishnava Calendar`,
      img: `/images/vaishnana-calendar.jpg`
  },
  {
      description: `Visitor Facility`,
      img: `/images/visitor_facility.jpeg`
  },
  {
      description: `Safety Tips`,
      img: `/images/safety_tips.jpeg`
  },
  {
      description: `Holy Dham`,
      img: `/images/holy_dham.jpg`
  },
  {
      description: `Guest Booking`,
      img: `/images/guest_booking.jpg`
  },
  {
      description: `Dining Facility`,
      img: `/images/dining.jpeg`
  },
];


const donate_data = [
  {
      description: `24 Hours Kirtan`,
      img: `/images/donate/hr_24_kirtan.jpg`
  },
  {
      description: `Akshaya Tritya`,
      img: `/images/donate/Akshaya_tritya.jpg`
  },
  {
      description: `Anna Daan`,
      img: `/images/donate/Anna_daan.jpg`
  },
  {
      description: `Best To Place Donate`,
      img: `/images/donate/best_place_to_donate.jpeg`
  },
  {
      description: `Bhaktivedanta Swami Gosha`,
      img: `/images/donate/bhaktivedanta-swami-gosha.png`
  },
  {
      description: `Cow Service`,
      img: `/images/donate/cow_service.jpg`
  },
  {
      description: `Foreign`,
      img: `/images/donate/foreign.jpg`
  },
  {
      description: `Naivaidyam Seva`,
      img: `/images/donate/naivaidyam_seva.jpg`
  },
  {
      description: `Online Book Distribution`,
      img: `/images/donate/online_book_distribution.jpg`
  },
  {
      description: `Temple Donation`,
      img: `/images/donate/temple_donation.jpg`
  },
  {
      description: `Vaishnav Bhojan`,
      img: `/images/donate/vaishnav_bhojan.jpg`
  },
  {
      description: `Varuthini Ekadashi`,
      img: `/images/donate/varuthini_ekadashi.jpg`
  },
  {
      description: `Vigrah Seva`,
      img: `/images/donate/vigrah_seva.jpeg`
  },

];

export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* <Dropdown/> */}
      <Carousel/>
      <div className='mt-20 mx-20 flex justify-between'> 
        <div>
        <h4 class="mb-2 mt-0 text-2xl text-[#4a5e88] font-medium leading-tight text-primary">Explore Isckon</h4>
        </div>
        <div>
        
            <a href="/donate_view_all" className='border rounded-full bg-purple-300 px-4 py-3'>View All</a>
          
        </div>
      </div>
      <Card_slider explore_data = {explore_data} />

      <div className='mt-10 mx-20'>
        <div className=' flex justify-between'> 
          <div>
          <h4 class="mb-2 mt-0 text-2xl text-[#4a5e88] font-medium leading-tight text-primary">20+ Services</h4>
          <p class="mb-2 mt-0 text-base text-[#978982] font-normal leading-tight text-primary">Explore through our various services</p>
          </div>
          <div>
            <a href="/donate_view_all" className='border rounded-full bg-purple-300 px-4 py-3'>View All</a>
          </div>
        </div>
        <ServicesSlider service_data={service_data}/>
      </div>
      
      <div className='mt-10 mx-20'>
        <div className=' flex justify-between'> 
          <div>
          <h4 class="mb-2 mt-0 text-2xl text-[#4a5e88] font-medium leading-tight text-primary">Donate Us</h4>
          </div>
          <div>
            <a href="/donate_view_all" className='border rounded-full bg-purple-300 px-4 py-3'>View All</a>
          </div>
        </div>
      </div>
      <Donate_us data = {donate_data}/>
      <Footer/>
    </div>
  )
}



