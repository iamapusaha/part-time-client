// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';


const Testimonial = () => {
    return (
        <div className='my-7 fontcolor'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        'background-image':
                            'url(https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        John Doe
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        CEO of Tech Innovations
                    </div>
                    <div className="text fontcolor background" data-swiper-parallax="-100">
                        <p>
                            recently shared his insightful review about our marketplace. He enthusiastically stated, “This platform is a phenomenal game-changer in the digital marketplace landscape. It seamlessly bridges the gap between sellers and buyers, reminiscent of renowned platforms like Fiverr and Upwork. The service quality is consistently top-notch, making it an indispensable tool for both sellers seeking to showcase their skills and buyers looking for quality work. The user-friendly interface, coupled with a wide array of services, makes it a go-to marketplace for all. I am genuinely impressed by the efficiency and professionalism this platform offers.” His words truly encapsulate the essence of our marketplace
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Jane Smith
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        the renowned founder of Creative Solutions
                    </div>
                    <div className="text fontcolor background" data-swiper-parallax="-100">
                        <p>
                            also shared her thoughts about our marketplace. She expressed, “This platform is truly a revelation in the digital world. It’s a vibrant marketplace that reminds me of Fiverr and Upwork, but with its unique charm. The quality of service is exceptional, providing a reliable space for sellers to connect with potential buyers. The diversity of skills available is impressive, catering to a wide range of needs. The platform’s commitment to user satisfaction is evident in its intuitive design and efficient operation. It’s a marketplace that stands out for its quality, diversity, and user-friendliness. I highly recommend it to anyone seeking professional services online.” Her endorsement further validates the quality and reliability of our platform
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title " data-swiper-parallax="-300">
                        Alex Johnson
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        he visionary Director of NextGen Tech
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p className='fontcolor background '>
                            also had some words to share about our marketplace. He stated, “This platform is a breath of fresh air in the digital marketplace scene. It’s reminiscent of platforms like Fiverr and Upwork, but it brings its own unique flair to the table. The service quality is unparalleled, providing a trustworthy environment for sellers to engage with prospective buyers. The variety of services on offer is commendable, catering to a broad spectrum of requirements. The platform’s dedication to user satisfaction is evident in its user-friendly design and efficient functionality. It’s a marketplace that distinguishes itself through its commitment to quality, diversity, and ease of use. I wholeheartedly endorse it to anyone in search of professional services online.” His endorsement further attests to the quality and dependability of our platform.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial;