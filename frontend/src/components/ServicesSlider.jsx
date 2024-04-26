// import React from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";



// export default function ServicesSlider( {service_data}) {
//     var settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3.5,
//         slidesToScroll: 1,
//         autoplay: true,
//         draggable: true,
//         // focusOnSelect: true,
//         // pauseOnFocus: true,
//         swipeToSlide: true,
//     };
//     return (
//         <div>
//             <div className="w-10/12 m-auto mb-20">
//                 <div className="mt-10 ">
//                     <Slider {...settings}>
//                         {service_data.map((d) => (
//                             <div
//                                 class="block max-w-[18rem] bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
//                                 <div class=" border rounded-full overflow-hidden bg-cover bg-no-repeat">
//                                     <img
//                                         class="rounded-t-xl w-full h-[25vh]"
//                                         src={d.image}
//                                         alt=""
//                                     />
//                                 </div>
//                                 <div class="p-6 flex justify-center">
//                                     <p class=" text-[#7e8daa] text-md font-bold">
//                                         {d.desc}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//         </div>
//     );
// };


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ServicesSlider({ service_data }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        // draggable: true,
        swipeToSlide: true,
    };

    return (
        <div className="w-full m-auto mb-20">
            <div className="mt-10 ">
                <Slider {...settings}>
                    {service_data &&
                        service_data.map((d) => (
                            <div
                                key={d._id}
                                className="block max-w-[30rem] text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white"
                            >
                                <div className=" flex justify-center  bg-purple-100 items-center border rounded-full overflow-hidden bg-cover bg-no-repeat w-[20vw] h-[30vh]">
                                    {d.image && (
                                        <img
                                            className="rounded-t-xl w-[8vw] h-[15vh]"
                                            src={d.image}
                                            alt=""
                                        />
                                    )}
                                </div>
                                <div className="p-6 flex justify-center">
                                    <p className="text-[#7e8daa] text-md font-bold">
                                        {d.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </div>
    );
}
