import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="text-4xl mx-[40vw] text-[#5a72a7] flex justify-center my-10 font-bold">
        <h2>Contact Us</h2>
      </div>
      <div className="flex flex-col items-center justify-center my-10">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <p className="text-lg font-semibold text-[#5a72a7] mb-4">Address:</p>
          <p className="text-gray-700 mb-6">
            ISKCON Vrindavan, Krishna Balaram Mandir <br />
            Bhaktivedanta Swami Marg, Raman Reti, <br />
            Vrindavan, Uttar Pradesh-281121, India
          </p>
          <p className="text-lg font-semibold text-[#5a72a7] mb-4">Contact Details:</p>
          <p className="text-gray-700">
            Contact us: +917618183108 <br />
            Email: info@iskconvrindavan.com
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
