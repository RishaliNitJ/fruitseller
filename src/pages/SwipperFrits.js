import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import item1 from '../img/fruite-item-1.jpg'
import item2 from '../img/fruite-item-2.jpg'
import item3 from '../img/fruite-item-3.jpg'
import item4 from '../img/fruite-item-4.jpg'
import item5 from '../img/fruite-item-5.jpg'

import './Home.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import VegCard from './VegCard';

function SwipperFrits() {
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
          <VegCard
            id={"130"}
            image={`https://img.freepik.com/premium-photo/full-frame-shot-red-bell-peppers-market-stall_1048944-9265708.jpg?w=740`}
            category={'Vegetables'}
            title={'Fresh Capsicum - Red'}
            description={"Blueberries, tiny yet potent, are a nutritional powerhouse. Loaded with antioxidants, they help neutralise harmful free radicals, safeguarding our body's cells from damage."}
            price={"226"}
          />
        </SwiperSlide>
        <SwiperSlide><VegCard
         id={"131"}
         image={`https://img.freepik.com/premium-photo/green-fresh-broccoli-background-close-up-colored-table-vegetables-diet-healthy-eating-organic-food_79075-19147.jpg?w=900`}
         category={'Vegetables'}
         title={'Fresho Broccoli'}
         description={"With a shape resembling that of a cauliflower, Brocollis have clusters of small, tight flower heads. These heads turn bright green on cooking and tastes slightly bitter."}
         price={"206"}
        /></SwiperSlide>
        <SwiperSlide><VegCard
          id={"132"}
          image={`https://img.freepik.com/free-photo/raw-foodstuff-with-water-drops-studio_23-2151364841.jpg?t=st=1718003866~exp=1718007466~hmac=9831c356108b3b64ac19ec5cb46e41e9173808973c14b0d8425fa4d5fbe6e5b3&w=1060`}
          category={'Vegetables'}
          title={'Fresho Carrot'}
          description={"Fresho Organic products are organically grown and handpicked by expert.Product image shown is for representation purpose only, the actually product may vary based on season, produce & availability."}
          price={"106"}
        /></SwiperSlide>
        <SwiperSlide><VegCard
          id={"133"}
          image={`https://img.freepik.com/premium-photo/full-frame-shot-tomatoes_1048944-18291200.jpg?w=740`}
          category={'Vegetables'}
          title={'Fresho Tomato'}
          description={"Having the size, colour and juiciness of cherries, cherry tomatoes are sweeter to taste than regular varieties. We pick these tomatoes from reputed farmers and store in hygienic conditions to maintain their freshness."}
          price={"306"}
        /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default SwipperFrits
