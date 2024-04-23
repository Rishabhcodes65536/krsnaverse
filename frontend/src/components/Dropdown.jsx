import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

export default function Dropdown({ name, items }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <li className="relative parent" onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuClose}>
        <button className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2">
          <span className="font-semibold text-gray-700">{name}</span>
          <FaAngleDown className="w-4 h-6 fill-current pt-1" />
        </button>
        <ul className={`${isMenuOpen ? 'absolute' : 'hidden'} w-full child transition duration-300   md:w-[10rem] bg-white md:shadow-lg md:rounded-b z-10 flex-col `}>
          {items.map((item, index) => (
            <li key={index} className=" border border-gray-500 hover:border-blue-500 focus:border-green-500">
              <a href={item.link} className="flex px-4 py-3 hover:bg-gray-50  justify-center">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* <ul className={`${isMenuOpen ? 'block' : 'hidden'} w-full child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b z-10 flex flex-wrap `}>
          {items.map((item, index) => (
            <li key={index} className=" md:w-1/2 border border-gray-500 hover:border-blue-500 focus:border-green-500">
              <a href={item.link} className="flex px-4 py-3 hover:bg-gray-50 w-full justify-center">
                {item.label}
              </a>
            </li>
          ))}
        </ul> */}
      </li>
    </div>
  );
}
