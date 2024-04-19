import React from 'react';
import styled from 'styled-components';
import { FaPowerOff , FaRegBell } from "react-icons/fa";
import Dropdown from './Dropdown';

export default function Navbar() {


  const isckon = [
    { label: 'About Us', link: '/' },
    { label: 'The History', link: '/' },
    { label: 'Philosophy', link: '/' },
    { label: 'Founder', link: '/' },
    { label: 'Why this krishna consciousness movement', link: '/' },
  ];
  const services = [
    { label: 'Music and Meditate', link: '/music' },
    { label: 'Web Design', link: '/' },
    { label: 'Machine Learning', link: '/' },
  ];

  return (
    <Container>
      <nav className="flex justify-between px-20 py-10 items-center bg-white">
        <h1 className="text-xl text-gray-800 font-bold">Krsnaverse</h1>
        <div className="flex items-center">
          
          <ul className="flex items-center space-x-6">
          <li className="font-semibold text-gray-700">
              <a href="/">Home</a>
            </li>
            <Dropdown name="ISCKON" items={isckon} />
            <li className="font-semibold text-gray-700">
              <a href="/travels">Travels</a>
            </li>
            <li className="font-semibold text-gray-700">
              <a href="/events">Events</a>
            </li>
            <Dropdown name="Services" items={services} />
            <li>
              <FaRegBell className="h-6 w-6" />
            </li>
            <li>
              <a href="/login" > <FaPowerOff className="h-6 w-6" /> </a>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  );
};

const Container = styled.div`
    
`;
