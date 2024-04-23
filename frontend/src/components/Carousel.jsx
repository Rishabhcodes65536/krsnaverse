import React, { useEffect, useState } from 'react';

export default function Carousel() {
  const [currentItem, setCurrentItem] = useState(0);

  // Function to handle next item
  const nextItem = () => {
    setCurrentItem((prevItem) => (prevItem === 4 ? 0 : prevItem + 1));
  };

  // Function to handle previous item
  const prevItem = () => {
    setCurrentItem((prevItem) => (prevItem === 0 ? 4 : prevItem - 1));
  };

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      nextItem();
    }, 3000); // Change the interval as needed

    return () => {
      clearInterval(carouselInterval);
    };
  }, []);

  return (
    <div>
      <div id="animation-carousel" className="relative mx-20 border rounded-xl border-[] " data-carousel="static">
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* <!-- Item 1 --> */}
          <div className={`${currentItem === 0 ? 'block' : 'hidden'} duration-200 ease-linear`} data-carousel-item>
            <img src="images\c1.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* <!-- Item 2 --> */}
          <div className={`${currentItem === 1 ? 'block' : 'hidden'} duration-200 ease-linear`} data-carousel-item>
            <img src="images\c2.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* <!-- Item 3 --> */}
          <div className={`${currentItem === 2 ? 'block' : 'hidden'} duration-200 ease-linear`} data-carousel-item="active">
            <img src="images\c3.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* <!-- Item 4 --> */}
          <div className={`${currentItem === 3 ? 'block' : 'hidden'} duration-200 ease-linear`} data-carousel-item>
            <img src="images\c4.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* <!-- Item 5 --> */}
          <div className={`${currentItem === 4 ? 'block' : 'hidden'} duration-200 ease-linear`} data-carousel-item>
            <img src="images\c5.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
        </div>
        {/* <!-- Slider controls --> */}
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={prevItem}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={nextItem}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
