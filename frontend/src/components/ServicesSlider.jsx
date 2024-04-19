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

export default function ServicesSlider() {
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
                                class="block max-w-[18rem] bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                                <div class=" border rounded-full overflow-hidden bg-cover bg-no-repeat">
                                    <img
                                        class="rounded-t-xl"
                                        src={d.img}
                                        alt=""
                                    />
                                </div>
                                <div class="p-6 flex justify-center">
                                    <p class=" text-[#7e8daa] text-md font-bold">
                                        {d.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};
