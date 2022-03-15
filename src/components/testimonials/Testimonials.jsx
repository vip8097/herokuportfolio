import React from 'react';
import './testimonials.css';
import AVT1 from '../../assets/avtar1.jpg'
import AVT2 from '../../assets/avtar2.jpg'
import AVT3 from '../../assets/avtar3.jpg'
import AVT4 from '../../assets/avtar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVT1,
    name: 'Vip',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in sagittis orci,et lobortis quam.Nulla et orci at turpis cursus elementum.'
  },
  {
    avatar: AVT2,
    name: 'Rakesh',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in sagittis orci,et lobortis quam. Nulla et orci at turpis cursus elementum.'
  },
  {
    avatar: AVT3,
    name: 'Jon',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in sagittis orci,et lobortis quam. Nulla et orci at turpis cursus elementum.'
  },
  {
    avatar: AVT4,
    name: 'Jojesh',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in sagittis orci,et lobortis quam. Nulla et orci at turpis cursus elementum.'
  },

];

const Testimonials = () => {
  return (
    <>
      <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials__container"
          // install Swiper modules
          modules={[ Pagination ]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {
            data.map(({ avatar, name, review }, index) => {
              return (
                <SwiperSlide key={index} className='testimonial'>
                  <div className="client__avatar">
                    <img src={avatar} />
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className="client__review">{review}</small>
                </SwiperSlide>
              )
            })
          }

        </Swiper>
      </section>
    </>
  );
};

export default Testimonials;
