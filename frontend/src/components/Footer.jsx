import React from 'react';
import { FiTwitter, FiInstagram } from 'react-icons/fi'; // Import Twitter and Instagram icons
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'; // Import Email, Phone, and LocationOn icons
import { FaYoutube, FaFacebook } from 'react-icons/fa'; // Import YouTube and Facebook icons

export default function Footer() {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          {/* Company Name section */}
          <div className="p-5">
            <h3 className="font-bold text-xl text-indigo-600">Company Name</h3>
          </div>
          {/* Resources section */}
          <div className="p-5">
            <div className="text-sm uppercase text-indigo-600 font-bold">Resources</div>
            <a className="my-3 block" href="/#">Documentation <span className="text-teal-600 text-xs p-1"></span></a>
            <a className="my-3 block" href="/#">Tutorials <span className="text-teal-600 text-xs p-1"></span></a>
            <a className="my-3 block" href="/#">Support <span className="text-teal-600 text-xs p-1">New</span></a>
          </div>
          {/* Support section */}
          <div className="p-5">
            <div className="text-sm uppercase text-indigo-600 font-bold">Support</div>
            <a className="my-3 block" href="/#">Help Center <span className="text-teal-600 text-xs p-1"></span></a>
            <a className="my-3 block" href="/#">Privacy Policy <span className="text-teal-600 text-xs p-1"></span></a>
            <a className="my-3 block" href="/#">Conditions <span className="text-teal-600 text-xs p-1"></span></a>
          </div>
          {/* Contact us section */}
          <div className="p-5">
            <div className="text-sm uppercase text-indigo-600 font-bold">Contact us</div>
            <p className="my-3 block flex items-center"><MdLocationOn className="mr-2" /> ISKCON Vrindavan, Krishna Balaram Mandir <br /> Bhaktivedanta Swami Marg, Raman Reti, <br /> Vrindavan, Uttar Pradesh-281121, India</p>
            <p className="my-3 block flex items-center"><MdPhone className="mr-2" /> Contact us: +917618183108</p>
            <p className="my-3 block flex items-center"><MdEmail className="mr-2" /> Email: info@iskconvrindavan.com</p>
          </div>
        </div>
      </div>
      
      {/* Social media icons section */}
      <div className="bg-gray-100 pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex gap-4">
            <a href="/#" className="w-6 mx-1">
              <FiTwitter className="fill-current cursor-pointer hover:color" color="#1DA1F2" size={32} />
            </a>
            <a href="/#" className="w-6 mx-1">
              <FiInstagram className="fill-current cursor-pointer hover:color" color="#C13584" size={32} />
            </a>
            <a href="/#" className="w-6 mx-1">
              <FaFacebook className="fill-current cursor-pointer text-blue-600 hover:text-blue-800" size={32} />
            </a>
            <a href="/#" className="w-6 mx-1">
              <FaYoutube className="fill-current cursor-pointer text-red-600 hover:text-red-800" size={32} />
            </a>
            <a href="/#" className="w-6 mx-1">
              <MdEmail className="fill-current cursor-pointer text-red-600 hover:text-red-800" size={32} />
            </a>
          </div>
          <div className="my-5">© Copyright 2020. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
}
