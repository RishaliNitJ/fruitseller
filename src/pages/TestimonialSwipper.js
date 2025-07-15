import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import test1 from '../img/testimonial-1.jpg'
import item2 from '../img/fruite-item-2.jpg'
import item3 from '../img/fruite-item-3.jpg'
import item4 from '../img/fruite-item-4.jpg'
import item5 from '../img/fruite-item-5.jpg'

import './Home.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


function TestimonialSwipper() {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;
  
    const prepend2 = () => {
      swiperRef.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      ]);
    };
  
    const prepend = () => {
      swiperRef.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
      );
    };
  
    const append = () => {
      swiperRef.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
      );
    };
  
    const append2 = () => {
      swiperRef.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      ]);
    };
  
    return (
      <>
        <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="testimonial-item img-border-radius bg-light rounded p-4">
          <div className="position-relative">
            <i
              className="fa fa-quote-right fa-2x text-secondary position-absolute"
              style={{ bottom: 30, right: 0 }}
            />
            <div className="mb-4 pb-4 border-bottom border-secondary">
              <p className="mb-0">
              "I love the freshness and quality of the produce. The user-friendly website and prompt delivery have made me a loyal customer. Highly recommend!"
              </p>
            </div>
            <div className="d-flex align-items-center flex-nowrap">
              <div className="bg-secondary rounded">
                <img
                  src={`https://img.freepik.com/premium-photo/formal-girl_1003030-19974.jpg?w=740`}
                  className="img-fluid rounded"
                  style={{ width: 100, height: 100 }}
                  alt=""
                />
              </div>
              <div className="ms-4 d-block">
                <h4 className="text-dark">Emily Smith</h4>
                <p className="m-0 pb-3"> Graphic Designer</p>
                <div className="d-flex pe-5">
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonial-item img-border-radius bg-light rounded p-4">
          <div className="position-relative">
            <i
              className="fa fa-quote-right fa-2x text-secondary position-absolute"
              style={{ bottom: 30, right: 0 }}
            />
            <div className="mb-4 pb-4 border-bottom border-secondary">
              <p className="mb-0">
              "As a fitness coach, I emphasize the importance of fresh and organic produce to my clients. This store has never let me down in terms of quality and service."
              </p>
            </div>
            <div className="d-flex align-items-center flex-nowrap">
              <div className="bg-secondary rounded">
                <img
                  src={`https://img.freepik.com/premium-photo/handsome-corporate-man-closed-hand-smiling-solid-color-background_925414-13457.jpg?w=740`}
                  className="img-fluid rounded"
                  style={{ width: 100, height: 100 }}
                  alt=""
                />
              </div>
              <div className="ms-4 d-block">
                <h4 className="text-dark">Michael Johnson</h4>
                <p className="m-0 pb-3">Fitness Coach</p>
                <div className="d-flex pe-5">
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonial-item img-border-radius bg-light rounded p-4">
          <div className="position-relative">
            <i
              className="fa fa-quote-right fa-2x text-secondary position-absolute"
              style={{ bottom: 30, right: 0 }}
            />
            <div className="mb-4 pb-4 border-bottom border-secondary">
              <p className="mb-0">
              "The ingredients I get from here are always fresh and high-quality, which is crucial for my culinary creations. The prompt and reliable delivery service is a huge plus!"
              </p>
            </div>
            <div className="d-flex align-items-center flex-nowrap">
              <div className="bg-secondary rounded">
                <img
                  src={`https://img.freepik.com/premium-photo/smiling-successful-young-businesswoman-happy-pose_1077802-57641.jpg?w=740`}
                  className="img-fluid rounded"
                  style={{ width: 100, height: 100 }}
                  alt=""
                />
              </div>
              <div className="ms-4 d-block">
                <h4 className="text-dark">Sarah Williams</h4>
                <p className="m-0 pb-3">Chef</p>
                <div className="d-flex pe-5">
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonial-item img-border-radius bg-light rounded p-4">
          <div className="position-relative">
            <i
              className="fa fa-quote-right fa-2x text-secondary position-absolute"
              style={{ bottom: 30, right: 0 }}
            />
            <div className="mb-4 pb-4 border-bottom border-secondary">
              <p className="mb-0">
              "The quality and variety of products from this store have always exceeded our expectations. Their customer service is top-notch."
              </p>
            </div>
            <div className="d-flex align-items-center flex-nowrap">
              <div className="bg-secondary rounded">
                <img
                  src={`https://img.freepik.com/free-photo/business-man-curly-cute-handsome-guy-black-suit-close-up-smiling_140725-162638.jpg?t=st=1718022287~exp=1718025887~hmac=bcd738220b2c9e7f34c20604e54d848743f35f39519f5c4ecb372a2af6d1f70a&w=900`}
                  className="img-fluid rounded"
                  style={{ width: 100, height: 100 }}
                  alt=""
                />
              </div>
              <div className="ms-4 d-block">
                <h4 className="text-dark">John Doe</h4>
                <p className="m-0 pb-3"> Marketing Manager</p>
                <div className="d-flex pe-5">
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
         </Swiper>
    </>
  )
}

export default TestimonialSwipper
