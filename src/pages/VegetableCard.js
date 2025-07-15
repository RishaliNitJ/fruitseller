// import React from 'react'
// import veg1 from '../img/vegetable-item-1.jpg'
// import veg2 from '../img/vegetable-item-2.jpg'
// import veg3 from '../img/vegetable-item-3.png'
// import veg4 from '../img/vegetable-item-4.jpg'
// import veg5 from '../img/vegetable-item-5.jpg'
// import veg6 from '../img/vegetable-item-6.jpg'

// function vegetableCard() {
//   return (
//     <div>
//         <div className="container-fluid vesitable py-5">
//     <div className="container py-5">
//       <h1 className="mb-0">Fresh Organic Vegetables</h1>
//       <div className="owl-carousel vegetable-carousel justify-content-center">
//         <div className="border border-primary rounded position-relative vesitable-item">
//           <div className="vesitable-img">
//             <img
//               src={veg6}
//               className="img-fluid w-100 rounded-top"
//               alt=""
//             />
//           </div>
//           <div
//             className="text-white bg-primary px-3 py-1 rounded position-absolute"
//             style={{ top: 10, right: 10 }}
//           >
//             Vegetable
//           </div>
//           <div className="p-4 rounded-bottom">
//             <h4>Parsely</h4>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
//               eiusmod te incididunt
//             </p>
//             <div className="d-flex justify-content-between flex-lg-wrap">
//               <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
//               <a
//                 href="#"
//                 className="btn border border-secondary rounded-pill px-3 text-primary"
//               >
//                 <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
//                 cart
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="border border-primary rounded position-relative vesitable-item">
//           <div className="vesitable-img">
//             <img
//               src={veg1}
//               className="img-fluid w-100 rounded-top"
//               alt=""
//             />
//           </div>
//           <div
//             className="text-white bg-primary px-3 py-1 rounded position-absolute"
//             style={{ top: 10, right: 10 }}
//           >
//             Vegetable
//           </div>
//           <div className="p-4 rounded-bottom">
//             <h4>Parsely</h4>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
//               eiusmod te incididunt
//             </p>
//             <div className="d-flex justify-content-between flex-lg-wrap">
//               <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
//               <a
//                 href="#"
//                 className="btn border border-secondary rounded-pill px-3 text-primary"
//               >
//                 <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
//                 cart
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="border border-primary rounded position-relative vesitable-item">
//           <div className="vesitable-img">
//             <img
//               src={veg3}
//               className="img-fluid w-100 rounded-top bg-light"
//               alt=""
//             />
//           </div>
//           <div
//             className="text-white bg-primary px-3 py-1 rounded position-absolute"
//             style={{ top: 10, right: 10 }}
//           >
//             Vegetable
//           </div>
//           <div className="p-4 rounded-bottom">
//             <h4>Banana</h4>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
//               eiusmod te incididunt
//             </p>
//             <div className="d-flex justify-content-between flex-lg-wrap">
//               <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
//               <a
//                 href="#"
//                 className="btn border border-secondary rounded-pill px-3 text-primary"
//               >
//                 <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
//                 cart
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="border border-primary rounded position-relative vesitable-item">
//           <div className="vesitable-img">
//             <img
//               src={veg4}
//               className="img-fluid w-100 rounded-top"
//               alt=""
//             />
//           </div>
//           <div
//             className="text-white bg-primary px-3 py-1 rounded position-absolute"
//             style={{ top: 10, right: 10 }}
//           >
//             Vegetable
//           </div>
//           <div className="p-4 rounded-bottom">
//             <h4>Bell Papper</h4>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
//               eiusmod te incididunt
//             </p>
//             <div className="d-flex justify-content-between flex-lg-wrap">
//               <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
//               <a
//                 href="#"
//                 className="btn border border-secondary rounded-pill px-3 text-primary"
//               >
//                 <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
//                 cart
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="border border-primary rounded position-relative vesitable-item">
//           <div className="vesitable-img">
//             <img
//               src={veg5}
//               className="img-fluid w-100 rounded-top"
//               alt=""
//             />
//           </div>
//           <div
//             className="text-white bg-primary px-3 py-1 rounded position-absolute"
//             style={{ top: 10, right: 10 }}
//           >
//             Vegetable
//           </div>
//           <div className="p-4 rounded-bottom">
//             <h4>Potatoes</h4>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
//               eiusmod te incididunt
//             </p>
//             <div className="d-flex justify-content-between flex-lg-wrap">
//               <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
//               <a
//                 href="#"
//                 className="btn border border-secondary rounded-pill px-3 text-primary"
//               >
//                 <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
//                 cart
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="border border-primary rounded position-relative vesitable-item">
//           <div className="vesitable-img">
//             <img
//               src={veg6}
//               className="img-fluid w-100 rounded-top"
//               alt=""
//             />
//           </div>
//           <div
//             className="text-white bg-primary px-3 py-1 rounded position-absolute"
//             style={{ top: 10, right: 10 }}
//           >
//             Vegetable
//           </div>
//           <div className="p-4 rounded-bottom">
//             <h4>Parsely</h4>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
//               eiusmod te incididunt
//             </p>
//             <div className="d-flex justify-content-between flex-lg-wrap">
//               <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
//               <a
//                 href="#"
//                 className="btn border border-secondary rounded-pill px-3 text-primary"
//               >
//                 <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
//                 cart
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="border border-primary rounded position-relative vesitable-item">
//           <div className="vesitable-img">
//             <img
//               src={veg5}
//               className="img-fluid w-100 rounded-top"
//               alt=""
//             />
//           </div>
//           <div
//             className="text-white bg-primary px-3 py-1 rounded position-absolute"
//             style={{ top: 10, right: 10 }}
//           >
//             Vegetable
//           </div>
//           <div className="p-4 rounded-bottom">
//             <h4>Potatoes</h4>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
//               eiusmod te incididunt
//             </p>
//             <div className="d-flex justify-content-between flex-lg-wrap">
//               <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
//               <a
//                 href="#"
//                 className="btn border border-secondary rounded-pill px-3 text-primary"
//               >
//                 <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
//                 cart
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="border border-primary rounded position-relative vesitable-item">
//           <div className="vesitable-img">
//             <img
//               src={veg6}
//               className="img-fluid w-100 rounded-top"
//               alt=""
//             />
//           </div>
//           <div
//             className="text-white bg-primary px-3 py-1 rounded position-absolute"
//             style={{ top: 10, right: 10 }}
//           >
//             Vegetable
//           </div>
//           <div className="p-4 rounded-bottom">
//             <h4>Parsely</h4>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
//               eiusmod te incididunt
//             </p>
//             <div className="d-flex justify-content-between flex-lg-wrap">
//               <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
//               <a
//                 href="#"
//                 className="btn border border-secondary rounded-pill px-3 text-primary"
//               >
//                 <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
//                 cart
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//     </div>
//   )
// }

