import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPowerOff, FaRegBell, FaTimes } from "react-icons/fa"; // Import FaTimes for delete icon
import Dropdown from './Dropdown';

const notification_data = [
  {
    id: 1,
    description: `Vaishnava Calendar`,
    img: `/images/vaishnana-calendar.jpg`
  },
  {
    id: 2,
    description: `Visitor Facility`,
    img: `/images/visitor_facility.jpeg`
  },
  {
    id: 3,
    description: `Safety Tips`,
    img: `/images/safety_tips.jpeg`
  },
  {
    id: 4,
    description: `Holy Dham`,
    img: `/images/holy_dham.jpg`
  },
  {
    id: 5,
    description: `Guest Booking`,
    img: `/images/guest_booking.jpg`
  },
  {
    id: 6,
    description: `Dining Facility`,
    img: `/images/dining.jpeg`
  },
];

export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(notification_data);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const deleteNotification = (id) => {
    const updatedNotifications = notifications.filter(notification => notification.id !== id);
    setNotifications(updatedNotifications);
  };

  const isckon = [
    { label: 'About Us', link: '/' },
    { label: 'The History', link: '/' },
    { label: 'Philosophy', link: '/' },
    { label: 'Founder', link: '/' },
    { label: 'Why this krishna consciousness movement', link: '/' },
  ];

  const services = [
    { label: 'Music and Meditate', link: '/music' },
    { label: 'Shop', link: '/shop' },
    { label: 'Machine Learning', link: '/' },
  ];

  const totalNotifications = notifications.length;

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
              <div className="relative" onMouseEnter={toggleNotifications} onMouseLeave={toggleNotifications}>
                <FaRegBell className="h-6 w-6 cursor-pointer" />
                {totalNotifications > 0 && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {totalNotifications}
                  </div>
                )}
                {showNotifications && (
                  <div className="notification-section absolute right-0 top-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 w-[40vw] h-[60vh] overflow-y-auto flex flex-col">
                    <h2 className="text-lg font-bold mb-4">Notifications</h2>
                    {notifications.map((notification, index) => (
                      <div key={notification.id} className="bg-gray-100 p-4 rounded-lg mb-4 flex justify-between items-center">
                        <div className="flex">
                          <img src={notification.img} alt={notification.description} className="w-20 h-20 object-cover rounded-lg mr-4" />
                          <p className="text-gray-700">{notification.description}</p>
                        </div>
                        <FaTimes className="text-red-500 cursor-pointer" onClick={() => deleteNotification(notification.id)} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </li>
            <li>
              <a href="/login"><FaPowerOff className="h-6 w-6" /></a>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  );
};

const Container = styled.div`
    
`;
