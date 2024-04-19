import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
    {
        description: `Visitor Facility`,
        img: `/images/c1.jpeg`
    },
    {
        description: `Visitor Facility`,
        img: `/images/c1.jpeg`
    },
    {
        description: `Visitor Facility`,
        img: `/images/c1.jpeg`
    },
    {
        description: `Visitor Facility`,
        img: `/images/c1.jpeg`
    },
    {
        description: `Visitor Facility`,
        img: `/images/c1.jpeg`
    },
    {
        description: `Visitor Facility`,
        img: `/images/c1.jpeg`
    },
];

export default function Donate_us() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        autoplay: true,
        draggable: true,
        focusOnSelect: true,
        pauseOnFocus: true,
        swipeToSlide: true,
    };
    return (
        <div>
            <div className="w-10/12 m-auto mb-20">
                <div className="mt-10 ">
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div
                                class="block max-w-[18rem]  rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                                <div class="relative overflow-hidden bg-cover bg-no-repeat">
                                    <img
                                        class="rounded-t-lg"
                                        src={d.img}
                                        alt=""
                                    />
                                </div>
                                <div class="p-6">
                                    <p class="text-black">
                                        {d.description}
                                    </p>
                                </div>
                                <div>
                                <button type="button" class="w-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};
