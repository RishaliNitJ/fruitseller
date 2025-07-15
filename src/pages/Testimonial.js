import React from 'react'
import { Link } from 'react-router-dom';
import TestimonialSwipper from './TestimonialSwipper';

function Testimonial() {
  return (
    <div>
      <>
      <div className="container-fluid page-header py-5">
    <h1 className="text-center text-white display-6">Testimonial</h1>
    <ol className="breadcrumb justify-content-center mb-0">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to="/">Pages</Link>
      </li>
      <li className="breadcrumb-item active text-white">Testimonial</li>
    </ol>
  </div>
  {/* Tastimonial Start */}
  <div className="container-fluid testimonial py-5">
    <div className="container py-5">
      <div className="testimonial-header text-center">
        <h4 className="text-primary">Our Testimonial</h4>
        <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
      </div>
      <TestimonialSwipper/>
      
    </div>
  </div>
  {/* Tastimonial End */}
</>

    </div>
  )
}

export default Testimonial
