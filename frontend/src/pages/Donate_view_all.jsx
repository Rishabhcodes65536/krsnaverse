import React from 'react'
import View_All from '../components/View_All';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';




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
export default function Donate_view_all() {
  return (
    <div>
        <Navbar/>
        <View_All data = {donate_data} title = "Donation" />
        <Footer/>
    </div>
  )
}