// export default vegetableCard


import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import veg1 from '../img/vegetable-item-1.jpg';
import veg2 from '../img/vegetable-item-2.jpg';
import veg3 from '../img/vegetable-item-3.png';
import veg4 from '../img/vegetable-item-4.jpg';
import veg5 from '../img/vegetable-item-5.jpg';
import veg6 from '../img/vegetable-item-6.jpg';

function VegetableCard() {
  useEffect(() => {
    // Initialize the Owl Carousel
    $(".vegetable-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      center: false,
      dots: true,
      loop: true,
      margin: 25,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
      ],
      responsiveClass: true,
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 2 },
        992: { items: 3 },
        1200: { items: 4 }
      }
    });
  }, []); // Empty dependency array to run this effect only once on component mount

  return (
    <div>
      <div className="container-fluid vesitable py-5">
        <div className="container py-5">
          <h1 className="mb-0">Fresh Organic Vegetables</h1>
          <OwlCarousel
            className="owl-theme vegetable-carousel justify-content-center"
            loop
            margin={25}
            autoplay
            autoplayTimeout={1500}
            smartSpeed={1500}
            nav
            navText={['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>']}
            dots
            responsive={{
              0: { items: 1 },
              576: { items: 1 },
              768: { items: 2 },
              992: { items: 3 },
              1200: { items: 4 },
            }}
          >
           
            <div className="border border-primary rounded position-relative vesitable-item">
  <div className="vesitable-img">
    <img
      src={veg6}
      className="img-fluid w-100 rounded-top"
      alt=""
    />
  </div>
  <div
    className="text-white bg-primary px-3 py-1 rounded position-absolute"
    style={{ top: 10, right: 10 }}
  >
    Vegetable
  </div>
  <div className="p-4 rounded-bottom">
    <h4>Parsely</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
      incididunt
    </p>
    <div className="d-flex justify-content-between flex-lg-wrap">
      <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
      <a
        href="#"
        className="btn border border-secondary rounded-pill px-3 text-primary"
      >
        <i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart
      </a>
    </div>
  </div>
</div>

            {/* Include other vegetable card items here */}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default VegetableCard;
